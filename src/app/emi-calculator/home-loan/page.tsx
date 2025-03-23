import EmiCalculatorComponent from "@/components/emicalculator/emicalculator";
import SidebarLayout from "@/components/layout/sidebarLayout";
import LoanInfo from "../LoanInfo";
import React from "react";

export default function HomeLoan() {
    return (
        <div className="w-full">
            <SidebarLayout>
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Best Online EMI Calculator – Calculate Your Loan Instantly
                </h1>
                <EmiCalculatorComponent loanType="home"/>
            </SidebarLayout>
            <LoanInfo/>
        </div>
    );
}
