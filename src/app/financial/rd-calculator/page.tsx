import React from "react";
import SidebarLayout from "@/components/layout/sidebarLayout";
import RdCalculator from "./RdCalculator";
import RDInformation from "./RDInformation";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Recurring Deposit (RD) Calculator | Calculate Maturity Amount & Interest",
    description: "Use our free RD calculator to estimate your recurring deposit maturity amount with different compounding frequencies. Compare monthly and quarterly compounding options.",
    keywords: [
        "RD calculator",
        "recurring deposit calculator",
        "RD interest calculator",
        "RD maturity calculator",
        "bank RD calculator",
        "RD returns calculator",
        "RD investment calculator",
        "monthly deposit calculator"
    ],
    openGraph: {
        title: "Recurring Deposit (RD) Calculator | Calculate Maturity Amount & Interest",
        description: "Free online RD calculator to estimate your recurring deposit returns with different compounding options.",
        url: "https://emicalculatortool.in/financial/rd-calculator",
        type: "website",
        images: [
            {
                url: "https://emicalculatortool.in/images/og/og-image-rd-calculator.png",
                width: 1200,
                height: 630,
                alt: "RD Calculator Preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Recurring Deposit (RD) Calculator | Calculate Maturity Amount & Interest",
        description: "Free online RD calculator to estimate your recurring deposit returns with different compounding options.",
        images: ["https://emicalculatortool.in/images/og/og-image-rd-calculator.png"],
    },
};

export default function RdCalculatorPage() {
    return (
        <div className="w-full">
            <SidebarLayout>
                <div className="text-center mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        Recurring Deposit Calculator
                    </h1>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-700 dark:text-blue-400 mt-2">
                        Calculate your recurring deposit maturity amount
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mt-3 max-w-3xl mx-auto">
                        Use our RD Calculator to estimate your maturity amount with
                        different compounding frequencies. Compare monthly and quarterly compounding options.
                    </p>
                </div>
                <RdCalculator/>
            </SidebarLayout>
            <RDInformation/>
        </div>
    );
}