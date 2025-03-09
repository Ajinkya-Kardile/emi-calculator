"use client";
import {useState} from "react";
import EmiForm from "@/components/form/EmiForm";
import EmiTable from "@/components/report/EmiTable";
import EmiChart from "@/components/report/EmiChart";
import {EmiResult} from "@/types/emiTypes";
import {InlineAd} from "@/components/ads/Ads";
import SidebarLayout from "@/components/layout/sidebarLayout";

export default function EMICalculator() {
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
                            <div className="mt-6">
                                <EmiChart data={emiData}/>
                                <InlineAd/>
                                <EmiTable schedule={emiData.schedule}/>
                            </div>

                        </>
                    )}
                </div>
            </SidebarLayout>
        </>
    );
}
