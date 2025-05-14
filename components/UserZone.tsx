"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, LogOut, User } from "lucide-react";
import { MenuRoute, UserType } from "@/util/types";
import Link from "next/link";
import { userRoutes } from "@/util/routes";
import Loader from "./basic/Loader";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const UserZone = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);
  const router = useRouter();

  const handleLogOut = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    localStorage.clear();
    Cookies.remove("userId");

    router.push("/");
  };

  useEffect(() => {
    const foundCurrentUser = JSON.parse(localStorage.getItem("currentUser")!);
    setCurrentUser(foundCurrentUser);
  }, []);

  return (
    <div>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex justify-evenly items-center gap-2 px-4 py-2"
      >
        <div className="flex justify-center items-center w-10 h-10 rounded-full border-[1px] border-[#eee]">
          <User color="gray" />
        </div>
        {currentUser ? (
          <span>{currentUser.displayName}</span>
        ) : (
          <Loader colorClass="text-primary_color" />
        )}
        {dropdownOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      <AnimatePresence initial={false}>
        {dropdownOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-6 mt-1 absolute w-fit right-1 z-50 bg-white p-4 flex flex-col gap-2 shadow-md rounded-lg"
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
            <Link
              className="flex gap-2 items-center whitespace-nowrap hover:bg-primary_color hover:text-white p-2 rounded-md"
              href={"#"}
              onClick={(e) => handleLogOut(e)}
            >
              <LogOut />
              <span>{"Se Deconnecter"}</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserZone;
