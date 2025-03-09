"use client";
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <img src="/logo.png" className="h-8 me-3" alt="EMI Calculator Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                EMI Calculator
                            </span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Quick Links
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/" className="hover:underline">Home</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/faq" className="hover:underline">FAQs</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/about" className="hover:underline">About Us</Link>
                                </li>
                                <li>
                                    <Link href="mailto:support@emicalculator.com" className="hover:underline">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Tools
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/?loanType=home" className="hover:underline">Home Loan EMI Calculator</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/?loanType=personal" className="hover:underline">Personal Loan EMI calculator</Link>
                                </li>
                                <li>
                                    <Link href="/?loanType=car" className="hover:underline">Car Loan EMI calculator</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Legal
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li>
                                    <Link href="/PrivacyPolicy" className="hover:underline">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="flex justify-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        © {currentYear} <Link href="/" className="hover:underline">EMI Calculator</Link>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
