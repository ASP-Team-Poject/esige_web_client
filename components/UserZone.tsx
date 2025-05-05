"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, User } from "lucide-react";
import { MenuRoute } from "@/util/types";
import Link from "next/link";
import { userRoutes } from "@/util/routes";

const UserZone = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex justify-evenly items-center gap-2 px-4 py-2"
      >
        <div className="flex justify-center items-center w-10 h-10 rounded-full border-[1px] border-[#eee]">
          <User color="gray" />
        </div>
        <span>Prince Ilunga</span>
        {dropdownOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      <AnimatePresence initial={false}>
        {dropdownOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-6 mt-1 absolute w-fit right-1 bg-white p-4 flex flex-col gap-2 shadow-md rounded-lg"
          >
            {userRoutes.map((route: MenuRoute, index) => (
              <Link
              key={index}
                className="flex gap-2 items-center whitespace-nowrap hover:bg-primary_color hover:text-white p-2 rounded-md"
                href={route.path}
              >
                <route.icon />
                <span>{route.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserZone;
