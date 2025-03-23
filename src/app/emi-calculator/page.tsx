import React from "react";
import SidebarLayout from "@/components/layout/sidebarLayout";
import LoanInfo from "./LoanInfo";
import EmiCalculatorComponent from "@/components/emicalculator/emicalculator";

export default function SimpleEmiCalculator() {
    return (
        <div className="w-full">
            <SidebarLayout>
                <div className="text-center max-w-5xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        Best Online Loan EMI Calculator Tool
                    </h1>
                    <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 dark:text-blue-400 mt-2">
                        Calculate Your Loan EMI Instantly
                    </h2>
                    <p className="text-lg text-gray-700  dark:text-gray-300 mt-3">
                        Use our free <strong>Personal Loan EMI Calculator</strong> to calculate your <strong>monthly
                        installment, total interest, and repayment schedule</strong> quickly and accurately.
                        Plan your loan efficiently and make informed financial decisions before borrowing.
                    </p>
                </div>

                <div className="mt-4">
                    <EmiCalculatorComponent loanType="home"/>
                </div>
            </SidebarLayout>
            <LoanInfo/>
        </div>
    );
}
