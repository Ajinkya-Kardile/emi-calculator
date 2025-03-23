"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar: React.FC = () => {
    const [navbar, setNavbar] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLUListElement>(null);

    // Close navbar and dropdown when clicking a link
    const closeMenus = () => {
        setNavbar(false);
        setDropdownOpen(false);
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3">
                    <Image src="/logo.png" width={32} height={32} alt="Emi Calculator Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        EMI Calculator
                    </span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
                    onClick={() => setNavbar(!navbar)}
                >
                    <span className="sr-only">Open main menu</span>
                    {navbar ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        </svg>
                    )}
                </button>

                {/* Navigation Links */}
                <div className={`w-full md:w-auto ${navbar ? "block" : "hidden"} md:block`}>
                    <ul className="font-medium flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
                        {/* Home */}
                        <li>
                            <Link href="/" className="nav-link" onClick={closeMenus}>Home</Link>
                        </li>

                        {/* Tools Dropdown */}
                        <li className="relative group">
                            <button
                                className="nav-link flex items-center gap-1"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                onBlur={(e) => {
                                    if (!dropdownRef.current?.contains(e.relatedTarget)) {
                                        setDropdownOpen(false);
                                    }
                                }}
                            >
                                Tools <KeyboardArrowDownIcon className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Dropdown Menu */}
                            <ul
                                ref={dropdownRef}
                                className={`absolute left-0 top-full min-w-[14rem] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg transition-all duration-200 ease-in-out ${
                                    dropdownOpen ? "opacity-100 scale-100 z-50" : "opacity-0 scale-95 pointer-events-none"
                                }`}
                                aria-hidden={!dropdownOpen}
                            >
                                {[
                                    { name: "🏡 Home Loan EMI", href: "/emi-calculator/home-loan" },
                                    { name: "👤 Personal Loan EMI", href: "/emi-calculator/personal-loan" },
                                    { name: "🚗 Car Loan EMI", href: "/emi-calculator/car-loan" },
                                    { name: "💳 Credit Card Payment EMI", href: "/emi-calculator/credit-card" },
                                ].map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={closeMenus}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* FAQ */}
                        <li>
                            <Link href="/faq" className="nav-link" onClick={closeMenus}>FAQ</Link>
                        </li>

                        {/* About */}
                        <li>
                            <Link href="/about" className="nav-link" onClick={closeMenus}>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
