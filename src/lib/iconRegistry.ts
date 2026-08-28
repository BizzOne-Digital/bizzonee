import {
  Building2, UtensilsCrossed, Briefcase, ShoppingBag, Plane, Heart, Car, Users,
  Wrench, Home, Scissors, GraduationCap, Dumbbell, Camera, Music, Book,
  Coffee, Truck, Leaf, Gem, PawPrint, Palette, Laptop, Stethoscope,
  type LucideIcon,
} from "lucide-react";

export const ICON_REGISTRY: Record<string, LucideIcon> = {
  Building2, UtensilsCrossed, Briefcase, ShoppingBag, Plane, Heart, Car, Users,
  Wrench, Home, Scissors, GraduationCap, Dumbbell, Camera, Music, Book,
  Coffee, Truck, Leaf, Gem, PawPrint, Palette, Laptop, Stethoscope,
};

export const ICON_NAMES = Object.keys(ICON_REGISTRY);

export function getIcon(name: string): LucideIcon {
  return ICON_REGISTRY[name] || Briefcase;
}
