import React, { useState } from 'react';
import { Transition } from "@headlessui/react";
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { logoutUser } = useAuth();
    return (
        <div>
            <nav className="bg-white border-gray-200 py-6 border-b-2">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <h1 className='text-indigo-800 font-bold text-2xl'>Crisis Aid Hub</h1>
                            </div>
                            <div className="hidden lg:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link
                                        to="#"
                                        className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </Link >

                                    <Link
                                        to="#"
                                        className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Dashboard
                                    </Link>

                                    <Link
                                        to="#"
                                        className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        About
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='hidden lg:block'>
                            <div className='flex'>
                                <div className="relative">
                                    <div className="flex absolute inset-y-0 right-4 bottom-1 items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="email-adress-icon" className="block p-2 py-2.5 pl-6 w-full rounded-full text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-700 sm:text-sm" placeholder="Search..." />
                                </div>
                                <div>
                                    <img className='ml-2 h-10 w-10 rounded-full border-2 border-indigo-700' src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" alt="" />
                                </div>
                                {/* <button type="button" className="text-white bg-indigo-700 border-2 border-indigo-700 ml-4 rounded-full text-sm px-5 py-2.5 text-center md:mr-0">Upload</button> */}
                                <button onClick={logoutUser} type="button" className="text-indigo-700 bg-white border-2 border-indigo-700 ml-4 rounded-full text-sm px-5 py-2.5 text-center md:mr-0">Logout</button>
                            </div>
                        </div>
                        <div className="-mr-2 flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="lg:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a
                                    href="!#"
                                    className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Marketplace
                                </a>

                                <a
                                    href="!#"
                                    className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Resource
                                </a>

                                <a
                                    href="!#"
                                    className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    About
                                </a>
                                <div className="relative py-2">
                                    <div className="flex absolute inset-y-0 right-4 bottom-1 items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="email-adress-icon" className="block p-2 py-2.5 pl-6 w-full rounded-full text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-700 sm:text-sm" placeholder="Search..." />
                                </div>
                                <button type="button" className="text-white bg-indigo-700 rounded-full text-sm px-5 py-2.5 text-center md:mr-0">Upload</button>
                                <button type="button" className="text-indigo-700 bg-white border-2 border-indigo-700 ml-4 rounded-full text-sm px-5 py-2.5 text-center md:mr-0">Contact Wallet</button>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>

    );
};

export default Header;