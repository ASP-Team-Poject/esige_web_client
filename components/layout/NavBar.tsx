"use client";

import { usePathname, useRouter } from "next/navigation";
import { MenuRoute, UserType } from "@/util/types";
import ESigeLogo from "../basic/ESigeLogo";
import DropdownMenu from "../basic/DropdownMenu";
import { useEffect, useState } from "react";
import { localStorageKeys } from "@/util/constants";
import { getUserNavbarMenu } from "@/util/functions";

const Navbar = ({ isMenuOpen }: any) => {
  const [menuRoutes, setMenuRoutes] = useState<MenuRoute[]>([]);
  const router = useRouter();
  const currentPath = usePathname();
  const routeTo = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    const user = localStorage.getItem(localStorageKeys.CURRENT_USER);
    if (user) {
      const currentUser: UserType = JSON.parse(user);
      const userMenuRoutes = getUserNavbarMenu(currentUser);
      setMenuRoutes(userMenuRoutes);
    }
  }, []);

  return (
    <>
      {isMenuOpen && (
        <div
          id="navbar"
          className={
            "w-64 h-screen min-h-fit bg-white text-gray-600 flex flex-col p-4 space-y-4"
          }
        >
          <div className="flex justify-center items-center">
            <ESigeLogo className="w-20 h-20" />
          </div>
          {menuRoutes.map((route: MenuRoute, index) =>
            route.sub_routes ? (
              <DropdownMenu key={index} route={route} routeTo={routeTo} />
            ) : (
              <button
                className={`text-left hover:bg-gray-200 hover:text-gray-600 px-4 py-2 rounded ${
                  currentPath.startsWith(route.path)
                    ? "bg-primary_color text-white"
                    : ""
                }`}
                onClick={() => routeTo(route.path)}
                key={index}
              >
                <label className="flex gap-2 items-center cursor-pointer">
                  <route.icon />
                  <span>{route.name}</span>
                </label>
              </button>
            )
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
