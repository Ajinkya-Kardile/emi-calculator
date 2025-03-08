"use client";
import React, { useState } from "react";
import { EmiSchedule } from "@/types/emiTypes";
import { generatePDF } from "@/utils/generatePdf";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Collapse,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

export default function EmiTable({ schedule }: { schedule: EmiSchedule[] }) {
    const [openYears, setOpenYears] = useState<{ [key: number]: boolean }>({});

    // Get initial loan amount for percentage calculation
    const loanAmount = schedule.length > 0 ? schedule[0].balance + schedule[0].principal : 0;

    // Group data by year and calculate yearly totals
    const yearlyData = schedule.reduce((acc, row) => {
        const year = new Date(row.period).getFullYear();
        if (!acc[year]) {
            acc[year] = {
                months: [],
                totalPrincipal: 0,
                totalInterest: 0,
                totalPayment: 0,
                totalBalance: row.balance,
                totalLoanPaidToDate: 0,
            };
        }

        acc[year].months.push(row);
        acc[year].totalPrincipal += row.principal;
        acc[year].totalInterest += row.interest;
        acc[year].totalPayment += row.totalPayment;
        acc[year].totalBalance = row.balance;
        acc[year].totalLoanPaidToDate = ((loanAmount - row.balance) / loanAmount) * 100;

        return acc;
    }, {} as Record<number, {
        months: EmiSchedule[];
        totalPrincipal: number;
        totalInterest: number;
        totalPayment: number;
        totalBalance: number;
        totalLoanPaidToDate: number;
    }>);

    const toggleYear = (year: number) => {
        setOpenYears((prev) => ({ ...prev, [year]: !prev[year] }));
    };

    return (
        <div className="overflow-x-auto mt-6">
            <h2 className="text-xl font-semibold mb-4">EMI Payment Schedule</h2>
            <button
                onClick={() => generatePDF(schedule)}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                Download PDF
            </button>
            <TableContainer component={Paper} sx={{ marginTop: 4, boxShadow: 3 }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#1976D2" }}>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Year</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Principal</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Interest</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Total Payment</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Balance</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Loan Paid %</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.entries(yearlyData).map(([year, data]) => (
                            <React.Fragment key={year}>
                                {/* Yearly Row (Click to Expand) */}
                                <TableRow sx={{ backgroundColor: "#E3F2FD", fontWeight: "bold" }}>
                                    <TableCell>
                                        <IconButton onClick={() => toggleYear(Number(year))}>
                                            {openYears[Number(year)] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                                        </IconButton>
                                        {year}
                                    </TableCell>
                                    <TableCell>₹{data.totalPrincipal.toFixed(2)}</TableCell>
                                    <TableCell>₹{data.totalInterest.toFixed(2)}</TableCell>
                                    <TableCell>₹{data.totalPayment.toFixed(2)}</TableCell>
                                    <TableCell>₹{data.totalBalance.toFixed(2)}</TableCell>
                                    <TableCell>{data.totalLoanPaidToDate.toFixed(2)}%</TableCell>
                                </TableRow>

                                {/* Monthly Breakdown (Collapsible) */}
                                <TableRow>
                                    <TableCell colSpan={6} style={{ padding: 0 }}>
                                        <Collapse in={openYears[Number(year)]} timeout="auto" unmountOnExit>
                                            <Table size="small">
                                                <TableHead>
                                                    <TableRow sx={{ backgroundColor: "#BBDEFB" }}>
                                                        <TableCell>Month</TableCell>
                                                        <TableCell>Principal</TableCell>
                                                        <TableCell>Interest</TableCell>
                                                        <TableCell>Total Payment</TableCell>
                                                        <TableCell>Balance</TableCell>
                                                        <TableCell>Loan Paid %</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {data.months.map((row, index) => {
                                                        const loanPaidPercentage = ((loanAmount - row.balance) / loanAmount) * 100;
                                                        return (
                                                            <TableRow key={index}>
                                                                <TableCell>
                                                                    {new Date(row.period).toLocaleString("default", {
                                                                        month: "long",
                                                                    })}
                                                                </TableCell>
                                                                <TableCell>₹{row.principal.toFixed(2)}</TableCell>
                                                                <TableCell>₹{row.interest.toFixed(2)}</TableCell>
                                                                <TableCell>₹{row.totalPayment.toFixed(2)}</TableCell>
                                                                <TableCell>₹{row.balance.toFixed(2)}</TableCell>
                                                                <TableCell>{loanPaidPercentage.toFixed(2)}%</TableCell>
                                                            </TableRow>
                                                        );
                                                    })}
                                                </TableBody>
                                            </Table>
                                        </Collapse>
                                    </TableCell>
                                </TableRow>
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
