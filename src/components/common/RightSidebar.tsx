import React from "react";
import Link from "next/link";
import { Home, User, Car, CreditCard, Globe, HelpCircle, Info, FileText } from "lucide-react";

const RightSidebar: React.FC = () => {
    return (
        <aside className="block w-full h-full md:w-auto bg-white dark:bg-gray-900 rounded-md p-4">
            {/* Loan EMI Calculator Tools Section */}
            <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 flex items-center gap-2">
                    <FileText size={20} /> EMI Calculator Tools
                </h2>
                <ul className="space-y-1">
                    {[
                        { name: "Home Loan Calculator", href: "/emi-calculator/home-loan", icon: Home },
                        { name: "Personal Loan Calculator", href: "/emi-calculator/personal-loan", icon: User },
                        { name: "Car Loan Calculator", href: "/emi-calculator/car-loan", icon: Car },
                        { name: "Credit Card EMI Calculator", href: "/emi-calculator/credit-card", icon: CreditCard },
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <item.icon size={18} className="text-gray-600 dark:text-gray-300 flex-shrink-0" />
                            <Link href={item.href} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Quick Links Section */}
            <nav className="mb-8">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 flex items-center gap-2">
                    <Globe size={20} /> Quick Links
                </h2>
                <ul className="space-y-1">
                    {[
                        { name: "Home", href: "/", icon: Home },
                        { name: "FAQs", href: "/faq", icon: HelpCircle },
                        { name: "About Us", href: "/about", icon: Info },
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <item.icon size={18} className="text-gray-600 dark:text-gray-300 flex-shrink-0" />
                            <Link href={item.href} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Important Guidelines Section */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 flex items-center gap-2">
                    <FileText size={20} /> Important Guidelines
                </h2>
                <ul className="space-y-1">
                    {[
                        { name: "RBI Official Website", href: "https://www.rbi.org.in/" },
                        { name: "RBI Loan Guidelines", href: "https://www.rbi.org.in/Scripts/FAQView.aspx?Id=76" },
                        { name: "SEBI Official Website", href: "https://www.sebi.gov.in/" },
                        { name: "Ministry of Finance - Financial Services", href: "https://financialservices.gov.in/" },
                    ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <FileText size={18} className="text-gray-600 dark:text-gray-300 flex-shrink-0" />
                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200">
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
