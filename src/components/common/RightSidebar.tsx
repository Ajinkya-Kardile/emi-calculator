import React from "react";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PublicIcon from "@mui/icons-material/Public";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import DescriptionIcon from "@mui/icons-material/Description";
import SavingsIcon from "@mui/icons-material/Savings";

const RightSidebar: React.FC = () => {
    return (
        <aside className="block w-full h-full md:w-auto bg-gray-50 dark:bg-gray-900 rounded-md p-4">
            {/* Loan EMI Calculator Tools Section */}
            <div className="mb-8">
                <h2 className="text-lg font-bold text-blue-950 dark:text-blue-400 mb-2 flex items-center gap-2">
                    <DescriptionIcon fontSize="small"/> EMI Calculator Tools
                </h2>
                <ul className="space-y-1">
                    {[
                        {name: "Home Loan Calculator", href: "/emi-calculator/home-loan", icon: HomeIcon},
                        {name: "Personal Loan Calculator", href: "/emi-calculator/personal-loan", icon: PersonIcon},
                        {name: "Car Loan Calculator", href: "/emi-calculator/car-loan", icon: DirectionsCarIcon},
                        {name: "Credit Card EMI Calculator", href: "/emi-calculator/credit-card", icon: CreditCardIcon},
                        {name: "Fixed Deposit (FD) Calculator", href: "/financial/fd-calculator", icon: SavingsIcon},
                        {
                            name: "Recurring Deposit (RD) Calculator",
                            href: "/financial/rd-calculator",
                            icon: SavingsIcon
                        },
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 ">
                            <item.icon fontSize="small" className="text-gray-600 dark:text-gray-300 flex-shrink-0 "/>
                            <Link href={item.href}
                                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Quick Links Section */}
            <nav className="mb-8">
                <h2 className="text-lg font-bold text-blue-950 dark:text-blue-400 mb-2 flex items-center gap-2">
                    <PublicIcon fontSize="small"/> Quick Links
                </h2>
                <ul className="space-y-1">
                    {[
                        {name: "Home", href: "/", icon: HomeIcon},
                        {name: "FAQs", href: "/faq", icon: HelpIcon},
                        {name: "About Us", href: "/about", icon: InfoIcon},
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <item.icon fontSize="small" className="text-gray-600 dark:text-gray-300 flex-shrink-0"/>
                            <Link href={item.href}
                                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Important Guidelines Section */}
            <div className="mb-6">
                <h2 className="text-lg font-bold text-blue-950 dark:text-blue-400 mb-2 flex items-center gap-2">
                    <DescriptionIcon fontSize="small"/> Important Guidelines
                </h2>
                <ul className="space-y-1">
                    {[
                        {name: "RBI Official Website", href: "https://www.rbi.org.in/"},
                        {name: "RBI Loan Guidelines", href: "https://www.rbi.org.in/Scripts/FAQView.aspx?Id=76"},
                        {name: "SEBI Official Website", href: "https://www.sebi.gov.in/"},
                        {name: "Ministry of Finance - Financial Services", href: "https://financialservices.gov.in/"},
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <DescriptionIcon fontSize="small"
                                             className="text-gray-600 dark:text-gray-300 flex-shrink-0"/>
                            <a href={item.href} target="_blank" rel="noopener noreferrer"
                               className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default RightSidebar;
