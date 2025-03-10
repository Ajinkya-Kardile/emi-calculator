import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import {HeaderAd, StickyBottomAd} from "@/components/ads/Ads";



export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="bg-gray-100">
        <HeaderAd/>
        <Navbar/>

        {/* Main Content */}
        <main className="container mx-auto p-4 min-h-screen pt-20">
            {children}
        </main>

        <Footer/>
        <StickyBottomAd/>
        </body>
        </html>
    );
}
