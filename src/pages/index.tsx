import React from "react";
import SidebarLayout from "@/components/layout/sidebarLayout";
import LoanInfo from "@/components/emicalculator/LoanInfo";
import SimpleEmiCalculator from "@/components/emicalculator/SimpleEmiCalculator";

export default function Home() {
    return (
        <>
            <div className="w-full">
                <SidebarLayout>
                    <SimpleEmiCalculator/>
                </SidebarLayout>
                <LoanInfo/>
            </div>
        </>
    );

}
