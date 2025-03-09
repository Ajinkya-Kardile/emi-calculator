import React from "react";
import Link from "next/link";
import {SidebarAd} from "@/components/ads/Ads";

const RightSidebar: React.FC = () => {
    return (
        <aside className="block w-full md:w-auto bg-white rounded-md p-4">
            {/* RightSidebar Navigation Links */}
            <nav className="mb-6">
                <h2 className="text-lg font-bold mb-3">Quick Links</h2>
                <ul className="space-y-2">
                    <li><Link href="/" className="text-blue-600 hover:underline">🏠 Home</Link></li>
                    <li><Link href="/faq" className="text-blue-600 hover:underline">💰 FAQ </Link></li>
                    <li><Link href="/about" className="text-blue-600 hover:underline">ℹ️ About Us</Link></li>
                    <li><Link href="/contact" className="text-blue-600 hover:underline">📞 Contact</Link></li>
                </ul>
            </nav>

            {/* RightSidebar Advertisement */}
            <SidebarAd/>
        </aside>
    );
};

export default RightSidebar;
