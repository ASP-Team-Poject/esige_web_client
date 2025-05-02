"use client";

import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MenuRoute } from "@/util/types";
import { usePathname } from "next/navigation";

const DropdownMenu = ({
  route,
  routeTo,
}: {
  route: MenuRoute;
  routeTo: Function;
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const currentPath = usePathname();

  return (
    <div>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex justify-between items-center w-full hover:bg-gray-700 px-4 py-2 rounded"
      >
        <label className="flex gap-2 items-center">
          <route.icon />
          <span>{route.name}</span>
          {dropdownOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </label>
      </button>

      <AnimatePresence initial={false}>
        {dropdownOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-6 mt-1"
          >
            {route.sub_routes?.map((sub_route: MenuRoute) => (
              <button
                className={`w-full text-left hover:bg-gray-700 px-4 py-2 rounded ${
                  currentPath === sub_route.path ? "bg-primary_color" : ""
                }`}
                onClick={() => routeTo(sub_route.path)}
              >
                <label className="flex gap-2 items-center">
                  <sub_route.icon />
                  <span>{sub_route.name}</span>
                </label>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
