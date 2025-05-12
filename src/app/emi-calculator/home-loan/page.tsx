import EmiCalculatorComponent from "@/components/emicalculator/emicalculator";
import SidebarLayout from "@/components/layout/sidebarLayout";
import React from "react";
import {Metadata} from "next";
import HomeLoanInfo from "./homeLoanInfo";

export const metadata: Metadata = {
    title: "Home Loan EMI Calculator | Accurate Monthly Payment Estimates",
    description: "Calculate your home loan EMI, interest, and repayment schedule instantly. Free online tool for homebuyers to plan mortgage payments accurately.",
    keywords: [
        "Home Loan EMI Calculator",
        "Mortgage Calculator",
        "Housing Loan EMI",
        "Home Loan Interest Rates",
        "EMI Calculator for Home Loan",
        "Property Loan Calculator",
        "Home Loan Repayment",
        "Loan Amortization Schedule",
        "Monthly Mortgage Calculator",
        "Home Finance Planning",
        "emi calculator"
    ],
    openGraph: {
        title: "Home Loan EMI Calculator - Plan Your Mortgage Payments",
        description: "Free online tool to calculate home loan EMI, interest, and complete repayment schedule for your dream home purchase."
    }
};

export default function HomeLoan() {
    return (
        <div className="w-full">
            <SidebarLayout>
                <div className="text-center max-w-5xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        Home Loan EMI Calculator
                    </h1>
                    <h2 className="text-xl sm:text-2xl font-semibold text-blue-950 dark:text-blue-400 mt-2">
                        Get Accurate Monthly Payments Instantly
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-3">
                        Use our free <strong>Home Loan EMI Calculator</strong> to estimate your <strong>monthly
                        installment, total interest, and repayment schedule</strong> effortlessly.
                        Plan your home purchase wisely with accurate EMI calculations in seconds.
                    </p>
                </div>

                <div className="mt-4">
                    <EmiCalculatorComponent loanType="home"/>
                </div>
            </SidebarLayout>
            <HomeLoanInfo/>
        </div>
    );
}
