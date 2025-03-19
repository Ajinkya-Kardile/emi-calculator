import type {AppProps} from "next/app";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import "@/styles/globals.css";
import Head from "next/head";
import React from "react";

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <Head>
                {/* ✅ Primary Meta Tags */}
                <title>EMI Calculator Tool - Accurate Loan EMI Calculator for Home, Car & Personal Loans</title>
                <meta name="description"
                      content="Calculate your Home Loan, Car Loan, and Personal Loan EMIs with our Free EMI Calculator Tool. Get detailed EMI breakdowns, interest calculations, and amortization schedules instantly."/>
                <meta name="keywords"
                      content="EMI Calculator, Loan Calculator, Home Loan EMI, Car Loan EMI, Personal Loan EMI, Interest Calculator, Amortization Schedule, Loan Repayment, Loan EMI Calculator India"/>
                <meta name="author" content="EMI Calculator Tool"/>
                <meta name="robots" content="index, follow"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                {/* ✅ Open Graph / Facebook Meta Tags */}
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="EMI Calculator Tool - Calculate Loan EMI Instantly"/>
                <meta property="og:description"
                      content="Use our advanced EMI Calculator to estimate your monthly installments for home, car, and personal loans. Get real-time calculations and financial insights."/>
                <meta property="og:url" content="https://emicalculatortool.in"/>
                <meta property="og:image" content="https://emicalculatortool.in/og-image.jpg"/>
                <meta property="og:site_name" content="EMI Calculator Tool"/>

                {/* ✅ Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="EMI Calculator Tool - Calculate Loan EMI Instantly"/>
                <meta name="twitter:description"
                      content="Use our advanced EMI Calculator to estimate your monthly installments for home, car, and personal loans. Get real-time calculations and financial insights."/>
                <meta name="twitter:image" content="https://emicalculatortool.in/og-image.jpg"/>
                <meta name="twitter:site" content="@emicalculatortool"/>

                {/* ✅ Canonical URL */}
                <link rel="canonical" href="https://emicalculatortool.in"/>

                {/* ✅ Favicon */}
                <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
            </Head>

            {/*<HeaderAd />*/}
            <Navbar/>
            <main className="mx-auto p-0 md:p-4">
                <Component {...pageProps} />
            </main>
            <Footer/>
            {/*<StickyBottomAd />*/}
        </>
    );
};

export default MyApp;
