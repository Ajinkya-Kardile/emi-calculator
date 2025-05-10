import {Accordion} from '@/components/Accordion';

export default function EMIInfo() {
    const accordionItems = [
        {
            header: 'What is an EMI?',
            children: (
                <>
                    <p>
                        An <strong>EMI (Equated Monthly Installment)</strong> is a fixed monthly payment
                        that a borrower makes to a lender while repaying a loan. It includes two main
                        components: <strong>principal</strong> and <strong>interest</strong>.
                    </p>
                    <p className="mt-3">
                        Whether it’s a <strong>Home Loan, Personal Loan, Car Loan, or Education Loan</strong>,
                        the EMI remains constant throughout the tenure, based on <strong>loan amount, interest rate, and
                        tenure</strong>.
                    </p>
                    <p className="mt-3">
                        Use an <strong>EMI Calculator</strong> to estimate your monthly payments and plan your
                        <strong> loan repayment</strong> accordingly for better <strong>financial planning</strong>.
                    </p>
                    <p className="mt-3">
                        Our <strong>Online EMI Calculator</strong> gives you an accurate breakdown of
                        your <strong>monthly payments, interest amount, and total repayment</strong>.
                    </p>
                </>
            ),
        },
        {
            header: 'EMI Calculation Formula',
            children: (
                <>
                    <p>The EMI for a loan is calculated using the formula:</p>
                    <div
                        className="my-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-lg text-gray-900 dark:text-gray-100">
                        <strong>EMI = </strong>
                        <div className="inline-block align-middle">
                            <div className="border-b-2 border-gray-900 dark:border-gray-300 pb-1 px-2">
                                P × R × (1 + R)<sup>N</sup>
                            </div>
                            <div className="pt-1">(1 + R)<sup>N</sup> – 1</div>
                        </div>
                    </div>
                    <ul className="list-disc list-inside mt-3 space-y-1">
                        <li><strong>P</strong> = Principal Loan Amount</li>
                        <li><strong>R</strong> = Monthly Interest Rate (Annual Rate / 12 / 100)</li>
                        <li><strong>N</strong> = Loan Tenure in Months</li>
                    </ul>
                </>
            ),
        },
        {
            header: 'Types of EMI Calculators',
            children: (
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Home Loan EMI Calculator</strong> – Calculate monthly payments for home loans.</li>
                    <li><strong>Personal Loan EMI Calculator</strong> – Check EMI for personal loans.</li>
                    <li><strong>Car Loan EMI Calculator</strong> – Find your monthly car loan payments.</li>
                    <li><strong>Business Loan EMI Calculator</strong> – Plan finances for business loans.</li>
                </ul>
            ),
        },
        {
            header: 'Factors Affecting Loan EMI',
            children: (
                <>
                    <p className="mb-3">
                        Key factors that influence your <strong>Equated Monthly Installment (EMI)</strong>:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Loan Amount</strong> – Higher amounts increase your EMI.</li>
                        <li><strong>Interest Rate</strong> – Higher rates lead to higher EMIs.</li>
                        <li><strong>Loan Tenure</strong> – Longer tenure lowers EMI but increases total interest.</li>
                        <li><strong>Type of Interest</strong> – Fixed vs floating rate affects stability of EMI.</li>
                        <li><strong>Prepayments</strong> – Extra payments reduce outstanding amount and EMIs.</li>
                    </ul>
                    <p className="mt-3">
                        Try our <strong>Online EMI Calculator</strong> to estimate your EMIs in seconds!
                    </p>
                </>
            ),
        },
        {
            header: 'Benefits of Using an EMI Calculator',
            children: (
                <>
                    <p className="mb-3">
                        An <strong>EMI Calculator</strong> helps borrowers plan better before applying for any loan:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Quick & Accurate</strong> – Avoid manual errors in calculations.</li>
                        <li><strong>Compare Loans</strong> – Experiment with loan amounts, rates, and tenures.</li>
                        <li><strong>Smart Planning</strong> – Align your EMI with your monthly budget.</li>
                        <li><strong>No Surprises</strong> – Understand total cost upfront.</li>
                        <li><strong>Versatile</strong> – Works for home, car, business, and personal loans.</li>
                    </ul>
                    <p className="mt-3">
                        Try our <strong>Online Loan EMI Calculator</strong> now and make smarter financial decisions.
                    </p>
                </>
            ),
        },
    ];

    return (
        <div className="w-full mx-auto mt-2 p-6 bg-white dark:bg-gray-900 rounded-lg">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-3xl font-bold text-center text-blue-950 dark:text-blue-400 mb-6">
                    Loan EMI Calculator - Everything You Need to Know
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
