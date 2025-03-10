import type { AppProps } from "next/app";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import "../styles/globals.css";
import React from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            {/*<HeaderAd />*/}
            <Navbar />
            <main className="container mx-auto p-0 md:p-4">
                <Component {...pageProps} />
            </main>
            <Footer />
            {/*<StickyBottomAd />*/}
        </>
    );
};

export default MyApp;
