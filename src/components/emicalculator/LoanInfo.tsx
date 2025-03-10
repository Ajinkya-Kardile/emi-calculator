"use client";
import React from "react";
export default function EMIInfo() {
    return (
        <div className="w-full mx-auto mt-4 p-6 bg-white rounded-lg">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
                Loan EMI Calculator - Everything You Need to Know
            </h2>

            <section className="mb-6">
                <h3 className="text-2xl font-semibold text-blue-800 mb-3">What is an EMI?</h3>
                <p className="text-gray-700">
                    An <span className="font-bold">EMI (Equated Monthly Installment)</span> is a fixed monthly payment
                    that a borrower makes to a lender while repaying a loan.
                    It includes two main components: <span className="font-bold">principal</span> (the original loan
                    amount) and <span className="font-bold">interest</span> (the cost of borrowing).
                </p>
                <p className="text-gray-700 mt-3">
                    Whether you are taking a <span className="font-bold">Home Loan EMI, Personal Loan EMI, Car Loan EMI, Education Loan EMI</span>,
                    or any other loan,
                    the EMI remains constant throughout the tenure. The amount depends on factors like the <span
                    className="font-bold">loan amount, interest rate, and tenure</span>.
                </p>
                <p className="text-gray-700 mt-3">
                    Using an <span className="font-bold">EMI Calculator</span>, you can easily estimate your monthly
                    installments and plan your <span className="font-bold">loan repayment</span> accordingly.
                    This helps in better <span className="font-bold">financial planning</span> and ensures that your
                    budget is not affected by unexpected expenses.
                </p>
                <p className="text-gray-700 mt-3">
                    You can calculate your <span className="font-bold">Loan EMI</span> instantly using our <span
                    className="font-bold">Online EMI Calculator</span>,
                    which provides an accurate breakdown of your <span className="font-bold">monthly payments, interest amount, and total repayment</span>.
                </p>
            </section>


            <section className="mb-6">
                <h3 className="text-2xl font-semibold text-blue-800 mb-3">EMI Calculation Formula</h3>
                <p className="text-gray-700 mb-2">
                    The EMI for a loan is calculated using the standard formula:
                </p>
                <div className="p-6 rounded-lg text-gray-900 text-lg">
                    <span className="font-bold">EMI = </span>
                    <div className="inline-block align-middle">
                        <div className="border-b-2 border-gray-900 pb-1 px-2">
                            P × R × (1 + R)<sup>N</sup>
                        </div>
                        <div className="pt-1">(1 + R)<sup>N</sup> – 1</div>
                    </div>
                </div>

                <ul className="list-disc list-inside mt-3 text-gray-700">
                    <li><strong>P</strong> = Principal Loan Amount</li>
                    <li><strong>R</strong> = Monthly Interest Rate (Annual Rate / 12 / 100)</li>
                    <li><strong>N</strong> = Loan Tenure in Months</li>
                </ul>
            </section>

            <section className="mb-6">
                <h3 className="text-2xl font-semibold text-blue-800 mb-3">Types of EMI Calculators</h3>
                <ul className="list-disc list-inside text-gray-700">
                    <li><strong>Home Loan EMI Calculator</strong> - Calculate monthly payments for home loans.</li>
                    <li><strong>Personal Loan EMI Calculator</strong> - Check EMI for personal loans.</li>
                    <li><strong>Car Loan EMI Calculator</strong> - Find your monthly car loan payments.</li>
                    <li><strong>Business Loan EMI Calculator</strong> - Plan finances for business loans.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h3 className="text-2xl font-semibold text-blue-800 mb-3">Factors Affecting Loan EMI</h3>
                <p className="text-gray-700 mb-3">
                    Several key factors influence the <span
                    className="font-bold">Equated Monthly Installment (EMI)</span> of a loan. Understanding these
                    factors
                    can help you make informed financial decisions when applying for a <span className="font-bold">Home Loan EMI, Personal Loan EMI, Car Loan EMI, or any other loan.</span>
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                        <strong>Loan Amount (Principal)</strong> – The higher the <span className="font-bold">loan amount</span>,
                        the higher the EMI.
                        A <span className="font-bold">Loan EMI Calculator</span> helps you estimate the monthly
                        installment based on the borrowed amount.
                    </li>
                    <li>
                        <strong>Interest Rate</strong> – Higher <span className="font-bold">interest rates</span> lead
                        to increased EMI payments.
                        The rate depends on the loan type (e.g., <span className="font-bold">Home Loan, Personal Loan, or Car Loan</span>)
                        and the lender's terms.
                    </li>
                    <li>
                        <strong>Loan Tenure</strong> – A <span className="font-bold">longer tenure</span> reduces the
                        EMI amount but increases the total interest paid over time.
                        Shorter tenures result in higher EMIs but lower overall interest costs.
                    </li>
                    <li>
                        <strong>Type of Interest</strong> – Loans can have <span className="font-bold">fixed or floating interest rates</span>.
                        Fixed rates keep the EMI constant, while floating rates fluctuate based on market conditions.
                    </li>
                    <li>
                        <strong>Prepayments & Part-Payments</strong> – Making <span
                        className="font-bold">extra payments</span> reduces the outstanding loan amount, lowering future
                        EMIs.
                    </li>
                </ul>
                <p className="text-gray-700 mt-3">
                    Use our <span className="font-bold">Online EMI Calculator</span> to quickly estimate your monthly
                    payments and plan your finances better!
                </p>
            </section>


            <section className="mb-6">
                <h3 className="text-2xl font-semibold text-blue-800 mb-3">Benefits of Using an EMI Calculator</h3>
                <p className="text-gray-700 mb-3">
                    An <span className="font-bold">EMI Calculator</span> is a powerful tool that helps borrowers
                    estimate their <span className="font-bold">monthly loan payments</span> before applying for a
                    <span className="font-bold"> Home Loan, Personal Loan, Car Loan, or Business Loan</span>. Here’s why
                    you should use one:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                        <strong>Quick & Accurate EMI Calculation</strong> – Instantly calculate your <span
                        className="font-bold">loan EMI</span>
                        with precision, avoiding manual errors.
                    </li>
                    <li>
                        <strong>Compare Different Loan Options</strong> – Check <span className="font-bold">multiple loan amounts, interest rates, and tenures </span>
                        to choose the best loan for your needs.
                    </li>
                    <li>
                        <strong>Better Budgeting & Financial Planning</strong> – Plan your <span className="font-bold">loan repayment strategy</span> in
                        advance to ensure
                        it fits your monthly expenses.
                    </li>
                    <li>
                        <strong>Avoid Hidden Surprises</strong> – Know the <span className="font-bold">exact EMI, interest payable, and total loan cost</span> beforehand.
                    </li>
                    <li>
                        <strong>Works for All Loan Types</strong> – Use it for <span className="font-bold">Home Loan EMI, Personal Loan EMI, Car Loan EMI, Business Loan EMI, and more.</span>
                    </li>
                </ul>
                <p className="text-gray-700 mt-3">
                    Try our <span className="font-bold">Online Loan EMI Calculator</span> today and make informed
                    financial decisions!
                </p>
            </section>
        </div>
    );
};
