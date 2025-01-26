"use client";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import React, { useState } from "react";
import { MdManageAccounts, MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch, CiHeart, CiUser, CiShoppingCart } from "react-icons/ci";
import { TbMenu4 } from "react-icons/tb";

interface NavbarProps {
  bgColor?: string;
}

const Navbar: React.FC<NavbarProps> = ({ bgColor }) => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };

  return (
    <header className={`text-gray-600 ${bgColor} body-font`}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <nav className="hidden md:block md:ml-auto flex flex-wrap md:space-x-14 md:mr-16 items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="/components/shop" className="mr-5 hover:text-gray-900">
            Shop
          </Link>
          <Link href="/components/about" className="mr-5 hover:text-gray-900">
            About
          </Link>
          <Link href="/components/contact" className="mr-5 hover:text-gray-900">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <div className="w-[70%] sm:w-[247px] h-[28px] flex gap-x-10">
            <Link href="myaccount">
              <CiUser className="text-[30px]" />
            </Link>
            <CiSearch className="text-[30px]" />
            <Link href="/checkouts">
              <CiHeart className="text-[30px]" />
            </Link>
            <Link href="/cart">
              <CiShoppingCart className="text-[30px]" />
            </Link>
          </div>
        </div>

        <div className="md:hidden flex items-center w-8">
          <button
            className="inline-flex items-center justify-center text-2xl p-2 rounded-md text-black hover:text-black"
            onClick={toggleNavbar}
          >
            {isClick ? <IoClose /> : <TbMenu4 />}
          </button>
        </div>
      </div>

      {isClick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            <Link href="/" className="mr-5 block hover:text-gray-900">
              Home
            </Link>
            <Link href="/shop" className="mr-5 block hover:text-gray-900">
              Shop
            </Link>
            <Link href="/contact" className="mr-5 block hover:text-gray-900">
              Contact
            </Link>
            <div className="flex gap-4 text-xl">
              <Link href="myaccount">
                <MdManageAccounts />
              </Link>
              <Link href="/checkouts">
                <CiHeart />
              </Link>
              <Link href="/cart">
                <MdOutlineShoppingCart />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
