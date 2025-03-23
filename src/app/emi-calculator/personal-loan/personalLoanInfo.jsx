export default function PersonalLoanInfo() {
    return (
        <div className="w-full mx-auto m-4 p-6 bg-white dark:bg-gray-900 rounded-lg">
            <h1 className="text-3xl font-bold text-center text-blue-900 dark:text-blue-400 mb-6">
                Personal Loan EMI Calculator - Everything You Need to Know
            </h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-3">What is a Personal Loan EMI?</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    A <strong>Personal Loan EMI (Equated Monthly Installment)</strong> is a fixed monthly amount you pay
                    to repay your personal loan.
                    It consists of two components: <strong>principal</strong> (the loan amount)
                    and <strong>interest</strong> (the cost of borrowing).
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                    Use our <strong>Personal Loan EMI Calculator</strong> to get instant estimates on your monthly
                    payments.
                    Simply enter your <strong>loan amount, interest rate, and tenure</strong> to determine the EMI.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-3">How Does a Personal Loan Work?</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    A personal loan is an <strong>unsecured loan</strong>, meaning you don’t need to provide collateral.
                    Banks and financial institutions offer personal loans based on your <strong>income, credit score,
                    and repayment ability</strong>.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                    The borrowed amount is repaid in fixed EMIs over a predetermined period, typically ranging
                    from <strong>12 to 60 months</strong>.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Personal Loan EMI Calculation Formula</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-2">The EMI for a personal loan is calculated using this formula:</p>
                <div className="p-6 rounded-lg text-gray-900 dark:text-gray-100 text-lg">
                    <strong>EMI = </strong>
                    <div className="inline-block align-middle">
                        <div className="border-b-2 border-gray-900 dark:border-gray-300 pb-1 px-2">
                            P × R × (1 + R)<sup>N</sup>
                        </div>
                        <div className="pt-1">(1 + R)<sup>N</sup> – 1</div>
                    </div>
                </div>
                <ul className="list-disc list-inside mt-3 text-gray-700 dark:text-gray-300">
                    <li><strong>P</strong> = Principal Loan Amount</li>
                    <li><strong>R</strong> = Monthly Interest Rate (Annual Rate / 12 / 100)</li>
                    <li><strong>N</strong> = Loan Tenure in Months</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Factors Affecting Personal Loan EMI</h2>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li><strong>Loan Amount</strong> – Higher loan amounts lead to higher EMIs.</li>
                    <li><strong>Interest Rate</strong> – Higher interest rates increase the EMI.</li>
                    <li><strong>Loan Tenure</strong> – Longer tenures reduce EMIs but increase the total interest paid.
                    </li>
                    <li><strong>Credit Score</strong> – A higher credit score helps secure lower interest rates and
                        reduces EMI costs.
                    </li>
                    <li><strong>Repayment Strategy</strong> – Prepayments and part payments can lower EMIs by reducing
                        the outstanding loan balance.
                    </li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-3">How to Reduce Your Personal Loan EMI?</h2>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li><strong>Improve Your Credit Score</strong> – A score above 750 increases approval chances and
                        fetches better interest rates.
                    </li>
                    <li><strong>Compare Multiple Lenders</strong> – Different banks offer varying interest rates, so
                        comparing can help reduce costs.
                    </li>
                    <li><strong>Opt for a Longer Tenure</strong> – Spreading the loan over a longer period reduces the
                        monthly EMI.
                    </li>
                    <li><strong>Prepay When Possible</strong> – Making part payments helps in reducing outstanding loan
                        amounts.
                    </li>
                    <li><strong>Choose the Right Loan Amount</strong> – Borrow only what you need to avoid unnecessary
                        financial burden.
                    </li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Documents Required for a Personal Loan</h2>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li><strong>Identity Proof</strong> – Aadhaar Card, PAN Card, Passport, or Voter ID.</li>
                    <li><strong>Address Proof</strong> – Utility bills, rental agreement, or bank statement.</li>
                    <li><strong>Income Proof</strong> – Salary slips, bank statements, or income tax returns.</li>
                    <li><strong>Employment Proof</strong> – Offer letter, employment certificate, or business
                        registration.
                    </li>
                    <li><strong>Credit Score Report</strong> – Lenders may check your credit history before loan
                        approval.
                    </li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Why Use a Personal Loan EMI Calculator?</h2>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li><strong>Instant & Accurate</strong> – Get precise EMI calculations instantly.</li>
                    <li><strong>Better Financial Planning</strong> – Helps you manage your monthly expenses effectively.
                    </li>
                    <li><strong>Compare Loan Offers</strong> – Check different loan amounts, interest rates, and
                        tenures.
                    </li>
                    <li><strong>No Surprises</strong> – Understand your EMI in advance to avoid financial stress.</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                    Use our <strong>Personal Loan EMI Calculator</strong> now and make an informed financial decision!
                </p>
            </section>
        </div>
    );
}
