export default function CreditCardEMIInfo() {
    return (
        <div className="w-full mx-auto m-4 p-6 bg-white dark:bg-gray-900 rounded-lg">
            <h1 className="text-3xl font-bold text-center text-blue-900 dark:text-blue-400 mb-6">
                Credit Card EMI Calculator – Convert Your Transactions into Easy EMIs
            </h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-3">What is a Credit Card EMI?</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    A <strong>Credit Card EMI</strong> allows you to convert high-value purchases into affordable
                    monthly installments.
                    Instead of paying the full amount upfront, you can break it down into EMIs with interest applied.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                    Use our <strong>Credit Card EMI Calculator</strong> to estimate your monthly payments.
                    Enter your <strong>transaction amount, interest rate, and tenure</strong> to calculate the EMI
                    accurately.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-3">How Does Credit Card EMI Work?</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Credit card issuers offer EMI conversion on eligible purchases, allowing you to repay in fixed
                    installments over a set period.
                    The tenure typically ranges from <strong>3 to 24 months</strong>, with interest charges varying
                    based on the bank and offer.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                    Some banks offer <strong>zero-interest EMIs</strong> or <strong>discounted interest
                    rates</strong> on select transactions.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Credit Card EMI Calculation Formula</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-2">The EMI for a credit card transaction is calculated using this
                    formula:</p>
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
                    <li><strong>P</strong> = Transaction Amount</li>
                    <li><strong>R</strong> = Monthly Interest Rate (Annual Rate / 12 / 100)</li>
                    <li><strong>N</strong> = Tenure in Months</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Factors Affecting Credit Card EMI</h2>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li><strong>Transaction Amount</strong> – Higher amounts lead to higher EMIs.</li>
                    <li><strong>Interest Rate</strong> – Varies based on the bank and EMI offer.</li>
                    <li><strong>Tenure</strong> – Longer tenure reduces EMI but increases total interest paid.</li>
                    <li><strong>Processing Fees</strong> – Some banks charge a nominal processing fee for EMI
                        conversion.
                    </li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Benefits of Credit Card EMI</h2>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li><strong>Affordable Payments</strong> – Break large purchases into smaller, manageable EMIs.</li>
                    <li><strong>Lower Interest Rates</strong> – Some EMI plans have lower interest compared to regular
                        credit card dues.
                    </li>
                    <li><strong>Zero-Cost EMI</strong> – Many brands offer no-cost EMI on select transactions.</li>
                    <li><strong>Flexible Tenure</strong> – Choose from 3 to 24 months based on your preference.</li>
                    <li><strong>No Credit Impact</strong> – EMI conversion does not affect your credit score if paid on
                        time.
                    </li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-3">How to Convert Purchases into Credit Card
                    EMI?</h2>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Check if your purchase is eligible for EMI conversion.</li>
                    <li>Contact your bank or use the mobile app to opt for EMI.</li>
                    <li>Select the tenure and confirm the applicable interest rate.</li>
                    <li>Review the EMI details and agree to the terms.</li>
                    <li>EMI gets reflected in your next credit card statement.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Why Use a Credit Card EMI Calculator?</h2>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li><strong>Quick & Accurate</strong> – Get precise EMI calculations instantly.</li>
                    <li><strong>Budget Planning</strong> – Helps you manage your finances better.</li>
                    <li><strong>Compare EMI Plans</strong> – Check different tenures and interest rates.</li>
                    <li><strong>Avoid Late Fees</strong> – Plan your repayments efficiently.</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                    Use our <strong>Credit Card EMI Calculator</strong> now to make informed financial decisions!
                </p>
            </section>
        </div>
    );
}
