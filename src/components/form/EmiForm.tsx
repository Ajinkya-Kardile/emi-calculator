"use client";
import React, {useEffect, useState} from "react";
import {calculateEmi} from "@/utils/calculateEmi";
import LoanInput from "@/components/form/LoanInput";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import {Tabs, Tab} from "@mui/material";
import {loanDefaults} from "@/utils/loanDefaults";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

export default function EmiForm({setEmiData}: { setEmiData: Function }) {
    const [loanType, setLoanType] = useState<"home" | "personal" | "car">("home");
    const [loanAmount, setLoanAmount] = useState(loanDefaults.home.loanAmount);
    const [interestRate, setInterestRate] = useState(loanDefaults.home.interestRate);
    const [tenure, setTenure] = useState(loanDefaults.home.tenure);
    const [tenureType, setTenureType] = useState<"months" | "years">(loanDefaults.home.tenureType);
    const [startDate, setStartDate] = useState("");

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];
        setStartDate(today);
    }, []);

    // Function to update loan details when switching tabs
    const handleLoanTypeChange = (event: React.SyntheticEvent, newLoanType: "home" | "personal" | "car") => {
        setLoanType(newLoanType);
        setLoanAmount(loanDefaults[newLoanType].loanAmount);
        setInterestRate(loanDefaults[newLoanType].interestRate);
        setTenure(loanDefaults[newLoanType].tenure);
        setTenureType(loanDefaults[newLoanType].tenureType);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEmiData(calculateEmi(loanAmount, interestRate, tenure, tenureType, startDate));
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 text-center">EMI Calculator</h2>

            {/* Loan Type Tabs */}
            <Tabs value={loanType} onChange={handleLoanTypeChange} textColor="primary"
                  indicatorColor="primary"
                  aria-label="Loan Type Selection Tabs"
                  variant="fullWidth">
                <Tab icon={<HomeIcon/>} label="Home Loan" value="home"/>
                <Tab icon={<PersonIcon/>} label="Personal Loan" value="personal"/>
                <Tab icon={<DirectionsCarIcon/>} label="Car Loan" value="car"/>
            </Tabs>

            {/* Loan Amount */}
            <LoanInput label="Loan Amount" value={loanAmount} setValue={setLoanAmount} min={0} max={20000000} step={1}
                       unit="₹"/>

            {/* Interest Rate */}
            <LoanInput label="Interest Rate" value={interestRate} setValue={setInterestRate} min={0} max={30} step={0.1}
                       unit="%"/>

            {/* Tenure */}
            <div className="flex gap-4">
                <div className="flex-1">
                    <LoanInput label="Tenure" value={tenure} setValue={setTenure} min={1} max={100} step={1}
                               unit={tenureType === "years" ? "Yr" : "Mo"}/>
                </div>
                <div className="flex-1">
                    <label className="block text-gray-700 font-medium">Tenure Type:</label>
                    <ToggleButtonGroup
                        value={tenureType}
                        size="small"
                        exclusive
                        onChange={(event, newValue) => {
                            if (newValue !== null) setTenureType(newValue);
                        }}
                        className="w-full"
                    >
                        <ToggleButton value="months" className="flex-1">
                            Months
                        </ToggleButton>
                        <ToggleButton value="years" className="flex-1">
                            Years
                        </ToggleButton>
                    </ToggleButtonGroup>
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
            <button type="submit"
                    className="w-full bg-blue-600 text-white font-medium py-3 my-5 rounded-md hover:bg-blue-700 transition duration-300">
                Calculate EMI
            </button>
        </form>
    );
}
