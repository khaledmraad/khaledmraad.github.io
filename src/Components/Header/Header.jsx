import React, { useEffect, useState } from "react";

export default function Header() {

  const [theme,setTheme]=useState("light")

  function handleTheme(){
    setTheme(theme === "light" ? "dark" : "light")
    // alert(theme)
  }

  useEffect(()=>{
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    } 
  },[theme])

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
            <span className="self-center text-xl font-semibold text-[#343a40] whitespace-nowrap dark:text-[#ffffff]">
              Khaled Mrad
            </span>
          </a>
          <div
            className="hidden justify-between items-ce nter w-full lg:flex lg:w-auto lg:order-1 "
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/#Skills"
                  className="block py-2 pr-4 pl-3 text-[#343a40] rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-[#ffffff]"
                  aria-current="page"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="/#Education"
                  className="block py-2 pr-4 pl-3 text-[#343a40] rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-[#ffffff]"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="/#Interests"
                  className="block py-2 pr-4 pl-3 text-[#343a40] rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-[#ffffff]"
                >
                  Intrests
                </a>
              </li>
              <li>
                <a
                  href="/#Projects"
                  className="block py-2 pr-4 pl-3 text-[#343a40] rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-[#ffffff]"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/#Contact"
                  className="block py-2 pr-4 pl-3 text-[#343a40] rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-[#ffffff]"
                >
                  Contact Me
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-[#343a40] rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-[#ffffff]"
                >
                  Blogs
                </a>
              </li>

              <li onClick={handleTheme}>
                
                  dark
                
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
