import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";
import { HeaderAd, StickyBottomAd } from "@/components/ads/Ads";
import React from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <HeaderAd />
            <Navbar />
            <main className="container mx-auto p-4">
                <Component {...pageProps} />
            </main>
            <Footer />
            <StickyBottomAd />
        </>
    );
};

export default MyApp;
