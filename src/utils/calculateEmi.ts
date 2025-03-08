export function calculateEmi(
    loanAmount: number,
    interestRate: number,
    tenure: number,
    tenureType: "months" | "years",
    startDate: string
) {
    const tenureInMonths = tenureType === "years" ? tenure * 12 : tenure;
    const monthlyRate = interestRate / 12 / 100;
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureInMonths)) /
        (Math.pow(1 + monthlyRate, tenureInMonths) - 1);

    let balance = loanAmount;
    const schedule = [];
    let totalInterest = 0;
    let currentDate = new Date(startDate);
    let lastYear = currentDate.getFullYear();

    for (let i = 0; i < tenureInMonths; i++) {
        const interest = balance * monthlyRate;
        const principal = emi - interest;
        balance -= principal;
        totalInterest += interest;

        let period;
        let month = currentDate.toLocaleString("default", {month: "short"});
        let year = currentDate.getFullYear();
        period = `${month} ${year}`;
        schedule.push({
            period,
            month,
            year,
            principal: Math.round(principal),
            interest: Math.round(interest),
            totalPayment: Math.round(emi),
            balance: Math.round(balance),
            loanPaidToDate: Math.round(loanAmount - balance),
        });

        currentDate.setMonth(currentDate.getMonth() + 1);
    }

    return {
        emi: Math.round(emi),
        totalPayment: Math.round(emi * tenureInMonths),
        totalInterest: Math.round(totalInterest),
        schedule,
    };
}
