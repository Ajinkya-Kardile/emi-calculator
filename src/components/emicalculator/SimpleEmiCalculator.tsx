"use client";
import React from "react";
import {useState} from "react";
import EmiForm from "./form/EmiForm";
import EmiTable from "./report/EmiTable";
import EmiChart from "./report/EmiChart";
import {EmiResult} from "@/types/emiTypes";

export default function SimpleEmiCalculator() {
    const [emiData, setEmiData] = useState < EmiResult | null > (null);

    return (
        <>
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
                Best Online EMI Calculator – Calculate Your Loan Instantly
            </h1>
            <EmiForm setEmiData={setEmiData}/>
            {emiData && (
                <>
                    <div className="mt-6 space-y-6">
                        <EmiChart data={emiData}/>
                        {/*<InlineAd/>*/}
                        <EmiTable schedule={emiData.schedule}/>
                    </div>

                </>
            )}
        </>
    );

}
