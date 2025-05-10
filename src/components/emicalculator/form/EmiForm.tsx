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
import {styled} from "@mui/material/styles";

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
    "&.MuiToggleButton-root": {
        color: theme.palette.mode === 'dark' ? '#E5E7EB' : '#4B5563',
        backgroundColor: theme.palette.mode === 'dark' ? '#374151' : '#F3F4F6',
        border: `1px solid ${theme.palette.mode === 'dark' ? '#4B5563' : '#D1D5DB'}`,
        transition: 'transform 0.3s ease',
        "&:hover": {
            backgroundColor: theme.palette.mode === 'dark' ? '#4B5563' : '#E5E7EB',
        },
        "&.Mui-selected": {
            color: '#FFFFFF',
            backgroundImage: 'linear-gradient(to right, #3b82f6, #2563eb)', // from-blue-400 to-blue-800
            // borderColor: 'transparent',
            backgroundColor: theme.palette.mode === 'dark' ? '#374151' : '#F3F4F6',
            border: `1px solid ${theme.palette.mode === 'dark' ? '#4B5563' : '#D1D5DB'}`,
            transform: 'scale(1.02)',
            "&:hover": {
                backgroundImage: 'linear-gradient(to right, #3B82F6, #1D4ED8)', // brighter gradient on hover
            },
        },
        "&.Mui-disabled": {
            color: theme.palette.mode === 'dark' ? '#6B7280' : '#9CA3AF',
        },
    },
}));


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
        <div className="w-full bg-white shadow-md rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 dark:bg-gray-800 dark:border-gray-700">
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
                            display: "none",
                        },
                    },
                    "& .MuiTabs-flexContainer": {
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "8px",
                        "@media (min-width: 768px)": {
                            display: "flex",
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
                            minWidth: "auto",
                            borderBottom: loanType === value ? "3px solid #2563EB" : "3px solid transparent",
                            "@media (min-width: 768px)": {
                                borderBottom: "none",
                            },
                            "& .MuiSvgIcon-root": {
                                color: loanType === value ? "#2563EB !important" : "#64748B !important",
                            },
                        }}
                    />
                ))}
            </Tabs>

            <form onSubmit={handleSubmit} className="p-2 md:p-6 space-y-6">
                <LoanInput
                    label="Loan Amount"
                    value={loanAmount}
                    setValue={setLoanAmount}
                    min={0}
                    max={20000000}
                    step={1}
                    unit="₹"
                />
                <LoanInput
                    label="Interest Rate"
                    value={interestRate}
                    setValue={setInterestRate}
                    min={0}
                    max={30}
                    step={0.1}
                    unit="%"
                />

                <div className="flex gap-4">
                    <div className="flex-1">
                        <LoanInput
                            label="Tenure"
                            value={tenure}
                            setValue={setTenure}
                            min={1}
                            max={100}
                            step={1}
                            unit={tenureType === "years" ? "Yr" : "Mo"}
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                            Tenure Type:
                        </label>
                        <ToggleButtonGroup
                            value={tenureType}
                            size="small"
                            exclusive
                            onChange={(event, newValue) => newValue && setTenureType(newValue)}
                            className="w-full "
                        >
                            <StyledToggleButton value="months" className="flex-1 font-medium bg-gray-200 hover:bg-gray-300">
                                Months
                            </StyledToggleButton>
                            <StyledToggleButton value="years" className="flex-1 font-medium bg-gray-200 hover:bg-gray-300">
                                Years
                            </StyledToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        Start Date:
                    </label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                               focus:ring-2 focus:ring-blue-400 focus:outline-none transition
                               bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-400 to-blue-800 text-white font-semibold
                             py-3 rounded-lg shadow-lg hover:scale-[1.02] transition duration-300
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Calculate EMI
                </button>
            </form>
        </div>
    );
}