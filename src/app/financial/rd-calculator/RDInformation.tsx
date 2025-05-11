import React from "react";
import {InfoCard} from "@/components/cards/InfoCard";
import {FaPiggyBank, FaChartLine, FaCalculator, FaHandHoldingUsd} from "react-icons/fa";
import {Accordion} from "@/components/Accordion";

export default function RDInformation() {
    const features = [
        {
            icon: <FaPiggyBank className="text-3xl text-blue-600 dark:text-blue-400"/>,
            title: "What is a Recurring Deposit?",
            description: "A Recurring Deposit (RD) is a special term deposit offered by banks where you deposit a fixed amount every month for a predetermined tenure. The deposit earns interest and the total amount is paid at maturity."
        },
        {
            icon: <FaChartLine className="text-3xl text-green-600 dark:text-green-400"/>,
            title: "How RD Interest Works",
            description: "RD interest is compounded quarterly in most banks. The interest is calculated on each monthly deposit separately, based on the remaining tenure of the deposit."
        },
        {
            icon: <FaCalculator className="text-3xl text-purple-600 dark:text-purple-400"/>,
            title: "RD vs FD Comparison",
            description: "Unlike Fixed Deposits where you invest a lump sum, RDs allow you to invest smaller amounts monthly. RDs typically offer slightly lower interest rates than FDs but provide disciplined savings."
        },
        {
            icon: <FaHandHoldingUsd className="text-3xl text-orange-600 dark:text-orange-400"/>,
            title: "Taxation on RDs",
            description: "Interest earned on RDs is fully taxable as per your income tax slab. TDS is deducted if interest exceeds ₹40,000 (₹50,000 for senior citizens) in a financial year."
        }
    ];

    const faqs = [
        {
            header: "What is the minimum tenure for an RD?",
            children: "Most banks require a minimum tenure of 6 months for RDs, though some may allow 3 months."
        },
        {
            header: "Can I withdraw my RD before maturity?",
            children: "Yes, but premature withdrawals usually attract a penalty of 1-2% on the interest rate."
        },
        {
            header: "Is there a maximum limit for RD deposits?",
            children: "There's no upper limit, but banks may have their own policies. The minimum is typically ₹500-₹1000 per month."
        },
        {
            header: "Can I change the monthly deposit amount during the RD tenure?",
            children: "No, the monthly deposit amount is fixed at the time of opening the RD account."
        }
    ];

    return (
        <div className="w-full mx-auto mt-2 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                    All About Recurring Deposits
                </h2>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {features.map((feature, index) => (
                        <InfoCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>

                {/* FAQs Section */}
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                        Frequently Asked Questions
                    </h3>
                    <div className="space-y-6">
                        <Accordion
                            items={faqs}
                            variant="modern"
                            iconPosition="right"
                            className="mt-4"
                            maxWidth="full"
                        />
                    </div>
                </div>

                {/* Tips Section */}
                <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-4">
                        RD Investment Tips
                    </h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc pl-5">
                        <li>Start with an amount you can consistently deposit every month without strain</li>
                        <li>Compare RD interest rates across different banks before investing</li>
                        <li>Consider the compounding frequency - quarterly compounding typically gives better returns
                        </li>
                        <li>Use the RD maturity amount for specific financial goals like education or vacation</li>
                        <li>Senior citizens often get 0.25-0.50% higher interest rates on RDs</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}