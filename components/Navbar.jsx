"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const isUserLoggedIn = true;
  return (
    <nav className="z-50 sticky top-0 flex-between w-full mb-16 pt-3 bg-red-50 ">
      <Link href="/" className="flex gap-2 flex-center">
        <p className=" text-3xl font-sacramento orange_gradient text-center">
          Archiduchesse
        </p>
      </Link>
      {/* Mobile Navigation */
      /** cache le nom de l'utilisateur */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 ">Name</div>
        ) : (
          <div>Login</div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
