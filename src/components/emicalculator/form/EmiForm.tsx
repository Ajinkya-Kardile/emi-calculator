"use client";
import React, { useEffect, useState } from "react";
import { calculateEmi } from "@/utils/calculateEmi";
import LoanInput from "@/components/emicalculator/form/LoanInput";
import { Tabs, Tab, ToggleButton, ToggleButtonGroup } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { loanDefaults } from "@/utils/loanDefaults";
import { useRouter } from "next/router";

export default function EmiForm({ setEmiData }: { setEmiData: (data: ReturnType<typeof calculateEmi>) => void }) {
    const router = useRouter();
    const { loanType: loanQuery } = router.query;
    const [loanType, setLoanType] = useState<"home" | "personal" | "car">("home");

    useEffect(() => {
        if (typeof loanQuery === "string" && ["home", "personal", "car"].includes(loanQuery)) {
            setLoanType(loanQuery as "home" | "personal" | "car");
        }
    }, [loanQuery]);

    const handleLoanTypeChange = (event: React.SyntheticEvent, newLoanType: "home" | "personal" | "car") => {
        setLoanType(newLoanType);
        setLoanAmount(loanDefaults[newLoanType].loanAmount);
        setInterestRate(loanDefaults[newLoanType].interestRate);
        setTenure(loanDefaults[newLoanType].tenure);
        setTenureType(loanDefaults[newLoanType].tenureType);
        router.push(`/?loanType=${newLoanType}`, undefined, { shallow: true });
    };

    const [loanAmount, setLoanAmount] = useState(loanDefaults.home.loanAmount);
    const [interestRate, setInterestRate] = useState(loanDefaults.home.interestRate);
    const [tenure, setTenure] = useState(loanDefaults.home.tenure);
    const [tenureType, setTenureType] = useState<"months" | "years">(loanDefaults.home.tenureType);
    const [startDate, setStartDate] = useState("");

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];
        setStartDate(today);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEmiData(calculateEmi(loanAmount, interestRate, tenure, tenureType, startDate));
    };

    const getHeading = () => {
        switch (loanType) {
            case "home":
                return "Home Loan EMI Calculator";
            case "personal":
                return "Personal Loan EMI Calculator";
            case "car":
                return "Car Loan EMI Calculator";
            default:
                return "EMI Calculator - Calculate Instantly";
        }
    };

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
                    { value: "home", label: "Home", icon: <HomeIcon /> },
                    { value: "personal", label: "Personal", icon: <PersonIcon /> },
                    { value: "car", label: "Car", icon: <DirectionsCarIcon /> }
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
                <LoanInput label="Loan Amount" value={loanAmount} setValue={setLoanAmount} min={0} max={20000000}
                           step={1} unit="₹" />

                {/* Interest Rate */}
                <LoanInput label="Interest Rate" value={interestRate} setValue={setInterestRate} min={0} max={30}
                           step={0.1} unit="%" />

                {/* Tenure */}
                <div className="flex gap-4">
                    <div className="flex-1">
                        <LoanInput label="Tenure" value={tenure} setValue={setTenure} min={1} max={100} step={1}
                                   unit={tenureType === "years" ? "Yr" : "Mo"} />
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
