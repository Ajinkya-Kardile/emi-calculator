import React from "react";
import RightSidebar from "@/components/common/RightSidebar";

export default function SidebarLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col md:flex-row w-full min-h-screen gap-2">
            {/* Left Sidebar (Visible only on Large Screens) */}
            {/*<div className="hidden lg:block w-64">*/}
            {/*    <LeftSidebar/>*/}
            {/*</div>*/}

            {/* Main Content */}
            <main className="flex-1 max-w-[1200px] bg-white p-2 md:p-6 rounded-lg mx-auto">
                {children}
            </main>

            {/* Right Sidebar (Always Visible, moves below content on mobile) */}
            <div className="w-full md:w-64 order-last md:order-none mt-4 md:mt-0">
                <RightSidebar/>
            </div>
        </div>
    );
}
