"use client";

import Image from "next/image";
import Link from "next/link";

import { Search, Menu, X } from "lucide-react";

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";

import { Button } from "./ui/button";
import { Spinner } from "./spinner";

import { navigation, socialLinks } from "@constants";

import { cn } from "@lib/utils";

import { useState, useEffect } from "react";

export const Navbar = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();

  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");

    if (body) {
        isOpenMenu &&
          body.classList.add(
            "overflow-hidden",
            "absolute",
            "w-[100vw]",
            "h-[100vh]",
          );
    }
  }, [isOpenMenu]);

  return (
    <nav className="bg-primary flex flex-col">
      <div className="flex items-center justify-between px-2 py-2">
        <form action="" className="flex items-center lg:bg-white px-2 py-1">
          <div className={cn("lg:hidden mr-3", isOpenSearch && "hidden")}>
            {isOpenMenu ? (
              <X
                size={20}
                className="cursor-pointer"
                onClick={() => setIsOpenMenu(false)}
              />
            ) : (
              <Menu
                size={20}
                className="cursor-pointer"
                onClick={() => setIsOpenMenu(true)}
              />
            )}
          </div>

          <input
            placeholder="Search lyrics & more"
            className={cn(
              "placeholder:text-black lg:placeholder:focus:text-gray-500 placeholder:focus:text-black/30 focus:outline-0 text-base placeholder:text-sm font-semibold bg-primary lg:bg-white",
              !isOpenSearch && "hidden lg:block",
            )}
          />

          <Search
            className={cn("", isOpenSearch && "hidden lg:block")}
            width={20}
            height={20}
            onClick={() => setIsOpenSearch(true)}
          />
        </form>

        <Link href="/" className={cn("", isOpenSearch && "hidden lg:block")}>
          <svg className="h-[19px]" viewBox="0 0 100 15">
            <path d="M11.7 2.9s0-.1 0 0c-.8-.8-1.7-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.1-.2.2-.3.4-.5.6v.1c0 .1.1.1.1.1.4-.2.9-.3 1.4-.3 1.1 0 2.2.5 2.9 1.2h1.6c.1 0 .1-.1.1-.1V2.9c.1 0 0 0 0 0zm-.1 4.6h-1.5c-.8 0-1.4-.6-1.5-1.4.1 0 0-.1 0-.1-.3 0-.6.2-.8.4v.2c-.6 1.8.1 2.4.9 2.4h1.1c.1 0 .1.1.1.1v.4c0 .1.1.1.1.1.6-.1 1.2-.4 1.7-.8V7.6c.1 0 0-.1-.1-.1z" />
            <path d="M11.6 11.9s-.1 0 0 0c-.1 0-.1 0 0 0-.1 0-.1 0 0 0-.8.3-1.6.5-2.5.5-3.7 0-6.8-3-6.8-6.8 0-.9.2-1.7.5-2.5 0-.1-.1-.1-.2-.1h-.1C1.4 4.2.8 5.7.8 7.5c0 3.6 2.9 6.4 6.4 6.4 1.7 0 3.3-.7 4.4-1.8V12c.1 0 0-.1 0-.1zm13.7-3.1h3.5c.8 0 1.4-.5 1.4-1.3v-.2c0-.1-.1-.1-.1-.1h-4.8c-.1 0-.1.1-.1.1v1.4c-.1 0 0 .1.1.1zm5.1-6.7h-5.2c-.1 0-.1.1-.1.1v1.4c0 .1.1.1.1.1H29c.8 0 1.4-.5 1.4-1.3v-.2c.1-.1.1-.1 0-.1z" />
            <path d="M30.4 12.3h-6.1c-1 0-1.6-.6-1.6-1.6V1c0-.1-.1-.1-.1-.1-1.1 0-1.8.7-1.8 1.8V12c0 1.1.7 1.8 1.8 1.8H29c.8 0 1.4-.6 1.4-1.3v-.1c.1 0 .1-.1 0-.1zm12 0c-.6-.1-.9-.6-.9-1.3V1.1s0-.1-.1-.1H41c-.9 0-1.5.6-1.5 1.5v9.9c0 .9.6 1.5 1.5 1.5.8 0 1.4-.6 1.5-1.5 0-.1 0-.1-.1-.1zm8.2 0h-.2c-.9 0-1.4-.4-1.8-1.1l-4.5-7.4-.1-.1c-.1 0-.1.1-.1.1V8l2.8 4.7c.4.6.9 1.2 2 1.2 1 0 1.7-.5 2-1.4 0-.2-.1-.2-.1-.2zm-.9-3.8c.1 0 .1-.1.1-.1V1.1c0-.1 0-.1-.1-.1h-.4c-.9 0-1.5.6-1.5 1.5v3.1l1.7 2.8c.1 0 .1.1.2.1zm13 3.8c-.6-.1-.9-.6-.9-1.2v-10c0-.1 0-.1-.1-.1h-.3c-.9 0-1.5.6-1.5 1.5v9.9c0 .9.6 1.5 1.5 1.5.8 0 1.4-.6 1.5-1.5l-.2-.1zm18.4-.5H81c-.7.3-1.5.5-2.5.5-1.6 0-2.9-.5-3.7-1.4-.9-1-1.4-2.4-1.4-4.2V1c0-.1 0-.1-.1-.1H73c-.9 0-1.5.6-1.5 1.5V8c0 3.7 2 5.9 5.4 5.9 1.9 0 3.4-.7 4.3-1.9v-.1c0-.1 0-.1-.1-.1z" />
            <path d="M81.2.9h-.3c-.9 0-1.5.6-1.5 1.5v5.7c0 .7-.1 1.3-.3 1.8 0 .1.1.1.1.1 1.4-.3 2.1-1.4 2.1-3.3V1c0-.1-.1-.1-.1-.1zm12.7 7.6 1.4.3c1.5.3 1.6.8 1.6 1.2 0 .1.1.1.1.1 1.1-.1 1.8-.7 1.8-1.5s-.6-1.2-1.9-1.5l-1.4-.3c-3.2-.6-3.8-2.3-3.8-3.6 0-.7.2-1.3.6-1.9v-.2c0-.1-.1-.1-.1-.1-1.5.7-2.3 1.9-2.3 3.4-.1 2.3 1.3 3.7 4 4.1zm5.2 3.2c-.1.1-.1.1 0 0-.9.4-1.8.6-2.8.6-1.6 0-3-.5-4.3-1.4-.3-.3-.5-.6-.5-1 0-.1 0-.1-.1-.1s-.3-.1-.4-.1c-.4 0-.8.2-1.1.6-.2.3-.4.7-.3 1.1.1.4.3.7.6 1 1.4 1 2.8 1.5 4.5 1.5 2 0 3.7-.7 4.5-1.9v-.1c0-.1 0-.2-.1-.2z" />
            <path d="M94.1 3.2c0 .1.1.1.1.1h.2c1.1 0 1.7.3 2.4.8.3.2.6.3 1 .3s.8-.2 1.1-.6c.2-.3.3-.6.3-.9 0-.1 0-.1-.1-.1-.2 0-.3-.1-.5-.2-.8-.6-1.4-.9-2.6-.9-1.2 0-2 .6-2 1.4.1 0 .1 0 .1.1z" />
          </svg>
        </Link>

        <div className={cn("flex gap-2", isOpenSearch && "hidden lg:flex")}>
          {isLoading && <Spinner />}
          {!isLoading && !isAuthenticated && (
            <>
              <SignInButton mode="modal">
                <Button className="text-black uppercase h-7 text-xs hover:bg-black/5 hidden lg:block">
                  Sign in
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button className="text-black uppercase h-7 text-xs hover:bg-black/5">
                  Sign up
                </Button>
              </SignInButton>
            </>
          )}
          {!isLoading && isAuthenticated && <UserButton afterSignOutUrl="/" />}
        </div>

        <X
          className={cn("lg:hidden", !isOpenSearch && "hidden")}
          onClick={() => setIsOpenSearch(false)}
        />
      </div>

      <div
        className={cn(
          "flex items-center flex-col lg:flex-row lg:justify-center gap-10 bg-gray-900 py-3 px-[10%]",
          isOpenMenu ? "max-lg:h-[100vh] max-lg:pt-10" : "max-lg:hidden",
        )}
      >
        <ul className="flex items-center flex-col lg:flex-row gap-10">
          {navigation.map((item, index) => (
            <li
              key={index}
              className={cn(
                "text-white text-sm font-medium tracking-widest uppercase",
                index + 1 < navigation.length && "lg:border-r lg:pr-10",
              )}
            >
              <Link href={item.url}>{item.text}</Link>
            </li>
          ))}
        </ul>

        <ul className="lg:hidden xl:flex flex items-center gap-5">
          {socialLinks.map((item, index) => (
            <li
              key={index}
              className="text-white text-sm font-medium tracking-widest uppercase"
            >
              <Link href={item.url}>{<item.icon />}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
