import React from "react";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";

export default function SidebarLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex w-full min-h-screen gap-2">
            {/* Left Sidebar (Visible only on Large Screens) */}
            {/*<div className="hidden lg:block w-64">*/}
            {/*    <LeftSidebar/>*/}
            {/*</div>*/}

            {/* Main Content */}
            <main className="flex-1 max-w-[1200px] bg-white p-2 md:p-6 shadow-lg rounded-lg mx-auto">
                {children}
            </main>

            {/* Right Sidebar (Visible on Tablets & Large Screens) */}
            <div className="hidden md:block w-64">
                <RightSidebar/>
            </div>
        </div>
    )
        ;
}
