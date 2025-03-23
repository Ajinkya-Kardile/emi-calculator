import EmiCalculatorComponent from "@/components/emicalculator/emicalculator";
import SidebarLayout from "@/components/layout/sidebarLayout";
import React from "react";
import {Metadata} from "next";
import HomeLoanInfo from "./homeLoanInfo";

export const metadata: Metadata = {
    title: "Home Loan EMI Calculator – Calculate Your Monthly Payments & Interest",
    description: "Use our free Home Loan EMI Calculator to estimate your monthly installment, total interest, and repayment schedule. Get instant results and make informed financial decisions before taking a home loan.",
    keywords: "Home Loan EMI Calculator, Home Loan Calculator, Housing Loan EMI, Mortgage EMI Calculator, Home Loan Interest Rate, Home Loan Repayment, Calculate EMI for Home Loan, Property Loan Calculator, Home Loan Interest, Home Loan Installments, Mortgage Loan EMI, Online EMI Calculator for Home Loan, Housing Loan Repayment Plan, Loan Amortization Schedule, Home Loan Payment Plan, Monthly Mortgage Calculator, Home Finance EMI, Housing Finance EMI Calculator",
};

export default function HomeLoan() {
    return (
        <div className="w-full">
            <SidebarLayout>
                <div className="text-center max-w-5xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        Home Loan EMI Calculator
                    </h1>
                    <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 dark:text-blue-400 mt-2">
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
