import React, {useState} from "react";
import SidebarLayout from "@/components/layout/sidebarLayout";


const faqs = [
    {
        question: "What is an EMI?",
        answer: (
            <>
                EMI (Equated Monthly Installment) is a fixed monthly payment a borrower makes to repay a loan. It includes both principal and interest components.
            </>
        ),
    },
    {
        question: "How is EMI calculated?",
        answer: (
            <>
                The EMI calculation formula is:
                <br />
                <br />
                <code>EMI = [P × R × (1 + R) ^ N] / [(1 + R) ^ N – 1]</code>
                <br />
                <br />
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
        question: "What factors affect my loan EMI?",
        answer: (
            <>
                Several factors influence your EMI:
                <ul className="list-disc list-inside">
                    <li><span className="font-bold">Loan Amount</span> – Higher loan amounts increase EMI.</li>
                    <li><span className="font-bold">Interest Rate</span> – Higher interest rates mean higher EMI.</li>
                    <li><span className="font-bold">Loan Tenure</span> – Longer tenure reduces EMI but increases total interest paid.</li>
                    <li><span className="font-bold">Processing Fees</span> – Some banks add fees that may impact EMI.</li>
                    <li><span className="font-bold">Prepayment Options</span> – Partial payments can lower EMI in the long run.</li>
                </ul>
            </>
        ),
    },
    {
        question: "Why should I use an EMI Calculator?",
        answer: (
            <>
                An EMI Calculator helps in quick and accurate loan calculations. It allows you to compare different loan options, plan finances, and avoid surprises. You can calculate Home Loan EMI, Personal Loan EMI, Car Loan EMI, and Business Loan EMI effortlessly.
            </>
        ),
    },
    {
        question: "What types of loans can I calculate EMI for?",
        answer: (
            <>
                You can calculate EMI for various loan types, including:
                <ul className="list-disc list-inside">
                    <li><span className="font-bold">Home Loan EMI</span> – For buying a house.</li>
                    <li><span className="font-bold">Personal Loan EMI</span> – For personal expenses.</li>
                    <li><span className="font-bold">Car Loan EMI</span> – For vehicle purchase.</li>
                    <li><span className="font-bold">Education Loan EMI</span> – For student tuition fees.</li>
                    <li><span className="font-bold">Business Loan EMI</span> – For business expansion or investment.</li>
                </ul>
            </>
        ),
    },
    {
        question: "How can I reduce my EMI amount?",
        answer: (
            <>
                Yes! You can lower your EMI by:
                <ul className="list-disc list-inside">
                    <li><span className="font-bold">Choosing a longer loan tenure</span> – This reduces EMI but increases total interest.</li>
                    <li><span className="font-bold">Paying a higher down payment</span> – Reduces loan amount and EMI.</li>
                    <li><span className="font-bold">Negotiating a lower interest rate</span> – Helps in lowering EMI.</li>
                    <li><span className="font-bold">Making part-prepayments</span> – Reduces outstanding loan amount and future EMIs.</li>
                </ul>
            </>
        ),
    },
    {
        question: "What is the impact of interest rates on EMI?",
        answer: (
            <>
                Higher interest rates increase EMI payments, while lower interest rates reduce them. It&rsquo;s essential to compare interest rates from different banks before choosing a loan.
            </>
        ),
    },
    {
        question: "Does my CIBIL score affect my EMI?",
        answer: (
            <>
                Yes, a higher <span className="font-bold">CIBIL score (750+)</span> can help you get a <span className="font-bold">lower interest rate</span>, reducing your EMI. A lower score may result in <span className="font-bold">higher EMI and loan rejection</span>.
            </>
        ),
    },
    {
        question: "Can I prepay my loan to reduce EMI?",
        answer: (
            <>
                Yes, you can prepay part of your loan to reduce EMI. Many banks allow <span className="font-bold">prepayment without extra charges</span>, but some may have a <span className="font-bold">prepayment penalty</span>.
            </>
        ),
    },
    {
        question: "What is a fixed vs floating interest rate for EMI?",
        answer: (
            <>
                <span className="font-bold">Fixed Interest Rate</span> – EMI remains constant throughout the tenure.
                <br />
                <br />
                <span className="font-bold">Floating Interest Rate</span> – EMI varies based on market conditions. Lower initial rates but can change over time.
            </>
        ),
    },
    {
        question: "How does loan tenure affect EMI?",
        answer: (
            <>
                <span className="font-bold">Shorter tenure</span> – Higher EMI but lower total interest paid.
                <br />
                <br />
                <span className="font-bold">Longer tenure</span> – Lower EMI but higher total interest cost.
            </>
        ),
    },
    {
        question: "Are processing fees included in EMI calculation?",
        answer: (
            <>
                Processing fees are usually <span className="font-bold">not included</span> in EMI but are charged separately by banks. Some banks may deduct processing fees before disbursing the loan.
            </>
        ),
    },
    {
        question: "Can I change my EMI amount after taking a loan?",
        answer: (
            <>
                In most cases, EMI remains fixed. However, you can <span className="font-bold">refinance your loan</span> or <span className="font-bold">make prepayments</span> to reduce EMI.
            </>
        ),
    },
    {
        question: "What happens if I miss an EMI payment?",
        answer: (
            <>
                Missing EMI payments can <span className="font-bold">hurt your CIBIL score</span>, incur <span className="font-bold">late fees</span>, and lead to <span className="font-bold">loan default risk</span>. Always ensure timely payments.
            </>
        ),
    },
    {
        question: "Can I use an EMI Calculator for multiple loan comparisons?",
        answer: (
            <>
                Yes! An EMI Calculator helps you compare <span className="font-bold">different banks&rsquo; loan offers</span>
                , check <span className="font-bold">loan affordability</span>, and select the best EMI option.
            </>
        ),
    },
    {
        question: "Is EMI calculation different for Home Loan and Car Loan?",
        answer: (
            <>
                The EMI formula is the same, but <span className="font-bold">interest rates & tenure differ</span>. Home loans have longer tenure (20-30 years) and lower interest rates, while car loans have shorter tenure (5-7 years) and higher rates.
            </>
        ),
    },
    {
        question: "How much EMI can I afford?",
        answer: (
            <>
                Your <span className="font-bold">monthly EMI should not exceed 40% of your monthly income</span>. Use an EMI Calculator to check affordability before taking a loan.
            </>
        ),
    },
    {
        question: "Is EMI the same every month?",
        answer: (
            <>
                Yes, EMI remains constant in a <span className="font-bold">fixed-rate loan</span>. However, in <span className="font-bold">floating-rate loans</span>, EMI may change based on interest rate fluctuations.
            </>
        ),
    },
];


export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <SidebarLayout>
            <div className="max-w-5xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Frequently Asked Questions (FAQs)
                </h1>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-300 rounded-lg shadow-md">
                            <button
                                className="w-full text-left p-4 text-lg font-semibold flex justify-between items-center text-blue-800 hover:bg-blue-50 transition-all duration-200"
                                onClick={() => toggleAccordion(index)}
                            >
                                {faq.question}
                                <span className="text-xl font-bold">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? "p-4" : "max-h-0 p-0"
                                } text-gray-700 border-t border-gray-300`}
                            >
                                    {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SidebarLayout>
    );
}
