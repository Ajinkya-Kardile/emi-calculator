import EmiCalculatorComponent from "@/components/emicalculator/emicalculator";
import SidebarLayout from "@/components/layout/sidebarLayout";
import React from "react";
import {Metadata} from "next";
import CreditCardEMIInfo from "./creditCardLoanInfo";

export const metadata: Metadata = {
    title: "Credit Card EMI Calculator | Convert to EMI & Calculate Interest",
    description: "Free Credit Card EMI Calculator - Convert your credit card bill into monthly installments. Calculate interest, repayment schedule & compare EMI options instantly.",
    keywords: [
        "Credit Card EMI Calculator",
        "Convert Credit Card to EMI",
        "Credit Card Loan EMI",
        "EMI on Credit Card Payment",
        "Credit Card Interest Calculator",
        "Best Credit Card EMI Plans",
        "Credit Card Repayment Calculator",
        "No Cost EMI Calculator",
        "Credit Card Balance Transfer EMI",
        "EMI vs Revolve Credit Card",
        "emi calculator"
    ],
    openGraph: {
        title: "Credit Card EMI Calculator - Convert Purchases to Installments",
        description: "Calculate credit card EMI, interest charges & repayment options. Compare no-cost EMI vs regular EMI to save money."
    }
};


export default function CreditCardEmiCalculator() {
    return (
        <div className="w-full">
            <SidebarLayout>
                <div className="text-center max-w-5xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        Credit Card EMI Calculator
                    </h1>
                    <h2 className="text-xl sm:text-2xl font-semibold text-blue-950 dark:text-blue-400 mt-2">
                        Calculate Your Monthly Payments Instantly
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-3">
                        Use our free <strong>Credit Card EMI Calculator</strong> to estimate your <strong>monthly
                        installment, total interest, and repayment schedule</strong> effortlessly.
                        Get instant, accurate results and make informed financial decisions before taking a credit card
                        loan.
                    </p>
                </div>

                <div className="mt-4">
                    <EmiCalculatorComponent loanType="creditCard"/>
                </div>
            </SidebarLayout>
            <CreditCardEMIInfo/>
        </div>
    );
}
