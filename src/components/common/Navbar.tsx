"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const Navbar: React.FC = () => {
    const [navbar, setNavbar] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLUListElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close all menus
    const closeMenus = () => {
        setNavbar(false);
        setDropdownOpen(false);
    };

    return (
        <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3">
                    <Image src="/logo.png" width={32} height={32} alt="EMI Calculator Logo" />
                    <span className="text-2xl font-semibold text-gray-900 dark:text-white">
                        EMI Calculator
                    </span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setNavbar(!navbar)}
                >
                    {navbar ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M3 12h18M3 6h18M3 18h18"/>
                        </svg>
                    )}
                </button>

                {/* Navigation Links */}
                <div className={`w-full md:flex md:items-center md:w-auto ${navbar ? "block" : "hidden"}`}>
                    <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 rounded-lg bg-gray-50 dark:bg-gray-800 md:dark:bg-transparent">
                        {/* Home */}
                        <li>
                            <Link href="/" className="nav-link text-gray-900 dark:text-white" onClick={closeMenus}>Home</Link>
                        </li>

                        {/* Tools Dropdown */}
                        <li className="relative">
                            <button
                                className="nav-link flex items-center gap-1 text-gray-900 dark:text-white"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                Tools <KeyboardArrowDownIcon className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Dropdown Menu */}
                            <ul
                                ref={dropdownRef}
                                className={`absolute left-0 top-full min-w-[14rem] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg transition-all duration-200 ease-in-out ${
                                    dropdownOpen ? "opacity-100 scale-100 z-50" : "opacity-0 scale-95 pointer-events-none"
                                }`}
                            >
                                {[
                                    { name: "Home Loan EMI", href: "/emi-calculator/home-loan", icon: <HomeIcon fontSize="small" /> },
                                    { name: "Personal Loan EMI", href: "/emi-calculator/personal-loan", icon: <PersonIcon fontSize="small" /> },
                                    { name: "Car Loan EMI", href: "/emi-calculator/car-loan", icon: <DirectionsCarIcon fontSize="small" /> },
                                    { name: "Credit Card Payment EMI", href: "/emi-calculator/credit-card", icon: <CreditCardIcon fontSize="small" /> },
                                ].map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href}
                                              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                                              onClick={closeMenus}>
                                            {item.icon} {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* FAQ */}
                        <li>
                            <Link href="/faq" className="nav-link text-gray-900 dark:text-white" onClick={closeMenus}>FAQ</Link>
                        </li>

                        {/* About */}
                        <li>
                            <Link href="/about" className="nav-link text-gray-900 dark:text-white" onClick={closeMenus}>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
