import React from "react";
import SidebarLayout from "@/components/layout/sidebarLayout";
import FdCalculator from "./FdCalculator";
import FDInformation from "./FDInformation";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Fixed Deposit (FD) Calculator | Calculate Maturity Amount & Interest",
    description: "Use our free FD calculator to estimate your fixed deposit maturity amount with different interest payout frequencies. Compare quarterly, monthly and cumulative FD options.",
    keywords: [
        "FD calculator",
        "fixed deposit calculator",
        "FD interest calculator",
        "FD maturity calculator",
        "bank FD calculator",
        "FD returns calculator",
        "FD investment calculator",
        "emi calculator"
    ],
    openGraph: {
        title: "Fixed Deposit (FD) Calculator | Calculate Maturity Amount & Interest",
        description: "Free online FD calculator to estimate your fixed deposit returns with different interest payout options.",
        url: "https://emicalculatortool.in/financial/fd-calculator",
        type: "website",
        images: [
            {
                url: "https://emicalculatortool.in/images/og-image-fd-calculator.png",
                width: 1200,
                height: 630,
                alt: "FD Calculator Preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Fixed Deposit (FD) Calculator | Calculate Maturity Amount & Interest",
        description: "Free online FD calculator to estimate your fixed deposit returns with different interest payout options.",
        images: ["https://emicalculatortool.in/images/og-image-fd-calculator.png"],
    },
};
export default function FdCalculatorPage() {
    return (
        <div className="w-full">
            <SidebarLayout>
                <div className="text-center mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        Fixed Deposit Calculator
                    </h1>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-950 dark:text-blue-400 mt-2">
                        Calculate Maturity Amount & Interest Earnings
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mt-3 max-w-3xl mx-auto">
                        Use our <strong>FD Calculator</strong> to estimate your <strong>maturity amount</strong> with
                        different
                        interest payout frequencies. Compare quarterly, monthly and cumulative FD options.
                    </p>
                </div>
                <FdCalculator/>
            </SidebarLayout>
            <FDInformation/>
        </div>
    );
}