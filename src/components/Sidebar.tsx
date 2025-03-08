import React from "react";
import Link from "next/link";
import {SidebarAd} from "@/components/ads/Ads";

const Sidebar: React.FC = () => {
    return (
        <aside className="hidden lg:block w-72 bg-white shadow-lg rounded-lg p-4">
            {/* Sidebar Navigation Links */}
            <nav className="mb-6">
                <h2 className="text-lg font-bold mb-3">Quick Links</h2>
                <ul className="space-y-2">
                    <li><Link href="/" className="text-blue-600 hover:underline">🏠 Home</Link></li>
                    <li><Link href="/emi" className="text-blue-600 hover:underline">💰 EMI Calculator</Link></li>
                    <li><Link href="/about" className="text-blue-600 hover:underline">ℹ️ About Us</Link></li>
                    <li><Link href="/contact" className="text-blue-600 hover:underline">📞 Contact</Link></li>
                </ul>
            </nav>

            {/* Sidebar Advertisement */}
            <SidebarAd />
        </aside>
    );
};

export default Sidebar;
