import React from "react";
import Link from "next/link";
import { SidebarAd } from "@/components/ads/Ads";

const RightSidebar: React.FC = () => {
    return (
        <aside className="block w-full h-full md:w-auto bg-white rounded-md px-2 py-6">
            {/* Loan EMI Calculator Tools Section */}
            <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">🔧 EMI Calculator Tools</h2>
                <ul className="space-y-1">
                    <li><Link href="/?loanType=home" className="block text-gray-700 hover:text-blue-600 font-medium">🏠
                        Home Loan Calculator</Link></li>
                    <li><Link href="/?loanType=personal"
                              className="block text-gray-700 hover:text-blue-600 font-medium">👤 Personal Loan
                        Calculator</Link></li>
                    <li><Link href="/?loanType=car" className="block text-gray-700 hover:text-blue-600 font-medium">🚗
                        Car Loan Calculator</Link></li>
                </ul>
            </div>

            {/* Quick Links Section */}
            <nav className="mb-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">🌐 Quick Links</h2>
                <ul className="space-y-2 ">
                    <li><Link href="/" className="block text-gray-700 hover:text-blue-600 font-medium">🏠 Home</Link>
                    </li>
                    <li><Link href="/faq" className="block text-gray-700 hover:text-blue-600 font-medium">❓ FAQs</Link>
                    </li>
                    <li><Link href="/about" className="block text-gray-700 hover:text-blue-600 font-medium">ℹ️ About
                        Us</Link></li>
                </ul>
            </nav>

            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">📜 Important Guidelines</h2>
                <ul className="space-y-1 ps-2">
                    <li><a href="https://www.rbi.org.in/" target="_blank" rel="noopener noreferrer"
                           className="block text-gray-700 hover:text-blue-600 font-medium">RBI Official Website</a>
                    </li>
                    <li><a href="https://www.rbi.org.in/Scripts/FAQView.aspx?Id=76" target="_blank"
                           rel="noopener noreferrer" className="block text-gray-700 hover:text-blue-600 font-medium">RBI Loan Guidelines</a></li>
                    <li><a href="https://www.sebi.gov.in/" target="_blank" rel="noopener noreferrer"
                           className="block text-gray-700 hover:text-blue-600 font-medium">SEBI Official Website</a>
                    </li>
                    <li><a href="https://financialservices.gov.in/" target="_blank" rel="noopener noreferrer"
                           className="block text-gray-700 hover:text-blue-600 font-medium">Ministry of Finance -
                        Financial Services</a></li>
                </ul>
            </div>

            {/*/!* Advertisement Section *!/*/}
            {/*<div className="border-t pt-4">*/}
            {/*    <SidebarAd />*/}
            {/*</div>*/}
        </aside>
    );
};

export default RightSidebar;
