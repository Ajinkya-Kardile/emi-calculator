"use client"
import EmiForm from "@/components/emicalculator/form/EmiForm";
import React, {Suspense, useState} from "react";
import {EmiResult} from "@/types/emiTypes";
import Loader from "../common/Loader";
import EmiChart from "@/components/emicalculator/report/EmiChart";
import EmiTable from "@/components/emicalculator/report/EmiTable";
import {loanDefaults} from "@/utils/loanDefaults";

export default function EmiCalculatorComponent({loanType}: { loanType: keyof typeof loanDefaults }) {
    const [emiData, setEmiData] = useState<EmiResult | null>(null);

    return (
        <div className="w-full">
            <Suspense fallback={<Loader/>}>
                <EmiForm loanType={loanType} setEmiData={setEmiData}/>
            </Suspense>
            {emiData && (
                <div className="mt-6 space-y-6">
                    <EmiChart data={emiData}/>
                    <EmiTable schedule={emiData.schedule}/>
                </div>
            )}
        </div>
    );
}
