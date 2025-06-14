import React from "react";
import UserZone from "../UserZone";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Header = ({ isMenuOpen, collapseMenu }: any) => {
  return (
    <header className="bg-white flex justify-between relative">
      <div className="relative">
        <span
          title={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => collapseMenu()}
          className={`absolute top-3 ${
            isMenuOpen
              ? "-right-5 bg-white hover:bg-gray-200 text-gray-500"
              : "left-3 bg-primary_color hover:bg-blue_dark text-white"
          } cursor-pointer  border-[1px] border-[#eee] font-bold p-1 rounded-full transition-colors`}
        >
          {isMenuOpen ? <ArrowLeft /> : <ArrowRight />}
        </span>
      </div>
      <UserZone />
    </header>
  );
};

export default Header;
