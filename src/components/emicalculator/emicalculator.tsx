"use client"
import EmiForm from "@/components/form/EmiForm";
import React, {Suspense, useState} from "react";
import {EmiResult} from "@/types/emiTypes";
import SidebarLayout from "../layout/sidebarLayout";
import Loader from "../common/Loader";
import EmiChart from "../../app/emi-calculator/report/EmiChart";
import EmiTable from "../../app/emi-calculator/report/EmiTable";
import LoanInfo from "../../app/emi-calculator/LoanInfo";
import {loanDefaults} from "@/utils/loanDefaults";

export default function EmiCalculatorComponent({loanType}: { loanType: keyof typeof loanDefaults }) {
    const [emiData, setEmiData] = useState<EmiResult | null>(null);

    return (
        <div className="w-full">
            <SidebarLayout>
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Best Online EMI Calculator – Calculate Your Loan Instantly
                </h1>
                <Suspense fallback={<Loader/>}>
                    <EmiForm loanType={loanType} setEmiData={setEmiData}/>
                </Suspense>
                {emiData && (
                    <div className="mt-6 space-y-6">
                        <EmiChart data={emiData}/>
                        <EmiTable schedule={emiData.schedule}/>
                    </div>
                )}
            </SidebarLayout>
            <LoanInfo/>
        </div>
    );
}
