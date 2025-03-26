import EmiCalculatorComponent from "@/components/emicalculator/emicalculator";
import SidebarLayout from "@/components/layout/sidebarLayout";
import React from "react";
import {Metadata} from "next";
import CreditCardEMIInfo from "./creditCardLoanInfo";

export const metadata: Metadata = {
    title: "Credit Card EMI Calculator",
    description: "Use our free Credit Card EMI Calculator to estimate your monthly installment, total interest, and repayment schedule. Get instant results and make informed financial decisions about your credit card loan.",
    keywords: "Credit Card EMI Calculator, Credit Card Loan Calculator, EMI on Credit Card, Credit Card Interest Calculator, Credit Card Repayment Calculator, Monthly Installments, Credit Card Loan EMI, Credit Card Installment Plan, Calculate EMI for Credit Card, Credit Card Loan Interest Rate, Credit Card Balance EMI, Convert Credit Card Bill to EMI, Credit Card EMI Charges, Best Credit Card EMI Plans, Online EMI Calculator for Credit Card, Credit Card EMI Conversion, Credit Card Interest Rate Calculator, Calculate Credit Card Dues in EMI",
};


export default function CreditCardEmiCalculator() {
    return (
        <div className="w-full">
            <SidebarLayout>
                <div className="text-center max-w-5xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        Credit Card EMI Calculator
                    </h1>
                    <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 dark:text-blue-400 mt-2">
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
