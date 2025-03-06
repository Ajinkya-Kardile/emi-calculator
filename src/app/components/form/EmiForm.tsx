"use client";
import React, { useEffect, useState } from "react";
import { calculateEmi } from "../../utils/calculateEmi";
import LoanInput from "@/components/form/LoanInput";

export default function EmiForm({ setEmiData }: { setEmiData: Function }) {
    const [loanAmount, setLoanAmount] = useState(500000);
    const [interestRate, setInterestRate] = useState(7.5);
    const [tenure, setTenure] = useState(5);
    const [tenureType, setTenureType] = useState<"months" | "years">("years");
    const [startDate, setStartDate] = useState("");

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];
        setStartDate(today);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEmiData(calculateEmi(loanAmount, interestRate, tenure, tenureType, startDate));
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 text-center">EMI Calculator</h2>

            {/* Loan Amount */}
            <LoanInput label="Loan Amount" value={loanAmount} setValue={setLoanAmount} min={0} max={10000000} step={1000} unit="₹" />

            {/* Interest Rate */}
            <LoanInput label="Interest Rate" value={interestRate} setValue={setInterestRate} min={0} max={100} step={0.1} unit="%" />

            {/* Tenure */}
            <div className="flex gap-4">
                <div className="flex-1">
                    <LoanInput label="Tenure" value={tenure} setValue={setTenure} min={1} max={100} step={1} unit={tenureType === "years" ? "Yr" : "Mo"} />
                </div>
                <div className="flex-1">
                    <label className="block text-gray-700 font-medium">Tenure Type:</label>
                    <select
                        value={tenureType}
                        onChange={(e) => setTenureType(e.target.value as "months" | "years")}
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                    >
                        <option value="months">Months</option>
                        <option value="years">Years</option>
                    </select>
                </div>
            </div>

            {/* Start Date */}
            <div>
                <label className="block text-gray-700 font-medium">Start Date:</label>
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
                Calculate EMI
            </button>
        </form>
    );
}
