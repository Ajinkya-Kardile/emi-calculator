export default function HomeLoanInfo() {
    return (
        <div className="w-full mx-auto mt-4 p-6 bg-white rounded-lg">
            <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">
                Home Loan EMI Calculator – Calculation, Factors & Tips
            </h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">What is a Home Loan EMI?</h2>
                <p className="text-gray-700">
                    A <strong>Home Loan EMI (Equated Monthly Installment)</strong> is a fixed monthly payment made by a borrower to repay the home loan.
                    It includes two components: <strong>Principal</strong> (loan amount) and <strong>Interest</strong> (cost of borrowing).
                </p>
                <p className="text-gray-700 mt-3">
                    Use our <strong>Home Loan EMI Calculator</strong> to estimate your monthly payments instantly.
                    Simply enter your <strong>loan amount, interest rate, and tenure</strong> to calculate the EMI accurately.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">How Does a Home Loan Work?</h2>
                <p className="text-gray-700">
                    A home loan is a secured loan where the property itself serves as collateral.
                    The borrower repays the loan amount in EMIs over a predetermined tenure, typically ranging from <strong>10 to 30 years</strong>.
                </p>
                <p className="text-gray-700 mt-3">
                    Lenders offer different interest rate types – <strong>fixed-rate</strong> (constant EMI) and <strong>floating-rate</strong> (variable EMI based on market rates).
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">Home Loan EMI Calculation Formula</h2>
                <p className="text-gray-700 mb-2">The EMI for a home loan is calculated using this formula:</p>
                <div className="p-6 rounded-lg text-gray-900 text-lg">
                    <strong>EMI = </strong>
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
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">Factors Affecting Home Loan EMI</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Loan Amount</strong> – Higher loan amounts lead to higher EMIs.</li>
                    <li><strong>Interest Rate</strong> – Higher interest rates increase the EMI.</li>
                    <li><strong>Loan Tenure</strong> – Longer tenure reduces EMI but increases total interest paid.</li>
                    <li><strong>Credit Score</strong> – A high credit score can help you secure lower interest rates.</li>
                    <li><strong>Down Payment</strong> – A higher down payment reduces the loan amount and EMI.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">Types of Home Loans</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Fixed-Rate Home Loan</strong> – EMI remains constant throughout the tenure.</li>
                    <li><strong>Floating-Rate Home Loan</strong> – EMI varies based on market fluctuations.</li>
                    <li><strong>Home Construction Loan</strong> – For constructing a new house.</li>
                    <li><strong>Home Improvement Loan</strong> – For renovating or upgrading an existing property.</li>
                    <li><strong>Balance Transfer Home Loan</strong> – Transfer an existing loan to a lender offering lower interest rates.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">How to Apply for a Home Loan?</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Check your credit score for eligibility.</li>
                    <li>Compare different banks and financial institutions.</li>
                    <li>Choose the loan amount and tenure based on affordability.</li>
                    <li>Submit required documents for verification.</li>
                    <li>Once approved, sign the loan agreement and receive the funds.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">Documents Required for Home Loan Approval</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Identity Proof</strong> – Aadhaar Card, PAN Card, Passport, or Voter ID.</li>
                    <li><strong>Address Proof</strong> – Utility bills, rental agreement, or bank statement.</li>
                    <li><strong>Income Proof</strong> – Salary slips, bank statements, or income tax returns.</li>
                    <li><strong>Property Documents</strong> – Sale agreement, title deed, and builder NOC.</li>
                    <li><strong>Credit Score Report</strong> – Some lenders require a credit check before loan approval.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">Why Use a Home Loan EMI Calculator?</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Quick & Accurate</strong> – Get precise EMI calculations instantly.</li>
                    <li><strong>Better Financial Planning</strong> – Helps you budget monthly expenses efficiently.</li>
                    <li><strong>Compare Loan Offers</strong> – Check different loan amounts, interest rates, and tenures.</li>
                    <li><strong>Plan for Prepayments</strong> – Understand how prepayments can reduce loan costs.</li>
                </ul>
                <p className="text-gray-700 mt-3">
                    Use our <strong>Home Loan EMI Calculator</strong> now and make an informed financial decision!
                </p>
            </section>
        </div>
    );
}
