"use client"

import {styled} from "@mui/material/styles";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import React, {useEffect, useState} from "react";
import {calculateRd} from "@/utils/calculateRd";
import {EChartsOption} from "echarts";
import SavingsIcon from "@mui/icons-material/Savings";
import LoanInput from "@/components/emicalculator/form/LoanInput";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ReactECharts from "echarts-for-react";

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
            backgroundImage: 'linear-gradient(to right, #3b82f6, #2563eb)',
            backgroundColor: theme.palette.mode === 'dark' ? '#374151' : '#F3F4F6',
            border: `1px solid ${theme.palette.mode === 'dark' ? '#4B5563' : '#D1D5DB'}`,
            transform: 'scale(1.02)',
            "&:hover": {
                backgroundImage: 'linear-gradient(to right, #3B82F6, #1D4ED8)',
            },
        },
        "&.Mui-disabled": {
            color: theme.palette.mode === 'dark' ? '#6B7280' : '#9CA3AF',
        },
    },
}));

export default function RdCalculator() {
    const [monthlyDeposit, setMonthlyDeposit] = useState(5000);
    const [interestRate, setInterestRate] = useState(6.5);
    const [tenure, setTenure] = useState(12);
    const [tenureType, setTenureType] = useState<"months" | "years">("months");
    const [compoundingFrequency, setCompoundingFrequency] = useState<"Monthly" | "Quarterly">("Quarterly");
    const [result, setResult] = useState<{ maturityAmount: number; interestEarned: number; totalDeposits: number } | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(mediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener('change', handler);

        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setResult(calculateRd({
                monthlyDeposit,
                rate: interestRate,
                tenure,
                tenureUnit: tenureType,
                compoundingFrequency
            }));
            setIsLoading(false);
        }, 500);
    };

    // Chart configuration
    const colors = isDarkMode ? ['#3B82F6', '#10B981', '#F59E0B'] : ['#2563EB', '#059669', '#D97706'];

    const pieOption: EChartsOption = {
        tooltip: {trigger: "item"},
        legend: {
            bottom: 0,
            left: "center",
            textStyle: {color: isDarkMode ? "#E5E7EB" : "#4B5563"},
        },
        series: [
            {
                name: "RD Breakdown",
                type: "pie",
                radius: ["40%", "70%"],
                itemStyle: {
                    borderRadius: 10,
                    borderColor: isDarkMode ? "#1F2937" : "#FFFFFF",
                    borderWidth: 2,
                },
                label: {
                    color: isDarkMode ? "#E5E7EB" : "#111827",
                    formatter: '{b}: {d}%'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 15,
                        fontWeight: "bold",
                        color: isDarkMode ? "#FFFFFF" : "#111827"
                    },
                },
                data: [
                    {name: "Total Deposits", value: result?.totalDeposits || 0, itemStyle: {color: colors[0]}},
                    {name: "Interest Earned", value: result?.interestEarned || 0, itemStyle: {color: colors[1]}},
                    {name: "Maturity Amount", value: result?.maturityAmount || 0, itemStyle: {color: colors[2]}},
                ],
            },
        ],
    };

    return (
        <div className="mt-6 sm:mt-8 px-4 sm:px-6 lg:px-8">
            {/* Form Section */}
            <div
                className="w-full bg-white shadow-md rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
                    <SavingsIcon className="text-blue-600 dark:text-blue-400"
                                 sx={{fontSize: {xs: 32, sm: 40}}}/>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        RD CALCULATOR
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                        {/* Monthly Deposit Input */}
                        <div className="space-y-2">
                            <LoanInput
                                label="Monthly Deposit (₹)"
                                value={monthlyDeposit}
                                setValue={setMonthlyDeposit}
                                min={500}
                                max={100000}
                                step={100}
                                unit="₹"
                            />
                        </div>

                        {/* Interest Rate Input */}
                        <div className="space-y-2">
                            <LoanInput
                                label="Interest Rate (%)"
                                value={interestRate}
                                setValue={setInterestRate}
                                min={1}
                                max={30}
                                step={0.1}
                                unit="%"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                        {/* Tenure Input */}
                        <div className="space-y-2">
                            <div className="flex flex-col sm:flex-row gap-2">
                                <div className="flex-1">
                                    <LoanInput
                                        label="Tenure"
                                        value={tenure}
                                        setValue={setTenure}
                                        min={3}
                                        max={tenureType === "years" ? 30 : 360}
                                        step={1}
                                        unit={tenureType === "years" ? "Yr" : "Mo"}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label
                                        className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">Tenure
                                        Type</label>
                                    <ToggleButtonGroup
                                        value={tenureType}
                                        size="small"
                                        exclusive
                                        onChange={(event, newValue) => newValue && setTenureType(newValue)}
                                        className="w-full grid grid-cols-2 gap-2 sm:flex sm:gap-1"
                                    >
                                        <StyledToggleButton value="months"
                                                            className="flex-1 font-medium bg-gray-200 hover:bg-gray-300">
                                            Months
                                        </StyledToggleButton>
                                        <StyledToggleButton value="years"
                                                            className="flex-1 font-medium bg-gray-200 hover:bg-gray-300">
                                            Years
                                        </StyledToggleButton>
                                    </ToggleButtonGroup>
                                </div>
                            </div>
                        </div>

                        {/* Compounding Frequency */}
                        <div className="space-y-2">
                            <label
                                className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
                                Compounding Frequency
                            </label>
                            <Select
                                labelId="compounding-frequency-label"
                                id="compounding-frequency-select"
                                value={compoundingFrequency}
                                onChange={(e) => setCompoundingFrequency(e.target.value as typeof compoundingFrequency)}
                                input={<OutlinedInput/>}
                                className="w-full"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: isDarkMode ? "#4B5563" : "#D1D5DB",
                                        },
                                        "&:hover fieldset": {
                                            borderColor: isDarkMode ? "#6B7280" : "#9CA3AF",
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#2563EB",
                                            borderWidth: "1px",
                                        },
                                    },
                                    "& .MuiSelect-select": {
                                        padding: "10px 14px",
                                        backgroundColor: isDarkMode ? "#374151" : "#F3F4F6",
                                        color: isDarkMode ? "#E5E7EB" : "#4B5563",
                                        borderRadius: "0.375rem",
                                    },
                                }}
                            >
                                <MenuItem value="Monthly">Monthly</MenuItem>
                                <MenuItem value="Quarterly">Quarterly</MenuItem>
                            </Select>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full text-sm sm:text-base bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-2.5 sm:py-3 rounded-lg shadow-lg hover:scale-[1.02] transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Calculating...' : 'Calculate RD'}
                    </button>
                </form>
            </div>

            {/* Results Section */}
            {result && (
                <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                    <div
                        className="w-full bg-white dark:bg-gray-800/80 backdrop-blur-lg rounded-lg p-4 sm:p-6 shadow-md dark:shadow-gray-700/30">
                        <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center">
                            RD Analysis
                        </h2>

                        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6">
                            {/* Result Cards */}
                            <div className="space-y-4 sm:space-y-6">
                                {[
                                    {label: "Total Deposits", value: `₹${result.totalDeposits.toLocaleString()}`},
                                    {
                                        label: "Interest Earned",
                                        value: `₹${result.interestEarned.toLocaleString("en-IN", {maximumFractionDigits: 2})}`
                                    },
                                    {
                                        label: "Maturity Amount",
                                        value: `₹${result.maturityAmount.toLocaleString("en-IN", {maximumFractionDigits: 2})}`
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="border-2 border-blue-800 dark:border-blue-300 border-solid bg-gray-50 dark:bg-gray-700 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-md text-center transition-transform transform hover:scale-[1.02]"
                                    >
                                        <p className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
                                            {item.label}
                                        </p>
                                        <p className={`text-xl sm:text-2xl font-extrabold ${index === 2 ? "text-green-600 dark:text-green-400" : index === 1 ? "text-blue-700 dark:text-blue-200" : "text-purple-600 dark:text-purple-300"}`}>
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Chart */}
                            <div className="flex flex-col items-center h-full">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-200 text-center mb-2 sm:mb-3">
                                    RD Breakdown
                                </h3>
                                <div className="w-full h-[280px] sm:h-[320px]">
                                    <ReactECharts
                                        option={pieOption}
                                        style={{height: "100%", width: "100%"}}
                                        theme={isDarkMode ? "dark" : "light"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}