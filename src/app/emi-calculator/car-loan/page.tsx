import EmiCalculatorComponent from "@/components/emicalculator/emicalculator";
import SidebarLayout from "@/components/layout/sidebarLayout";
import LoanInfo from "../LoanInfo";
import React from "react";

export default function CarLoan() {
    return (
        <div className="container mx-auto">
            <SidebarLayout>
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Best Online Car Loan EMI Calculator – Calculate Your Loan Instantly
                </h1>
                <EmiCalculatorComponent loanType="car"/>
            </SidebarLayout>
            <LoanInfo/>
        </div>
    );
}
