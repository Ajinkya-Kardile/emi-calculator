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
    title: {
        default: "EMI Calculator Tool - Accurate Loan EMI Calculator for Home, Car & Personal Loans",
        template: "%s - EMI Calculator Tool",
    },
    description: "Calculate your Home Loan, Car Loan, and Personal Loan EMIs with our Free EMI Calculator Tool. Get detailed EMI breakdowns, interest calculations, and amortization schedules instantly.",
    keywords: [
        "EMI Calculator", "EMI Calculator Tool", "Loan Calculator", "Loan Calculator Tool",
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
        title: "EMI Calculator Online - Easy Loan EMI Calculator for Home, Car & Personal Loans",
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
