import EmiCalculatorComponent from "@/components/emicalculator/emicalculator";
import SidebarLayout from "@/components/layout/sidebarLayout";
import LoanInfo from "../LoanInfo";
import React from "react";

export default function CreditCardEmi() {
    return (
        <div className="container mx-auto">
            <SidebarLayout>
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Best Credit Card Payment/Loan EMI Calculator
                </h1>
                <EmiCalculatorComponent loanType="creditCard"/>
            </SidebarLayout>
            <LoanInfo/>
        </div>
    );
}
