"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsFillMicFill } from "react-icons/bs";
import { AiFillHome, AiOutlineUpload } from "react-icons/ai";
import { BiPodcast, BiSearch, BiLibrary } from "react-icons/bi";
import {
  SignIn,
  SignInButton,
  SignOutButton,
  SignUp,
  useClerk,
  useSignIn,
  useUser,
} from "@clerk/nextjs";

function Navbar() {
  const [profileOnClick, setProfileOnClick] = useState(false);
  const [btnOnClick, setBtnOnClick] = useState(true);
  const { isSignedIn, isLoaded, user } = useUser();
  const { openSignIn,signOut } = useClerk();
  const { isLoaded:isLoadedSignIn, signIn, setActive } = useSignIn();

  useEffect(()=>{
    console.log("entered useeffect")
    if(isSignedIn && isLoaded){
      try {
        const response = fetch('/api/auth/callback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({message:"hello", id:user.id, email:user.primaryEmailAddress.emailAddress }),
        });
  
        if (response.ok) {
          const { message } = response.json();
          console.log('Logged in user:', message);
          // Handle successful login, e.g., redirect to dashboard
        } else {

          console.error('Login failed');
          // Handle login failure, e.g., display error message
        }
      } catch (error) {
        console.error('Error during login:', error);
        // Handle login error
      }
    }
  },[isSignedIn])


  async function onSignInHandler(e){
    // Perform the sign-in process using Clerk
    e.preventDefault();
    console.log("log in")
    openSignIn({});
    
    // setTimeout(() => {
    // try {
    //   const response = fetch('/api/auth/callback', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({id:user.id, email:user.primaryEmailAddress.emailAddress }),
    //   });

    //   if (response.ok) {
    //     const { message } = response.json();
    //     console.log('Logged in user:', message);
    //     // Handle successful login, e.g., redirect to dashboard
    //   } else {

    //     console.error('Login failed');
    //     // Handle login failure, e.g., display error message
    //   }
    // } catch (error) {
    //   console.error('Error during login:', error);
    //   // Handle login error
    // }
    // }, 4000);
    }


  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={() => setBtnOnClick(!btnOnClick)}
                className={`inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/" className="flex ml-2 md:mr-24 gap-2">
                <BsFillMicFill size={30} color="black dark:white" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  MicTunes
                </span>
              </a>
            </div>
            {isSignedIn && <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                    onClick={() => setProfileOnClick(!profileOnClick)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <Image
                      width={32}
                      height={32}
                      className=" rounded-full"
                      src={`${user.profileImageUrl}`}
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className={`z-50 ${!profileOnClick && "hidden"
                    }  absolute top-0 right-0 mr-2 mt-14 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      {user.fullName}
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                     {user.primaryEmailAddress.emailAddress}
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li onClick={() => signOut()} >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>}
            {!isSignedIn && (
              <button onClick={onSignInHandler} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                <SignInButton/>
                {/* Sign In */}
              </button>

            )}
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          btnOnClick && "-translate-x-full"
        } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <AiFillHome size={20} color="#94a3b8" />
                <span className="ml-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <BiSearch size={20} color="#94a3b8" />
                <span className="flex-1 ml-3 whitespace-nowrap">Search</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <BiPodcast size={20} color="#94a3b8" />
                <span className="flex-1 ml-3 whitespace-nowrap">Podcast</span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <BiLibrary size={20} color="#94a3b8" />
                <span className="flex-1 ml-3 whitespace-nowrap">Library</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
           {isSignedIn &&(
           <>
           <li>
              <a
                href="/user/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </a>
            </li>
            <li>
              <a
                href="/upload/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <AiOutlineUpload size={20} color="#94a3b8" />
                <span className="flex-1 ml-3 whitespace-nowrap">Upload</span>
              </a>
            </li>
            </>
            )}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
