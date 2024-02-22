"use client";

import logo from "../public/assets/images/archiduchesse.svg";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const isUserLoggedIn = true;
  return (
    <nav className="z-50 sticky top-0 flex-between w-full mb-16 pt-3 ">
      <Link href="/" className="flex gap-2 flex-center">
        <p className=" text-3xl font-sacramento orange_gradient text-center">
          Archiduchesse
        </p>
      </Link>
      {/* Desktop Navigation */
      /** hide name on small device */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex space-x-4">
            <button className="flex gap-3 md:gap-5 outline_btn">
              User Name
            </button>
            <button className="outline_btn" onClick={() => signOut()}>
              Logout
            </button>
            <Link href="/profile">
              <Image
                src={logo}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <div>Login</div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
