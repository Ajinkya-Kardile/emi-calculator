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
        {name: "about Us", url: "/about"},
        {name: "Contact Us", url: "mailto:emicalculatortool@gmail.com"},
    ],
    tools: [
        {name: "Home Loan EMI Calculator", url: "/emi-calculator/home-loan"},
        {name: "Personal Loan EMI Calculator", url: "/emi-calculator/personal-loan"},
        {name: "Car Loan EMI Calculator", url: "/emi-calculator/car-loan"},
        {name: "Credit Card EMI Calculator", url: "/emi-calculator/credit-card"},
    ],
    legal: [
        {name: "Privacy Policy", url: "/privacy-policy"},
    ],
};

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-blue-950 dark:bg-gray-900">
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
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
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
                <hr className="my-6 border-white sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <div className="flex justify-center">
                    <span className="text-sm text-white dark:text-gray-400">
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
        <h2 className="mb-6 text-sm font-semibold text-yellow-400 uppercase dark:text-white">{title}</h2>
        <ul className="text-white dark:text-gray-400 font-medium">

            {links.map((link, index) => (
                <li key={index} className="mb-4">
                    <Link href={link.url} className="hover:underline">{link.name}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default Footer;
