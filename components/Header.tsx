import React from "react";

export const Header = () => {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-4 bg-white border-b border-b-gray-300 shadow-md mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="font-bold leading-relaxed inline-block text-xl mr-4 py-2 whitespace-nowrap uppercase text-red-600"
              href="#pablo"
            >
              Janji<span className="text-black">Kampanye</span>.id
            </a>
            <button
              className="text-red-600 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div id="example-navbar-danger">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="bg-red-600">
                <a
                  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:bg-red-700"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">PILPRES 2024</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
