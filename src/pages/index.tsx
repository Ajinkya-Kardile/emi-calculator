"use client";
import React from "react";
import {useState} from "react";
import EmiForm from "@/components/form/EmiForm";
import EmiTable from "@/components/report/EmiTable";
import EmiChart from "@/components/report/EmiChart";
import {EmiResult} from "@/types/emiTypes";
import SidebarLayout from "@/components/layout/sidebarLayout";
import LoanInfo from "@/components/common/LoanInfo";

export default function Home () {
    const [emiData, setEmiData] = useState<EmiResult | null>(null);

    return (
        <>
            <SidebarLayout>
                <div>
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
                </div>
            </SidebarLayout>
            <LoanInfo/>

        </>
    );

}
