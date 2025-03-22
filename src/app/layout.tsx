import "@/styles/globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import {Metadata, Viewport} from "next";
import React from "react";
import {GoogleTagManager} from "@next/third-parties/google";


export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    title: "EMI Calculator Tool - Accurate Loan EMI Calculator for Home, Car & Personal Loans",
    description: "Calculate your Home Loan, Car Loan, and Personal Loan EMIs with our Free EMI Calculator Tool. Get detailed EMI breakdowns, interest calculations, and amortization schedules instantly.",
    keywords: "EMI Calculator, Loan Calculator, Home Loan EMI, Car Loan EMI, Personal Loan EMI, Interest Calculator, Amortization Schedule, Loan Repayment, Loan EMI Calculator India",
    authors: [{name: "EMI Calculator Tool"}],
    robots: "index, follow",
    openGraph: {
        type: "website",
        title: "EMI Calculator Tool - Calculate Loan EMI Instantly",
        description: "Use our advanced EMI Calculator to estimate your monthly installments for home, car, and personal loans. Get real-time calculations and financial insights.",
        url: "https://emicalculatortool.in",
        images: ["https://emicalculatortool.in/og-image.jpg"],
        siteName: "EMI Calculator Tool",
    },
    twitter: {
        card: "summary_large_image",
        title: "EMI Calculator Tool - Calculate Loan EMI Instantly",
        description: "Use our advanced EMI Calculator to estimate your monthly installments for home, car, and personal loans. Get real-time calculations and financial insights.",
        images: ["https://emicalculatortool.in/og-image.jpg"],
        site: "@emicalculatortool",
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <GoogleTagManager gtmId="GTM-KCH58NMT"/>
        <body>
        <Navbar/>
        <main className="mx-auto p-0 md:p-4">{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
