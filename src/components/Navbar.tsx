"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src="https://flowbite.com/docs/images/logo.svg" width={32} height={32} alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">EMI Calculator</span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={() => setNavbar(!navbar)}
                >
                    <span className="sr-only">Open main menu</span>
                    {navbar ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        </svg>
                    )}
                </button>

                {/* Navigation Links */}
                <div className={`w-full md:w-auto ${navbar ? "block" : "hidden"} md:block`}>
                    <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {["Home", "About", "Services", "Pricing", "Contact"].map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={`/${item.toLowerCase()}`}
                                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    onClick={() => setNavbar(false)} // Close menu on mobile when clicking a link
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
