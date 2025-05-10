"use client";

import React from "react";
import {Accordion} from "@/components/Accordion";

const FDInformation = () => {
    const fdInfo = [
        {
            header: "What is a Fixed Deposit?",
            children: "A Fixed Deposit is a financial instrument where you deposit a lump sum amount with a bank or financial institution for a fixed tenure at a predetermined interest rate. The interest rate remains constant throughout the tenure, providing guaranteed returns."
        },
        {
            header: "Benefits of Fixed Deposits",
            children: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Guaranteed returns with minimal risk</li>
                    <li>Higher interest rates than regular savings accounts</li>
                    <li>Flexible tenure options from 7 days to 10 years</li>
                    <li>Interest payout options (monthly, quarterly, annually, or at maturity)</li>
                    <li>Tax-saving FDs available under Section 80C (with 5-year lock-in)</li>
                    <li>Loan/overdraft facility against FD in emergencies</li>
                    <li>Senior citizens get additional 0.25% to 0.75% higher interest rates</li>
                </ul>
            )
        },
        {
            header: "Types of Fixed Deposits",
            children: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                        className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg border border-blue-100 dark:border-gray-700">
                        <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Regular FD</h4>
                        <p>Standard FD with fixed tenure and interest rate. Minimum deposit usually ₹1,000.</p>
                    </div>
                    <div
                        className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg border border-blue-100 dark:border-gray-700">
                        <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Tax-Saving FD</h4>
                        <p>5-year lock-in with tax benefits under Section 80C (up to ₹1.5 lakh per year).</p>
                    </div>
                    <div
                        className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg border border-blue-100 dark:border-gray-700">
                        <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Senior Citizen FD</h4>
                        <p>Higher interest rates (0.25%-0.75% more) for investors aged 60+.</p>
                    </div>
                    <div
                        className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg border border-blue-100 dark:border-gray-700">
                        <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Cumulative FD</h4>
                        <p>Interest compounded quarterly and paid at maturity for higher returns.</p>
                    </div>
                </div>
            )
        },
        {
            header: "How FD Interest is Calculated",
            children: (
                <>
                    <p className="mb-4">FD interest can be calculated using either simple or compound interest
                        formula:</p>
                    <div
                        className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 border border-gray-200 dark:border-gray-700">
                        <h4 className="font-bold mb-2">Simple Interest Formula:</h4>
                        <p className="font-mono bg-white dark:bg-gray-900 p-2 rounded border border-gray-200 dark:border-gray-700">
                            Interest = Principal × Rate × Time / 100
                        </p>
                    </div>
                    <div
                        className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="font-bold mb-2">Compound Interest Formula:</h4>
                        <p className="font-mono bg-white dark:bg-gray-900 p-2 rounded border border-gray-200 dark:border-gray-700">
                            Maturity Amount = P × (1 + r/n)^(n×t)
                        </p>
                        <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                            Where P = Principal, r = annual interest rate, n = compounding frequency, t = tenure in
                            years
                        </p>
                    </div>
                </>
            )
        },
        {
            header: "FD Interest Rates in India (2025)",
            children: (
                <>
                    <div className="overflow-x-auto">
                        <table
                            className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                            <thead className="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th className="py-3 px-4 text-left font-semibold">Bank</th>
                                <th className="py-3 px-4 text-left font-semibold">General Public</th>
                                <th className="py-3 px-4 text-left font-semibold">Senior Citizens</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                                <td className="py-3 px-4">SBI</td>
                                <td className="py-3 px-4">3.00% - 6.50%</td>
                                <td className="py-3 px-4">3.50% - 7.50%</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4">HDFC Bank</td>
                                <td className="py-3 px-4">3.00% - 7.00%</td>
                                <td className="py-3 px-4">3.50% - 7.75%</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4">ICICI Bank</td>
                                <td className="py-3 px-4">3.00% - 6.90%</td>
                                <td className="py-3 px-4">3.50% - 7.40%</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4">Axis Bank</td>
                                <td className="py-3 px-4">3.50% - 7.25%</td>
                                <td className="py-3 px-4">4.00% - 7.75%</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4">Post Office</td>
                                <td className="py-3 px-4">6.80%</td>
                                <td className="py-3 px-4">7.30%</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">
                        *Rates are for 1-year tenure and subject to change. Last updated: 01/04/2025
                    </p>
                </>
            )
        },
        {
            header: "FD Taxation Rules",
            children: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Interest earned on FDs is fully taxable as per your income tax slab</li>
                    <li>TDS @10% deducted if interest exceeds ₹40,000 (₹50,000 for senior citizens) in a financial
                        year
                    </li>
                    <li>No TDS if Form 15G/15H submitted (for taxpayers below taxable limit)</li>
                    <li>Tax-saving FDs have 5-year lock-in but qualify for deduction under Section 80C</li>
                    <li>Premature withdrawal penalty is usually 0.5%-1% of interest rate</li>
                </ul>
            )
        }
    ];

    return (
        <div
            className="w-full mx-auto mt-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Fixed Deposit (FD) - Complete Guide
            </h2>
            <div className="max-w-7xl mx-auto">
                <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-6">
                    A Fixed Deposit (FD) is one of the safest and most popular investment options in India,
                    offered by banks and NBFCs. It provides guaranteed returns with minimal risk, making it
                    ideal for conservative investors.
                </p>
                <Accordion
                    items={fdInfo}
                    variant="modern"
                    iconPosition="right"
                    className="mt-4"
                    maxWidth="full"
                />
                <div
                    className="mt-8 bg-blue-50 dark:bg-gray-800 p-6 rounded-xl border border-blue-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-3">
                        Tips for Better FD Returns
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Compare interest rates across banks before investing</li>
                        <li>Consider cumulative FDs for long-term investments (interest compounds quarterly)</li>
                        <li>Ladder your FDs by splitting amount across different tenures</li>
                        <li>Check for special FD schemes during festivals (often offer higher rates)</li>
                        <li>Consider corporate FDs for higher returns (but assess credit risk)</li>
                        <li>Reinvest matured FDs to benefit from compounding</li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default FDInformation;