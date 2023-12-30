import { useState } from "react";
export const Sidebar = () => {
  const [open, setOpen] = useState(true);

  
  const Menus = [
    { title: "Home" },
    { title: "Shorts", },
    { title: "Subscription" },
  ];

  return (
    <div>
      <div
        className={` ${
          open ? "w-40" : "w-10 "
        } bg-black h-screen p-3  pt-1 relative duration-300`}
      >
        <button
            type="button"
            className="p-2.5 px-3 text-2xl hover:bg-gray-600 rounded-full focus:outline-none"
            onClick={()=>setOpen(!open)} >
            <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
                />
            </svg>
         </button>

        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className="flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4"
            >
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
