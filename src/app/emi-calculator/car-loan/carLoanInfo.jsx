import { Accordion } from '@/components/Accordion';

export default function CarLoanInfo() {
    const accordionItems = [
        {
            header: 'What is a Car Loan EMI?',
            children: (
                <>
                    <p>
                        A <strong>Car Loan EMI (Equated Monthly Installment)</strong> is a fixed amount you pay every month
                        to repay your car loan. It includes both the <strong>principal</strong> (loan amount) and the
                        <strong> interest</strong> (cost of borrowing). The EMI amount remains constant throughout the
                        tenure.
                    </p>
                    <p className="mt-3">
                        You can use our <strong>Car Loan EMI Calculator</strong> to determine your monthly payments instantly.
                        Just enter the <strong>loan amount, interest rate, and tenure</strong> to get an accurate EMI estimate.
                    </p>
                </>
            ),
        },
        {
            header: 'How Does a Car Loan Work?',
            children: (
                <>
                    <p>
                        A car loan is a secured loan where the purchased vehicle serves as collateral. The lender provides
                        the loan amount, and the borrower repays it in EMIs over a fixed tenure. If the borrower defaults, the
                        lender has the right to repossess the vehicle.
                    </p>
                    <p className="mt-3">
                        Most banks and financial institutions offer car loans with flexible repayment options and
                        competitive interest rates, making it easier to own your dream car.
                    </p>
                </>
            ),
        },
        {
            header: 'Car Loan EMI Calculation Formula',
            children: (
                <>
                    <p className="mb-2">
                        The EMI for a car loan is calculated using this formula:
                    </p>
                    <div className="p-6 rounded-lg text-gray-900 dark:text-gray-100 text-lg bg-gray-100 dark:bg-gray-800">
                        <strong>EMI = </strong>
                        <div className="inline-block align-middle">
                            <div className="border-b-2 border-gray-900 dark:border-gray-300 pb-1 px-2">
                                P × R × (1 + R)<sup>N</sup>
                            </div>
                            <div className="pt-1">(1 + R)<sup>N</sup> – 1</div>
                        </div>
                    </div>
                    <ul className="list-disc list-inside mt-3">
                        <li><strong>P</strong> = Principal Loan Amount</li>
                        <li><strong>R</strong> = Monthly Interest Rate (Annual Rate / 12 / 100)</li>
                        <li><strong>N</strong> = Loan Tenure in Months</li>
                    </ul>
                </>
            ),
        },
        {
            header: 'Factors Affecting Car Loan EMI',
            children: (
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Loan Amount</strong> – Higher loan amounts lead to higher EMIs.</li>
                    <li><strong>Interest Rate</strong> – Higher interest rates increase the EMI.</li>
                    <li><strong>Loan Tenure</strong> – Longer tenure reduces EMI but increases total interest paid.</li>
                    <li><strong>Prepayments</strong> – Making part payments can reduce the outstanding balance and lower future EMIs.</li>
                    <li><strong>Credit Score</strong> – A good credit score can help you secure lower interest rates and reduce EMI costs.</li>
                    <li><strong>Type of Loan</strong> – Fixed interest rate loans have constant EMIs, whereas floating rate loans may change over time.</li>
                </ul>
            ),
        },
        {
            header: 'Types of Car Loans',
            children: (
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>New Car Loan</strong> – For purchasing brand-new vehicles.</li>
                    <li><strong>Used Car Loan</strong> – For buying second-hand or pre-owned cars.</li>
                    <li><strong>Balloon Payment Loan</strong> – Lower EMIs initially with a lump sum payment at the end.</li>
                    <li><strong>Lease Buyout Loan</strong> – For purchasing a leased car at the end of the lease term.</li>
                </ul>
            ),
        },
        {
            header: 'How to Apply for a Car Loan?',
            children: (
                <ul className="list-disc list-inside space-y-2">
                    <li>Check your credit score to understand your eligibility.</li>
                    <li>Compare different banks and lenders for the best interest rates.</li>
                    <li>Choose the right loan amount and tenure based on your budget.</li>
                    <li>Fill out the application form online or visit a bank branch.</li>
                    <li>Submit the required documents for verification.</li>
                    <li>Once approved, sign the loan agreement and get the funds disbursed.</li>
                </ul>
            ),
        },
        {
            header: 'Documents Required for Car Loan Approval',
            children: (
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Identity Proof</strong> – Aadhaar Card, PAN Card, Passport, or Voter ID.</li>
                    <li><strong>Address Proof</strong> – Utility bills, rental agreement, or bank statement.</li>
                    <li><strong>Income Proof</strong> – Salary slips, bank statements, or income tax returns.</li>
                    <li><strong>Vehicle Documents</strong> – Car proforma invoice or dealership documents.</li>
                    <li><strong>Credit Score Report</strong> – Some lenders may check your credit score before approving the loan.</li>
                </ul>
            ),
        },
    ];

    return (
        <div className="w-full mx-auto mt-2 p-6 bg-white dark:bg-gray-900 rounded-lg">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-blue-400 mb-6">
                    Car Loan EMI Calculator – Formula, Factors & Tips
                </h2>
                <Accordion
                    items={accordionItems}
                    variant="modern"
                    iconPosition="right"
                    className="mt-4"
                    maxWidth="full"
                />
            </div>
        </div>
    );
}
