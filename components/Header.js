import React, { Fragment } from "react";
import Image from "next/image";
import {
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
  UserCircleIcon,
  BookmarkIcon,
  CogIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import imageIG from "../assets/1200px-Instagram_logo.svg.png";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

function Header() {
  const { data: session } = useSession();

  // to control the modal
  const [open, setOpen] = useRecoilState(modalState);

  const router = useRouter();
  console.log(session);

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto ">
        {/* Left */}

        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid  w-24 cursor-pointer "
        >
          <Image
            src="https://links.papareact.com/ocw" //https://links.papareact.com/ocw
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div
          onClick={() => router.push("/")}
          className="relative w-10  lg:hidden flex-shrink-0 cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle - Search input Field */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
            />
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />{" "}
          {/* using custom css */}
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon
                className="navBtn"
                onClick={() => setOpen(true)}
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button>
                    <img
                      src={session.user.image}
                      alt="profile pic"
                      className="h-10 w-10 rounded-full cursor-pointer"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() =>
                              router.push(`/profile/${session?.user.uid}`)
                            }
                            className={`${
                              active
                                ? "bg-gray-100 text-black"
                                : "text-gray-900"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm font-bold`}
                          >
                            <UserCircleIcon className="w-7 h-7 mr-2" />
                            Profile
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-gray-100 text-black"
                                : "text-gray-900"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm font-bold`}
                          >
                            <BookmarkIcon className="w-7 h-7 mr-2" />
                            Saved
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-gray-100 text-black"
                                : "text-gray-900"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm font-bold`}
                          >
                            <CogIcon className="w-7 h-7 mr-2" />
                            Settings
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => signOut({ callbackUrl: "/" })}
                            className={`${
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-900"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm font-bold`}
                          >
                            <LogoutIcon className="w-7 h-7 mr-2" />
                            Log Out
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
