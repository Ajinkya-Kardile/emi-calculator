"use client";
import { useState } from "react";
import { calculateEmi } from "../../utils/calculateEmi";

export default function EmiForm({ setEmiData }: { setEmiData: Function }) {
    const [loanAmount, setLoanAmount] = useState(500000);
    const [interestRate, setInterestRate] = useState(7.5);
    const [tenure, setTenure] = useState(5);
    const [tenureType, setTenureType] = useState<"months" | "years">("years");
    const [startDate, setStartDate] = useState("2024-01-01");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEmiData(calculateEmi(loanAmount, interestRate, tenure, tenureType, startDate));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
            <div>
                <label>Loan Amount (₹):</label>
                <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="input"/>
            </div>
            <div>
                <label>Interest Rate (%):</label>
                <input type="number" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="input"/>
            </div>
            <div>
                <label>Tenure:</label>
                <input type="number" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="input"/>
                <select value={tenureType} onChange={(e) => setTenureType(e.target.value as "months" | "years")} className="input">
                    <option value="months">Months</option>
                    <option value="years">Years</option>
                </select>
            </div>
            <div>
                <label>Start Date:</label>
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="input"/>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Calculate</button>
        </form>
    );
}
