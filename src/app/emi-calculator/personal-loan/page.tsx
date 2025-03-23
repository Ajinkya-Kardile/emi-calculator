import EmiCalculatorComponent from "@/components/emicalculator/emicalculator";
import SidebarLayout from "@/components/layout/sidebarLayout";
import LoanInfo from "../LoanInfo";
import React from "react";

export default function PersonalLoan() {
    return (
        <div className="container mx-auto">
            <SidebarLayout>
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Best personal Loan EMI Calculator
                </h1>
                <EmiCalculatorComponent loanType="personal"/>
            </SidebarLayout>
            <LoanInfo/>
        </div>
    );
}
