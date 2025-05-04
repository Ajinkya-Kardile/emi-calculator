import EmiCalculatorComponent from "@/components/emicalculator/emicalculator";
import SidebarLayout from "@/components/layout/sidebarLayout";
import React from "react";
import {Metadata} from "next";
import CarLoanInfo from "./carLoanInfo";

export const metadata: Metadata = {
    title: "Car Loan EMI Calculator | Instant Auto Loan Payment Estimates",
    description: "Free Car Loan EMI Calculator - Calculate monthly installments, interest rates & repayment schedule. Compare loan offers & find affordable car financing options.",
    keywords: [
        "Car Loan EMI Calculator",
        "Auto Loan Calculator",
        "Car Finance EMI",
        "Vehicle Loan Calculator",
        "Monthly Car Payment",
        "Car Loan Interest Rates",
        "Best Car Loan EMI",
        "Loan Against Car",
        "Used Car Loan EMI",
        "Affordable Car Financing"
    ],
    openGraph: {
        title: "Car Loan EMI Calculator - Find Your Best Auto Loan Option",
        description: "Calculate exact EMI for new or used cars. Compare bank rates and choose the most affordable car loan repayment plan."
    }
};
export default function CarLoan() {
    return (
        <div className="w-full">
            <SidebarLayout>
                <div className="text-center max-w-5xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        Car Loan EMI Calculator
                    </h1>
                    <h2 className="text-xl sm:text-2xl font-semibold text-blue-950 dark:text-blue-400 mt-2">
                        Estimate Your Monthly Payments Instantly
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-3">
                        Easily calculate your monthly car loan payments, total interest, and loan tenure.
                        Plan your auto loan with accurate EMI calculations in seconds.
                    </p>
                </div>

                <div className="mt-4">
                    <EmiCalculatorComponent loanType="car"/>
                </div>
            </SidebarLayout>
            <CarLoanInfo/>
        </div>
    );
}
