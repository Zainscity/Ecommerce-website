// import Link from "next/link";
// import { CiUser } from "react-icons/ci";
// import { CiSearch } from "react-icons/ci";
// import { CiShoppingCart } from "react-icons/ci";
// import { CiHeart } from "react-icons/ci";

// export default function Navbar() {
//   return (
//     <header className="flex justify-between items-center p-4 bg-[#FBEBB5] text-black md:flex-row">
//       <nav className="container">
//         <ul className="container1">
//           <li ><Link href="/">Home</Link></li>
//           <li ><Link href="/shop">Shop</Link></li>
//           <li ><Link href="/about">About</Link></li>
//           <li ><Link href="/contact">Contact</Link></li>
//         </ul>
//       </nav>
//       <div className="flex mr-5 text-xl space-x-6 mr-20">
//         <Link href="/profile"><CiUser/></Link>
//         <Link href="/profile"><CiSearch/></Link>
//         <Link href="/profile"><CiHeart/></Link>
//         <Link href="/profile"><CiShoppingCart/></Link>
      
//       </div>
//     </header>
//   );
// }

"use client";
import { IoClose } from "react-icons/io5";

import Link from "next/link";
import React, { useState } from "react";
import { MdManageAccounts, MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch, CiHeart } from "react-icons/ci";
import { TbMenu4 } from "react-icons/tb";

const Navbar = (props:any) => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };

  return (
    <main>
      <header className={`text-gray-600 ${props.bgColor} body-font `}>
        <div className="container mx-auto flex flex-wrap  p-5 flex-col md:flex-row items-center justify-between  ">
      
          <nav className="hidden md:block md:ml-auto flex flex-wrap md:space-x-14 md:mr-16 items-center text-base justify-center">
            <Link href={"/home"} className="mr-5 hover:text-gray-900">
            Home
            </Link>
            <Link href={"/shop"} className="mr-5 hover:text-gray-900">
              Shop
            </Link>
            <Link href={"/about"} className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link href={"/contact"} className="mr-5 hover:text-gray-900">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:block">
            <div className=" w-[70%] sm:w-[247px] h-[28px] top-[36px] left-[1093px] flex gap-x-10">
              <span className="  xs:visible w-[28px]  h-[28px] top-[36px] left-[1093px] text-[30px]">
                {" "}
                <Link href={"myaccount"}>
                  {" "}
                  <MdManageAccounts/>{" "}
                </Link>{" "}
              </span>
              <span className="  xs:visible w-[20px]  h-[28px] top-[36px] left-[1093px] text-[30px] ">
                <CiSearch />
              </span>
              <span className="  xs:visible w-[20px]  h-[28px] top-[36px] left-[1093px] text-[30px]">
                {" "}
                <Link href={"/checkouts"}>
                  {" "}
                  <CiHeart />{" "}
                </Link>{" "}
              </span>
              <span className=" xs:visible w-[20px]  h-[28px] top-[36px] left-[1093px] text-[30px]">
                {" "}
                <Link href={"/cart"}>
                  {" "}
                  <MdOutlineShoppingCart />{" "}
                </Link>{" "}
              </span>
            </div>
          </div>
          {/* menu button  */}
          <div className="md:hidden flex items-center  w-8 -mr-[320px] mt-[5px] md:-ml-0 md:-mr-0">
            <button
              className="inline-flex items-center justify-center text-2xl p-2 rounded-md text-black  hover:text-black "
              onClick={toggleNavbar}
            >
              {isClick ? <IoClose /> : <TbMenu4 />}
            </button>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
              <Link href={"/"} className="mr-5 block hover:text-gray-900">
                Home
              </Link>
              <Link href={"/shop"} className="mr-5 block hover:text-gray-900">
                Shop
              </Link>
              <Link href={"/contact"} className="mr-5 block hover:text-gray-900">
                Contact
              </Link>
              <div className="flex gap-4 text-xl">
              <Link href={"myaccount"}>
                  {" "}
                  <MdManageAccounts />{" "}
                </Link>{" "}
                <Link href={"/checkouts"} className="">
                  {" "}
                  <CiHeart />{" "}
                </Link>{" "}
                <Link href={"/cart"}>
                  {" "}
                  <MdOutlineShoppingCart />{" "}
                </Link>{" "}
              </div>
            </div>
          </div>
        )}
      </header>
    </main>
  );
};

export default Navbar;