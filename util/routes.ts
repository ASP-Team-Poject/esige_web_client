import {
  Home,
  File,
  School,
  List,
  Plus,
  User,
  LogOut,
  Database,
  Users,
} from "lucide-react";
import { MenuRoute } from "./types";

export const mainRoutes: MenuRoute[] = [
  {
    name: "Tableau de Bord",
    path: "/home",
    icon: Home,
  },
  {
    name: "Reporting",
    path: "/reporting",
    icon: File,
  },
  {
    name: "Établissements",
    path: "#",
    icon: School,
    sub_routes: [
      { name: "Liste", path: "/schools", icon: List },
      { name: "Creer un Nouveau", path: "/schools/new", icon: Plus },
      {
        name: "Centres de Regroupement",
        path: "/schools/grouping_centers",
        icon: List,
      },
    ],
  },
  {
    name: "Mon Profil",
    path: "/profile",
    icon: User,
  },
  {
    name: "Encodages",
    path: "/encodings",
    icon: Database,
  },
  {
    name: "Utilisateurs",
    path: "#",
    icon: Users,
    sub_routes: [
      { name: "Liste", path: "/users", icon: List },
      { name: "Creer un Nouveau", path: "/users/new", icon: Plus },
    ],
  },
];

export const userRoutes: MenuRoute[] = [
  {
    name: "Profil",
    path: "/profile",
    icon: User,
  },
];
