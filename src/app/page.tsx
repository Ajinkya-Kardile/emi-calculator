"use client"
import { useState } from "react";
import EmiForm from "@/components/form/EmiForm";
import EmiTable from "@/components/report/EmiTable";
import EmiChart from "@/components/report/EmiChart";
import {EmiResult} from "./types/emiTypes";
export default function Home() {
    const [emiData, setEmiData] = useState<EmiResult | null>(null);

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold text-center mb-6">EMI Calculator</h1>
            <EmiForm setEmiData={setEmiData} />
            {emiData && (
                <>
                    <EmiChart data={emiData} />
                    <EmiTable schedule={emiData.schedule} />
                </>
            )}
        </div>
    );
}
