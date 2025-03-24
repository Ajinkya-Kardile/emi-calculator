import React from "react";
import RightSidebar from "@/components/common/RightSidebar";

export default function SidebarLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col md:flex-row w-full min-h-screen gap-2">
            {/* Main Content */}
            <main
                className="flex-1 bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-2 md:p-6 rounded-lg">
                {children}
            </main>

            {/* Right Sidebar (Hidden on Small Screens) */}
            <div className="w-full md:w-64 mt-2 md:mt-0">
                <RightSidebar/>
            </div>
        </div>
    );
}
