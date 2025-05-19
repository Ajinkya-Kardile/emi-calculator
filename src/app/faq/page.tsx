import React from "react";
import SidebarLayout from "@/components/layout/sidebarLayout";
import {Accordion} from "@/components/Accordion";


const faqs = [
    {
        header: "What is an EMI?",
        children: (
            <>
                EMI (Equated Monthly Installment) is a fixed monthly payment a borrower makes to repay a loan. It
                includes both principal and interest components.
            </>
        ),
    },
    {
        header: "How is EMI calculated?",
        children: (
            <>
                The EMI calculation formula is:
                <br/>
                <br/>
                <code>EMI = [P × R × (1 + R) ^ N] / [(1 + R) ^ N – 1]</code>
                <br/>
                <br/>
                Where:
                <ul className="list-disc list-inside">
                    <li><span className="font-bold">P</span> = Loan Amount</li>
                    <li><span className="font-bold">R</span> = Monthly Interest Rate</li>
                    <li><span className="font-bold">N</span> = Loan Tenure (in months)</li>
                </ul>
            </>
        ),
    },
    {
        header: "What factors affect my loan EMI?",
        children: (
            <>
                Several factors influence your EMI:
                <ul className="list-disc list-inside">
                    <li><span className="font-bold">Loan Amount</span> – Higher loan amounts increase EMI.</li>
                    <li><span className="font-bold">Interest Rate</span> – Higher interest rates mean higher EMI.</li>
                    <li><span className="font-bold">Loan Tenure</span> – Longer tenure reduces EMI but increases total
                        interest paid.
                    </li>
                    <li><span className="font-bold">Processing Fees</span> – Some banks add fees that may impact EMI.
                    </li>
                    <li><span className="font-bold">Prepayment Options</span> – Partial payments can lower EMI in the
                        long run.
                    </li>
                </ul>
            </>
        ),
    },
    {
        header: "Why should I use an EMI Calculator?",
        children: (
            <>
                An EMI Calculator helps in quick and accurate loan calculations. It allows you to compare different loan
                options, plan finances, and avoid surprises. You can calculate Home Loan EMI, Personal Loan EMI, Car
                Loan EMI, and Business Loan EMI effortlessly.
            </>
        ),
    },
    {
        header: "What types of loans can I calculate EMI for?",
        children: (
            <>
                You can calculate EMI for various loan types, including:
                <ul className="list-disc list-inside">
                    <li><span className="font-bold">Home Loan EMI</span> – For buying a house.</li>
                    <li><span className="font-bold">Personal Loan EMI</span> – For personal expenses.</li>
                    <li><span className="font-bold">Car Loan EMI</span> – For vehicle purchase.</li>
                    <li><span className="font-bold">Education Loan EMI</span> – For student tuition fees.</li>
                    <li><span className="font-bold">Business Loan EMI</span> – For business expansion or investment.
                    </li>
                </ul>
            </>
        ),
    },
    {
        header: "How can I reduce my EMI amount?",
        children: (
            <>
                Yes! You can lower your EMI by:
                <ul className="list-disc list-inside">
                    <li><span className="font-bold">Choosing a longer loan tenure</span> – This reduces EMI but
                        increases total interest.
                    </li>
                    <li><span className="font-bold">Paying a higher down payment</span> – Reduces loan amount and EMI.
                    </li>
                    <li><span className="font-bold">Negotiating a lower interest rate</span> – Helps in lowering EMI.
                    </li>
                    <li><span className="font-bold">Making part-prepayments</span> – Reduces outstanding loan amount and
                        future EMIs.
                    </li>
                </ul>
            </>
        ),
    },
    {
        header: "What is the impact of interest rates on EMI?",
        children: (
            <>
                Higher interest rates increase EMI payments, while lower interest rates reduce them. It&rsquo;s
                essential to compare interest rates from different banks before choosing a loan.
            </>
        ),
    },
    {
        header: "Does my CIBIL score affect my EMI?",
        children: (
            <>
                Yes, a higher <span className="font-bold">CIBIL score (750+)</span> can help you get a <span
                className="font-bold">lower interest rate</span>, reducing your EMI. A lower score may result in <span
                className="font-bold">higher EMI and loan rejection</span>.
            </>
        ),
    },
    {
        header: "Can I prepay my loan to reduce EMI?",
        children: (
            <>
                Yes, you can prepay part of your loan to reduce EMI. Many banks allow <span className="font-bold">prepayment without extra charges</span>,
                but some may have a <span className="font-bold">prepayment penalty</span>.
            </>
        ),
    },
    {
        header: "What is a fixed vs floating interest rate for EMI?",
        children: (
            <>
                <span className="font-bold">Fixed Interest Rate</span> – EMI remains constant throughout the tenure.
                <br/>
                <br/>
                <span className="font-bold">Floating Interest Rate</span> – EMI varies based on market conditions. Lower
                initial rates but can change over time.
            </>
        ),
    },
    {
        header: "How does loan tenure affect EMI?",
        children: (
            <>
                <span className="font-bold">Shorter tenure</span> – Higher EMI but lower total interest paid.
                <br/>
                <br/>
                <span className="font-bold">Longer tenure</span> – Lower EMI but higher total interest cost.
            </>
        ),
    },
    {
        header: "Are processing fees included in EMI calculation?",
        children: (
            <>
                Processing fees are usually <span className="font-bold">not included</span> in EMI but are charged
                separately by banks. Some banks may deduct processing fees before disbursing the loan.
            </>
        ),
    },
    {
        header: "Can I change my EMI amount after taking a loan?",
        children: (
            <>
                In most cases, EMI remains fixed. However, you can <span
                className="font-bold">refinance your loan</span> or <span
                className="font-bold">make prepayments</span> to reduce EMI.
            </>
        ),
    },
    {
        header: "What happens if I miss an EMI payment?",
        children: (
            <>
                Missing EMI payments can <span className="font-bold">hurt your CIBIL score</span>, incur <span
                className="font-bold">late fees</span>, and lead to <span className="font-bold">loan default risk</span>.
                Always ensure timely payments.
            </>
        ),
    },
    {
        header: "Can I use an EMI Calculator for multiple loan comparisons?",
        children: (
            <>
                Yes! An EMI Calculator helps you compare <span
                className="font-bold">different banks&rsquo; loan offers</span>
                , check <span className="font-bold">loan affordability</span>, and select the best EMI option.
            </>
        ),
    },
    {
        header: "Is EMI calculation different for Home Loan and Car Loan?",
        children: (
            <>
                The EMI formula is the same, but <span className="font-bold">interest rates & tenure differ</span>. Home
                loans have longer tenure (20-30 years) and lower interest rates, while car loans have shorter tenure
                (5-7 years) and higher rates.
            </>
        ),
    },
    {
        header: "How much EMI can I afford?",
        children: (
            <>
                Your <span className="font-bold">monthly EMI should not exceed 40% of your monthly income</span>. Use an
                EMI Calculator to check affordability before taking a loan.
            </>
        ),
    },
    {
        header: "Is EMI the same every month?",
        children: (
            <>
                Yes, EMI remains constant in a <span className="font-bold">fixed-rate loan</span>. However, in <span
                className="font-bold">floating-rate loans</span>, EMI may change based on interest rate fluctuations.
            </>
        ),
    },
];


export default function FAQ() {
    return (
        <>
            <SidebarLayout>
                <div className="max-w-5xl mx-auto p-6">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-6">
                        Frequently Asked Questions (FAQs)
                    </h1>

                    <Accordion
                        items={faqs}
                        variant="modern"
                        iconPosition="right"
                        className="mt-4"
                        maxWidth="full"
                    />
                </div>
            </SidebarLayout>
        </>

    );
}
