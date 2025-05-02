"use client";

import { mainRoutes } from "@/util/routes";
import { usePathname, useRouter } from "next/navigation";
import { MenuRoute } from "@/util/types";
import ESigeLogo from "../basic/ESigeLogo";
import DropdownMenu from "../basic/DropdownMenu";

const Navbar = () => {
  const router = useRouter();
  const currentPath = usePathname();
  const routeTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="w-64 h-screen min-h-fit bg-blue_dark text-white flex flex-col p-4 space-y-4">
      <div className="w-full flex justify-center items-center">
        <ESigeLogo className="w-20 h-20" />
      </div>
      {mainRoutes.map((route: MenuRoute) =>
        route.sub_routes ? (
          <DropdownMenu route={route} routeTo={routeTo} />
        ) : (
          <button
            className={`text-left hover:bg-gray-700 px-4 py-2 rounded ${
              currentPath === route.path ? "bg-primary_color" : ""
            }`}
            onClick={() => routeTo(route.path)}
          >
            <label className="flex gap-2 items-center">
              <route.icon />
              <span>{route.name}</span>
            </label>
          </button>
        )
      )}
    </div>
  );
};

export default Navbar;
