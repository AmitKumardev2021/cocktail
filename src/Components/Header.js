import React from "react";
import { Link } from "react-router-dom";
import { BiDrink } from "react-icons/bi";

const Header = () => {
  return (
    <nav className="fixed h-30 -mt-20 w-full  bg-zinc-300/50 items-center flex sm:justify-start space-x-4">
      <BiDrink
        color="yellow"
        className="ml-11 bg-gradient-to-r from-cyan-500 to-blue-500 "
        size={40}
      />
      <h2 className="font-bold text-cyan-700">CocktailSerch</h2>
      {[["Home", "/"]].map(([title, url]) => (
        <Link
          to={url}
          className="rounded-sm px-3 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          key={title}
        >
          <h2>{title}</h2>
        </Link>
      ))}
    </nav>
  );
};

export default Header;
