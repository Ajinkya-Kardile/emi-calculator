"use client";

import React, {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import {calculateEmi} from "@/utils/calculateEmi";
import LoanInput from "./LoanInput";
import {Tab, Tabs, ToggleButton, ToggleButtonGroup} from "@mui/material";
import {loanDefaults} from "@/utils/loanDefaults";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const loanTypes = [
    {value: "home", label: "Home Loan", icon: <HomeIcon/>, href: "/emi-calculator/home-loan"},
    {value: "personal", label: "Personal Loan", icon: <PersonIcon/>, href: "/emi-calculator/personal-loan"},
    {value: "car", label: "Car Loan", icon: <DirectionsCarIcon/>, href: "/emi-calculator/car-loan"},
    {value: "creditCard", label: "Credit Card", icon: <CreditCardIcon/>, href: "/emi-calculator/credit-card"},
];

export default function EmiForm({loanType, setEmiData}: {
    loanType: keyof typeof loanDefaults;
    setEmiData: (data: ReturnType<typeof calculateEmi>) => void
}) {
    const router = useRouter();
    const selectedIndex = loanTypes.findIndex((tab) => tab.value === loanType);
    const defaultValues = loanDefaults[loanType] || loanDefaults["home"];

    const [loanAmount, setLoanAmount] = useState(defaultValues.loanAmount);
    const [interestRate, setInterestRate] = useState(defaultValues.interestRate);
    const [tenure, setTenure] = useState(defaultValues.tenure);
    const [tenureType, setTenureType] = useState<"months" | "years">(defaultValues.tenureType);
    const [startDate, setStartDate] = useState(new Date().toISOString().split("T")[0]);

    // Reset state when loanType changes
    useEffect(() => {
        setLoanAmount(defaultValues.loanAmount);
        setInterestRate(defaultValues.interestRate);
        setTenure(defaultValues.tenure);
        setTenureType(defaultValues.tenureType);
    }, [loanType]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEmiData(calculateEmi(loanAmount, interestRate, tenure, tenureType, startDate));
    };

    return (
        <div className="w-full bg-white shadow-md rounded-2xl border border-gray-200 p-4 md:p-6">
            <Tabs
                value={selectedIndex}
                onChange={(_, newIndex) => router.push(loanTypes[newIndex].href)}
                variant="fullWidth"
                sx={{
                    "& .MuiTabs-indicator": {
                        backgroundColor: "#2563EB",
                        height: "2px",
                        bottom: 0,
                        "@media (max-width: 767px)": {
                            display: "none", // Hide default indicator in grid mode
                        },
                    },
                    "& .MuiTabs-flexContainer": {
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)", // 2x2 grid for mobile
                        gap: "8px",
                        "@media (min-width: 768px)": {
                            display: "flex", // Row layout for tablets and above
                        },
                    },
                }}
            >
                {loanTypes.map(({value, label, icon}, index) => (
                    <Tab
                        key={value}
                        icon={icon}
                        label={label}
                        value={index}
                        sx={{
                            color: loanType === value ? "#2563EB !important" : "#64748B !important",
                            fontWeight: loanType === value ? "bold" : "normal",
                            "&:hover": {color: "#1E40AF !important"},
                            minWidth: "auto", // Allows proper spacing in grid mode
                            borderBottom: loanType === value ? "3px solid #2563EB" : "3px solid transparent", // Manual indicator
                            "@media (min-width: 768px)": {
                                borderBottom: "none", // Use MUI indicator in row mode
                            },
                        }}
                    />
                ))}
            </Tabs>


            <form onSubmit={handleSubmit} className="p-2 md:p-6 space-y-6">
                {/*<h2 className="text-3xl font-bold text-center text-gray-900">*/}
                {/*    {loanType.toUpperCase()} LOAN EMI CALCULATOR*/}
                {/*</h2>*/}

                <LoanInput label="Loan Amount" value={loanAmount} setValue={setLoanAmount} min={0} max={20000000}
                           step={1} unit="₹"/>
                <LoanInput label="Interest Rate" value={interestRate} setValue={setInterestRate} min={0} max={30}
                           step={0.1} unit="%"/>

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
                            onChange={(event, newValue) => newValue && setTenureType(newValue)}
                            className="w-full"
                        >
                            <ToggleButton value="months" className="flex-1 font-medium bg-gray-200 hover:bg-gray-300">
                                Months
                            </ToggleButton>
                            <ToggleButton value="years" className="flex-1 font-medium bg-gray-200 hover:bg-gray-300">
                                Years
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">Start Date:</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full mt-1 px-4 py-2 border border-gray-300 text-gray-700
                   rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition
                   bg-gray-50 dark:bg-gray-50 dark:text-gray-700 dark:border-gray-300"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-3 mt-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
                >
                    Calculate EMI
                </button>
            </form>
        </div>
    );
}
