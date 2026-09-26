"""Rendered-HTML SEO audit. Usage: python3 scripts/seo_audit.py http://localhost:3100"""
import sys, re, json, urllib.request
from html.parser import HTMLParser
BASE=sys.argv[1].rstrip('/'); SITE="https://www.bizzonedigital.com"
def get(path):
    try:
        r=urllib.request.urlopen(urllib.request.Request(BASE+path,headers={'User-Agent':'audit'}),timeout=30)
        return r.status, r.read().decode('utf-8','replace')
    except urllib.error.HTTPError as e: return e.code, ''
class P(HTMLParser):
    def __init__(s):
        super().__init__(); s.meta=[]; s.links=[]; s.h1=[]; s.in_h1=0; s.imgs=[]; s.a=[]; s.title=[]; s.in_title=False; s.ld=[]; s.in_ld=False; s.hs=[]; s.cur_a=None
    def handle_starttag(s,t,a):
        a=dict(a)
        if t=='meta': s.meta.append(a)
        if t=='link': s.links.append(a)
        if t=='h1': s.in_h1+=1; s.h1.append('')
        if t in('h1','h2','h3','h4','h5','h6'): s.hs.append(t)
        if t=='img': s.imgs.append(a)
        if t=='a': s.cur_a={'href':a.get('href'),'label':a.get('aria-label'),'text':''}; s.a.append(s.cur_a)
        if t=='title' and not s.title: s.in_title=True
        if t=='script' and a.get('type')=='application/ld+json': s.in_ld=True; s.ld.append('')
    def handle_endtag(s,t):
        if t=='h1': s.in_h1-=1
        if t=='title': s.in_title=False
        if t=='script': s.in_ld=False
        if t=='a': s.cur_a=None
    def handle_data(s,d):
        if s.in_h1 and s.h1: s.h1[-1]+=d
        if s.in_title: s.title.append(d)
        if s.in_ld: s.ld[-1]+=d
        if s.cur_a is not None: s.cur_a['text']+=d.strip()
_,sm=get('/sitemap.xml')
paths=[u.replace(SITE,'') or '/' for u in re.findall(r'<loc>(.*?)</loc>',sm)]
report=[]; titles={}; descs={}; alllinks=set(); problems=[]
for p in paths:
    st,html=get(p); x=P(); x.feed(html)
    m=lambda k,v: [z.get('content') for z in x.meta if z.get(k)==v]
    title=''.join(x.title).strip(); desc=m('name','description'); canon=[l.get('href') for l in x.links if l.get('rel')=='canonical']
    og={k:m('property','og:'+k) for k in ['title','description','url','image','type','site_name']}
    tw={k:m('name','twitter:'+k) for k in ['card','title','description','image']}
    exp=SITE+('' if p=='/' else p)
    issues=[]
    if st!=200: issues.append(f'status {st}')
    if len(desc)!=1: issues.append(f'desc count {len(desc)}')
    if len(canon)!=1 or canon[0]!=exp: issues.append(f'canonical {canon}')
    if og['url']!=[exp]: issues.append(f'og:url {og["url"]}')
    for k,v in og.items():
        if not v: issues.append('missing og:'+k)
    for k,v in tw.items():
        if not v: issues.append('missing twitter:'+k)
    if m('name','keywords'): issues.append('META KEYWORDS')
    rb=m('name','robots')
    if any('noindex' in (r or '') for r in rb): issues.append('NOINDEX')
    if len(x.h1)!=1: issues.append(f'h1 count {len(x.h1)}')
    noalt=[i.get('src') for i in x.imgs if 'alt' not in i]
    if noalt: issues.append(f'img missing alt {noalt}')
    lds=[]
    for block in x.ld:
        try:
            d=json.loads(block); lds+= [z.get('@type') for z in (d if isinstance(d,list) else [d])]
        except Exception as e: issues.append('BAD JSON-LD '+str(e))
    empty=[a['href'] for a in x.a if not a['text'] and not a['label'] and not re.search(r'<a[^>]*href="%s"[^>]*>\s*<(img|svg)'%re.escape(a['href'] or ''),html)]
    bad=[a['href'] for a in x.a if a['href'] in (None,'#','')]
    if bad: issues.append(f'dead hrefs {bad}')
    for a in x.a:
        h=a['href'] or ''
        if h.startswith('/') : alllinks.add(h.split('#')[0] or '/')
        if '#services' in h or h=='/#contact': issues.append('legacy anchor link '+h)
    t=len(title); dl=len(desc[0]) if desc else 0
    titles.setdefault(title,[]).append(p); descs.setdefault(desc[0] if desc else '',[]).append(p)
    report.append(dict(path=p,status=st,title=title,tlen=t,dlen=dl,h1=[h.strip() for h in x.h1],ld=lds,imgs=len(x.imgs),issues=issues, empty_links=empty[:5]))
for r in report:
    print(f"{r['path']:<58} {r['status']} T{r['tlen']:>3} D{r['dlen']:>3} imgs{r['imgs']:>3} LD={r['ld']}")
    print(f"   title: {r['title']}\n   h1: {r['h1']}")
    if r['issues']: print('   ISSUES:',r['issues'])
    if r['empty_links']: print('   empty-text links:',r['empty_links'])
dups=[(k,v) for k,v in titles.items() if len(v)>1]+[(k,v) for k,v in descs.items() if len(v)>1]
print('\nDUPLICATES:',dups or 'none')
print('\nINTERNAL LINK CHECK:')
bad=[]
for l in sorted(alllinks):
    st,_=get(l)
    if st!=200: bad.append((l,st))
print(f'{len(alllinks)} unique internal links; broken: {bad or "none"}')
print('\nNon-sitemap routes:')
for p in ['/admin/login','/service/app-development','/service/nope','/blog/nope']:
    try:
        r=urllib.request.urlopen(urllib.request.Request(BASE+p),timeout=20); print(p,r.status,r.url)
    except urllib.error.HTTPError as e: print(p,e.code)
