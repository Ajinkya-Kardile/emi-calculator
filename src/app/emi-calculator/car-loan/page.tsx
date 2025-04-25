import EmiCalculatorComponent from "@/components/emicalculator/emicalculator";
import SidebarLayout from "@/components/layout/sidebarLayout";
import React from "react";
import {Metadata} from "next";
import CarLoanInfo from "./carLoanInfo";

export const metadata: Metadata = {
    title: "Car Loan EMI Calculator - Calculate Your EMI Instantly",
    description: "Use our Car Loan EMI Calculator to estimate your monthly payments. Compare loan interest rates and repayment schedules to make informed financial decisions.",
    keywords: "Car Loan EMI Calculator, Car Loan Calculator, Auto Loan EMI, Vehicle Loan EMI, Auto Loan Calculator, Car Finance Calculator, Monthly Car Loan Payment, Car Loan Interest Calculator, Best Car Loan EMI Tool, Vehicle Finance EMI Calculation, Car Loan Repayment Schedule",
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
