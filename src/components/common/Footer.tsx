"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const footerData = {
    brand: {
        name: "EMI Calculator",
        logo: "/logo.png",
        homeLink: "/",
    },
    quickLinks: [
        {name: "Home", url: "/"},
        {name: "FAQs", url: "/faq"},
        {name: "About Us", url: "/about"},
        {name: "Contact Us", url: "mailto:support@emicalculator.com"},
    ],
    tools: [
        {name: "Home Loan EMI Calculator", url: "/?loanType=home"},
        {name: "Personal Loan EMI Calculator", url: "/?loanType=personal"},
        {name: "Car Loan EMI Calculator", url: "/?loanType=car"},
    ],
    legal: [
        {name: "Privacy Policy", url: "/PrivacyPolicy"},
    ],
};

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href={footerData.brand.homeLink} className="flex items-center">
                            <Image
                                src={footerData.brand.logo}
                                width={32} // Adjust size as needed
                                height={32}
                                alt={`${footerData.brand.name} Logo`}
                                priority
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                {footerData.brand.name}
                            </span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <FooterSection title="Quick Links" links={footerData.quickLinks}/>
                        <FooterSection title="Tools" links={footerData.tools}/>
                        <FooterSection title="Legal" links={footerData.legal}/>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <div className="flex justify-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        © {currentYear} <Link href={footerData.brand.homeLink}
                                              className="hover:underline">{footerData.brand.name}</Link>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

const FooterSection: React.FC<{ title: string; links: { name: string; url: string }[] }> = ({title, links}) => (
    <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{title}</h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
            {links.map((link, index) => (
                <li key={index} className="mb-4">
                    <Link href={link.url} className="hover:underline">{link.name}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default Footer;
