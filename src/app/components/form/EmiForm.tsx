"use client";
import React, { useEffect, useState } from "react";
import { calculateEmi } from "../../utils/calculateEmi";

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
            <div>
                <label className="block text-gray-700 font-medium">Loan Amount (₹):</label>
                <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                />
            </div>

            {/* Interest Rate */}
            <div>
                <label className="block text-gray-700 font-medium">Interest Rate (%):</label>
                <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                />
            </div>

            {/* Tenure */}
            <div className="flex gap-4">
                <div className="flex-1">
                    <label className="block text-gray-700 font-medium">Tenure:</label>
                    <input
                        type="number"
                        value={tenure}
                        onChange={(e) => setTenure(Number(e.target.value))}
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                    />
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
