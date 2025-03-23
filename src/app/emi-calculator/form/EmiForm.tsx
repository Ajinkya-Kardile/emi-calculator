"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { calculateEmi } from "@/utils/calculateEmi";
import LoanInput from "./LoanInput";
import { Tabs, Tab, ToggleButton, ToggleButtonGroup } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { loanDefaults } from "@/utils/loanDefaults";

export default function EmiForm({ setEmiData }: { setEmiData: (data: ReturnType<typeof calculateEmi>) => void }) {
    const pathname = usePathname();
    const router = useRouter();

    // Map routes to loan types
    const routeToLoanType: Record<string, "home" | "personal" | "car" | "creditCard"> = {
        "/emi-calculator/home-loan": "home",
        "/emi-calculator/personal-loan": "personal",
        "/emi-calculator/car-loan": "car",
        "/emi-calculator/credit-card-emi": "creditCard",
    };

    const loanType = routeToLoanType[pathname] || "home"; // Default to home loan
    const [loanAmount, setLoanAmount] = useState(loanDefaults[loanType].loanAmount);
    const [interestRate, setInterestRate] = useState(loanDefaults[loanType].interestRate);
    const [tenure, setTenure] = useState(loanDefaults[loanType].tenure);
    const [tenureType, setTenureType] = useState<"months" | "years">(loanDefaults[loanType].tenureType);
    const [startDate, setStartDate] = useState("");

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];
        setStartDate(today);
    }, []);

    useEffect(() => {
        // Update loan details when route changes
        setLoanAmount(loanDefaults[loanType].loanAmount);
        setInterestRate(loanDefaults[loanType].interestRate);
        setTenure(loanDefaults[loanType].tenure);
        setTenureType(loanDefaults[loanType].tenureType);
    }, [loanType]);

    const handleLoanTypeChange = (event: React.SyntheticEvent, newLoanType: "home" | "personal" | "car" | "creditCard") => {
        const loanTypeToRoute: Record<string, string> = {
            home: "/emi-calculator/home-loan",
            personal: "/emi-calculator/personal-loan",
            car: "/emi-calculator/car-loan",
            creditCard: "/emi-calculator/credit-card-emi",
        };
        router.push(loanTypeToRoute[newLoanType]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEmiData(calculateEmi(loanAmount, interestRate, tenure, tenureType, startDate));
    };

    const getHeading = () => ({
        home: "Home Loan EMI Calculator",
        personal: "Personal Loan EMI Calculator",
        car: "Car Loan EMI Calculator",
        creditCard: "Credit Card EMI Calculator",
    })[loanType] || "EMI Calculator";

    return (
        <div className="w-full bg-white shadow-md rounded-2xl border border-gray-200 p-4 md:p-6">
            {/* Loan Type Tabs */}
            <Tabs
                value={loanType}
                onChange={handleLoanTypeChange}
                variant="fullWidth"
                sx={{
                    "& .MuiTabs-indicator": { backgroundColor: "#2563EB" }, // Indicator color
                }}
            >
                {[
                    { value: "home", label: "Home Loan", icon: <HomeIcon /> },
                    { value: "personal", label: "Personal Loan", icon: <PersonIcon /> },
                    { value: "car", label: "Car Loan", icon: <DirectionsCarIcon /> },
                    { value: "creditCard", label: "Credit Card", icon: <CreditCardIcon /> },
                ].map(({ value, label, icon }) => (
                    <Tab
                        key={value}
                        icon={icon}
                        label={label}
                        value={value}
                        sx={{
                            color: loanType === value ? "#2563EB !important" : "#64748B !important",
                            fontWeight: loanType === value ? "bold" : "normal",
                            "&:hover": { color: "#1E40AF !important" },
                        }}
                    />
                ))}
            </Tabs>

            {/* Loan EMI Form */}
            <form onSubmit={handleSubmit} className="p-2 md:p-6 space-y-6">
                <h2 className="text-3xl font-extrabold text-center text-gray-900">{getHeading()}</h2>

                {/* Loan Amount */}
                <LoanInput label="Loan Amount" value={loanAmount} setValue={setLoanAmount} min={0} max={20000000} step={1} unit="₹" />

                {/* Interest Rate */}
                <LoanInput label="Interest Rate" value={interestRate} setValue={setInterestRate} min={0} max={30} step={0.1} unit="%" />

                {/* Tenure */}
                <div className="flex gap-4">
                    <div className="flex-1">
                        <LoanInput label="Tenure" value={tenure} setValue={setTenure} min={1} max={100} step={1} unit={tenureType === "years" ? "Yr" : "Mo"} />
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
                            <ToggleButton value="months" className="flex-1 font-medium bg-gray-200 hover:bg-gray-300">
                                Months
                            </ToggleButton>
                            <ToggleButton value="years" className="flex-1 font-medium bg-gray-200 hover:bg-gray-300">
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
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition bg-gray-50"
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
