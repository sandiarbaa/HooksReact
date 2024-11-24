import React from "react";
import { useAppState } from "../context/state";
import Link from "next/link";

const MainLayouts = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode, setIsDarkMode } = useAppState();

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`${isDarkMode ? "bg-slate-500" : "bg-white"} h-screen`}>
      {/* Navbar <=> */}
      <div
        className={`flex justify-between items-center py-3 px-5 ${
          isDarkMode ? "bg-slate-100" : "bg-slate-600"
        }`}
      >
        <div>
          <ul
            className={`flex gap-x-5 font-bold text-lg ${
              isDarkMode ? "text-slate-600" : "text-white"
            }`}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div
          className={`${isDarkMode ? "button-dark" : "button-light"}`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </div>
      </div>
      {/* End of Navbar <=> */}

      <div className="px-10 pt-3">{children}</div>
    </div>
  );
};

export default MainLayouts;
