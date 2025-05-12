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
    title: "EMI Calculator - Calculate Home, Car & Personal Loan EMIs",
    description: "Free EMI Calculator for Home, Car & Personal Loans. Get instant EMI breakdowns with interest rates and amortization schedules. Calculate loan payments easily.",
    keywords: [
        "emi calculator", "EMI Calculator Tool", "Loan Calculator", "Loan Calculator Tool",
        "Home Loan EMI", "Home Loan EMI Calculator", "Personal Loan EMI", "Car Loan EMI",
        "Interest Rate Calculator", "Loan Repayment", "Loan EMI Calculator", "Education Loan EMI",
        "Business Loan EMI", "Bike Loan EMI", "Home Loan Interest Calculator", "Mortgage EMI Calculator",
        "EMI Payment Calculator", "Loan Interest Rate Calculator", "Housing Loan EMI",
        "SBI EMI Calculator", "HDFC Loan EMI Calculator", "ICICI EMI Calculator", "Axis Bank EMI Calculator",
        "Bank Loan EMI Calculator", "Online EMI Calculator", "Loan Amortization Calculator",
        "EMI Calculation Formula", "Fixed vs Floating Interest Rate", "Best Loan EMI Calculator",
        "EMI Calculator with Prepayment", "Loan Repayment Schedule", "Monthly EMI Calculator",
        "Financial Planning Tool", "Loan Affordability Calculator", "Interest Rate Comparison",
        "Personal Finance Calculator", "Best Loan Calculator in India"
    ],
    authors: [{name: "EMI Calculator Tool"}],
    robots: "index, follow",
    openGraph: {
        type: "website",
        title: "Calculate Loan EMIs Online - Free EMI Calculator Tool",
        description: "Use our free EMI Calculator to calculate loan EMI online for home, car, personal, and business loans. Get instant monthly installment breakdowns with interest rates, loan tenure, and repayment schedules.",
        url: "https://emicalculatortool.in",
        siteName: "EMI Calculator Tool",
        images: [
            {
                url: "https://emicalculatortool.in/og-image.png",
                width: 1200,
                height: 630,
                alt: "Best EMI Calculator Online - Calculate Loan EMI Instantly"
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "EMI Calculator Tool - Calculate Loan EMI Instantly",
        description: "Use our advanced EMI Calculator to estimate your monthly installments for home, car, and personal loans. Get real-time calculations and financial insights.",
        images: ["https://emicalculatortool.in/og-image.png"],
        site: "@emicalculatortool",
    },
    icons: {
        icon: [
            {url: "/favicon.ico", type: "image/x-icon"},
            {url: "/favicon.svg", type: "image/svg+xml"},
            {url: "/favicon-16x16.png", sizes: "16x16", type: "image/png"},
            {url: "/favicon-32x32.png", sizes: "32x32", type: "image/png"},
            {url: "/favicon-96x96.png", sizes: "96x96", type: "image/png"},
            {url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png"},
            {url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png"},
            {url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png"},
            {url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png"},
        ],
        apple: [
            {url: "/apple-touch-icon.png", sizes: "180x180"}
        ]
    },
    manifest: "/site.webmanifest",

};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <GoogleTagManager gtmId="GTM-KCH58NMT"/>
        <body className="bg-gray-200 dark:bg-gray-700">
        <Navbar/>
        <main className="mx-auto py-1 md:p-2">{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
