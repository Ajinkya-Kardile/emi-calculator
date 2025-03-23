import EmiCalculatorComponent from "@/components/emicalculator/emicalculator";
import SidebarLayout from "@/components/layout/sidebarLayout";
import React from "react";
import {Metadata} from "next";
import PersonalLoanInfo from "./personalLoanInfo";

export const metadata: Metadata = {
    title: "Personal Loan EMI Calculator – Calculate Monthly Payments & Interest",
    description: "Use our free Personal Loan EMI Calculator to estimate your monthly installment, total interest, and repayment schedule. Get instant results and make informed financial decisions before taking a personal loan.",
    keywords: "Personal Loan EMI Calculator, Personal Loan Calculator, Loan EMI Calculator, Monthly EMI for Personal Loan, Interest Rate on Personal Loan, Unsecured Loan EMI, Calculate Personal Loan EMI, Online EMI Calculator for Personal Loan, Best Personal Loan Calculator, Personal Loan Repayment Plan, Loan Amortization Schedule, Personal Loan Interest Rate Calculator, Instant Loan EMI Calculator, Short-Term Loan EMI, Easy Loan EMI Calculation, Personal Loan Payment Plan",
};

export default function PersonalLoan() {
    return (
        <div className="w-full">
            <SidebarLayout>
                <div className="text-center max-w-5xl mx-auto ">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        Personal Loan EMI Calculator
                    </h1>
                    <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 dark:text-blue-400 mt-2">
                        Get Instant EMI Estimates & Plan Your Loan
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-3">
                        Use our free <strong>Personal Loan EMI Calculator</strong> to calculate your <strong>monthly
                        installment, total interest, and repayment schedule</strong> quickly and accurately.
                        Plan your loan efficiently and make informed financial decisions before borrowing.
                    </p>
                </div>

                <div className="mt-4">
                    <EmiCalculatorComponent loanType="personal"/>
                </div>
            </SidebarLayout>
            <PersonalLoanInfo/>
        </div>
    );
}
