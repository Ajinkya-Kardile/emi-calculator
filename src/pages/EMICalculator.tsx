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
                    <h1 className="text-2xl font-bold text-center mb-6">EMI Calculator</h1>
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
