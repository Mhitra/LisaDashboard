import { validateCookies } from "@/utils/helpers.js";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle.js";

const Header = ({ something }) => {
  const [darkMode, setDarkMode] = useState(true);

  const handleLogin = () => {

    //direk yönlendirme yapılacak

    if (!something) {
      // window.open(
      //   "http://localhost:3001/api/auth/discord",
      //   "_blank",
      //   "width=500,height=900"
      // );
      window.location.href = "http://localhost:3001/api/auth/discord";
    }

  };
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      console.log("dark");
    } else {
      document.body.classList.remove("dark");
      console.log("light");
    }
  }, [darkMode]);

  return (
    <div className="container flex items-center justify-between font-montserrat p-12 left-12 right-12">
      <div className="">
        <Link href="/">
          <h1 className="text-4xl hover:text-z-specific transform duration-200">
            Bot Dashboard
          </h1>
        </Link>
      </div>

      <nav className={`space-x-8 ${something ? "hidden" : ""}`}>
        <a className="cursor-pointer hover:text-z-specific transform duration-200">
          Commands
        </a>
        <a className="cursor-pointer hover:text-z-specific transform duration-200">
          Donate
        </a>
        <a className="cursor-pointer hover:text-z-specific transform duration-200">
          Support
        </a>
        <a className="cursor-pointer hover:text-z-specific transform duration-200">
          Status
        </a>
      </nav>

      <div className="space-x-6 flex items-center">
        <ThemeToggle />
        <menu>EN</menu>
      </div>

      <div className="space-x-12 items-center">
        <button
          className={`bg-z-specific-brown px-5 py-2.5 rounded ${
            something ? "cursor-default" : "cursor-pointer"
          }`}
          onClick={handleLogin}
        >
          {something ? "Logged In" : "Log In"}
        </button>
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const something = validateCookies(ctx);
  return {
    props: { something },
  };
}

export default Header;
