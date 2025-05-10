import { Accordion } from '@/components/Accordion';

export default function HomeLoanInfo() {
    const accordionItems = [
        {
            header: 'What is a Home Loan EMI?',
            children: (
                <>
                    <p>
                        A <strong>Home Loan EMI (Equated Monthly Installment)</strong> is a fixed monthly payment made by a borrower to repay the home loan. It includes two components: <strong>Principal</strong> (loan amount) and <strong>Interest</strong> (cost of borrowing).
                    </p>
                    <p className="mt-3">
                        Use our <strong>Home Loan EMI Calculator</strong> to estimate your monthly payments instantly. Simply enter your <strong>loan amount, interest rate, and tenure</strong> to calculate the EMI accurately.
                    </p>
                </>
            ),
        },
        {
            header: 'How Does a Home Loan Work?',
            children: (
                <>
                    <p>
                        A home loan is a secured loan where the property itself serves as collateral. The borrower repays the loan amount in EMIs over a predetermined tenure, typically ranging from <strong>10 to 30 years</strong>.
                    </p>
                    <p className="mt-3">
                        Lenders offer different interest rate types – <strong>fixed-rate</strong> (constant EMI) and <strong>floating-rate</strong> (variable EMI based on market rates).
                    </p>
                </>
            ),
        },
        {
            header: 'Home Loan EMI Calculation Formula',
            children: (
                <>
                    <p className="mb-2">The EMI for a home loan is calculated using this formula:</p>
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
            header: 'Factors Affecting Home Loan EMI',
            children: (
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Loan Amount</strong> – Higher loan amounts lead to higher EMIs.</li>
                    <li><strong>Interest Rate</strong> – Higher interest rates increase the EMI.</li>
                    <li><strong>Loan Tenure</strong> – Longer tenure reduces EMI but increases total interest paid.</li>
                    <li><strong>Credit Score</strong> – A high credit score can help you secure lower interest rates.</li>
                    <li><strong>Down Payment</strong> – A higher down payment reduces the loan amount and EMI.</li>
                </ul>
            ),
        },
        {
            header: 'Types of Home Loans',
            children: (
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Fixed-Rate Home Loan</strong> – EMI remains constant throughout the tenure.</li>
                    <li><strong>Floating-Rate Home Loan</strong> – EMI varies based on market fluctuations.</li>
                    <li><strong>Home Construction Loan</strong> – For constructing a new house.</li>
                    <li><strong>Home Improvement Loan</strong> – For renovating or upgrading an existing property.</li>
                    <li><strong>Balance Transfer Home Loan</strong> – Transfer an existing loan to a lender offering lower interest rates.</li>
                </ul>
            ),
        },
        {
            header: 'How to Apply for a Home Loan?',
            children: (
                <ul className="list-disc list-inside space-y-2">
                    <li>Check your credit score for eligibility.</li>
                    <li>Compare different banks and financial institutions.</li>
                    <li>Choose the loan amount and tenure based on affordability.</li>
                    <li>Submit required documents for verification.</li>
                    <li>Once approved, sign the loan agreement and receive the funds.</li>
                </ul>
            ),
        },
        {
            header: 'Documents Required for Home Loan Approval',
            children: (
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Identity Proof</strong> – Aadhaar Card, PAN Card, Passport, or Voter ID.</li>
                    <li><strong>Address Proof</strong> – Utility bills, rental agreement, or bank statement.</li>
                    <li><strong>Income Proof</strong> – Salary slips, bank statements, or income tax returns.</li>
                    <li><strong>Property Documents</strong> – Sale agreement, title deed, and builder NOC.</li>
                    <li><strong>Credit Score Report</strong> – Some lenders require a credit check before loan approval.</li>
                </ul>
            ),
        },
        {
            header: 'Why Use a Home Loan EMI Calculator?',
            children: (
                <>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Quick & Accurate</strong> – Get precise EMI calculations instantly.</li>
                        <li><strong>Better Financial Planning</strong> – Helps you budget monthly expenses efficiently.</li>
                        <li><strong>Compare Loan Offers</strong> – Check different loan amounts, interest rates, and tenures.</li>
                        <li><strong>Plan for Prepayments</strong> – Understand how prepayments can reduce loan costs.</li>
                    </ul>
                    <p className="mt-3">
                        Use our <strong>Home Loan EMI Calculator</strong> now and make an informed financial decision!
                    </p>
                </>
            ),
        },
    ];

    return (
        <div className="w-full mx-auto mt-2 p-6 bg-white dark:bg-gray-900 rounded-lg">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-blue-950 dark:text-blue-400 mb-6">
                    Home Loan EMI Calculator – Calculation, Factors & Tips
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
