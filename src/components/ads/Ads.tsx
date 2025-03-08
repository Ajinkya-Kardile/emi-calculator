import React from "react";

export const HeaderAd: React.FC = () => (
    <div className="w-full flex justify-center bg-gray-300 py-2 text-center text-sm md:text-base lg:text-lg">
        <span>Header Ad (728x90 or 320x50)</span>
    </div>
);

export const InlineAd: React.FC = () => (
    <div className="w-full flex justify-center bg-gray-300 py-2 my-4 text-center text-sm md:text-base">
        <span>Inline Ad (Responsive 300x250)</span>
    </div>
);

export const SidebarAd: React.FC = () => (
    <div
        className="w-full bg-gray-300 h-64 flex items-center justify-center text-center text-sm md:text-base rounded-lg">
        <span>Sidebar Ad (300x250 or 300x600)</span>
    </div>
);

export const StickyBottomAd: React.FC = () => (
    <div className="fixed bottom-0 left-0 w-full bg-gray-300 py-2 text-center text-sm md:text-base lg:text-lg">
        <span>Sticky Bottom Ad (728x90 or 320x50)</span>
    </div>
);
