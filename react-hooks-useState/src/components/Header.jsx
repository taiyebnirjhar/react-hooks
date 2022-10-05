import React from "react";

function Header() {
  return (
    <div>
      <nav className="flex flex-row bg-slate-900 p-4 text-gray-300 justify-between">
        <div className="flex flex-row  gap-4">
          <div className=" w-4 h-4 rounded-full bg-red-400 "></div>
          <div className=" w-4 h-4 rounded-full bg-yellow-400"></div>
          <div className=" w-4 h-4 rounded-full bg-green-400 "></div>
        </div>
        <div className="">
          <p className="inline">react-hooks.jsx</p>
          <p className="inline"> - Visual-Studio-Code</p>
        </div>
        <div className="flex flex-row gap-10">
          <div>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div>
            <i className="fa-solid fa-caret-up"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
