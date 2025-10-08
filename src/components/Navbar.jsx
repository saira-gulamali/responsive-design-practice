import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex w-full justify-center h-26 text-violet-800 bg-violet-50  shadow-md ">
      <nav className="w-full max-w-6xl flex justify-between items-center p-4">
        <div className="flex items-center text-bold text-violet-800/70 text-2xl md:text-3xl   font-primary">
          <img
            src="https://static-task-assets.react-formula.com/899963.png"
            alt="logo"
            className="h-20 mr-2 "
          />
          Company
        </div>

        <div>
          <button
            onClick={() => {
              setIsMobileMenuOpen(true);
            }}
            className=" md:hidden "
          >
            <i className="fa-solid fa-bars text-3xl m-4"></i>
          </button>
        </div>
        <div className="hidden md:flex gap-8 text-xl font-medium ">
          <button>Home</button>
          <button>About</button>
          <button>Contact</button>
          <button>
            <i className="fa-solid fa-magnifying-glass text-rose-500 font-extrabold text-2xl"></i>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="fixed top-0 right-0 w-48  bg-violet-800 flex flex-col justify-start items-start p-6 md:hidden text-violet-100 text-xl rounded-bl-lg">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
              className="text-right w-full "
            >
              <i className=" fa-regular fa-circle-xmark text-3xl p-2"></i>
            </button>
            <div className="flex flex-col  w-full">
              <button className=" text-left   py-4 ">Home</button>
              <button className=" text-left  py-4 ">About</button>
              <button className=" text-left  py-4 ">Contact</button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
