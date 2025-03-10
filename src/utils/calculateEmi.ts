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
    const currentDate = new Date(startDate);


    for (let i = 0; i < tenureInMonths; i++) {
        const interest = balance * monthlyRate;
        const principal = emi - interest;
        balance -= principal;
        totalInterest += interest;


        const month = currentDate.toLocaleString("default", {month: "short"});
        const year = currentDate.getFullYear();
        const period = `${month} ${year}`;
        schedule.push({
            period,
            month,
            year,
            principal: Math.round(principal),
            interest: Math.round(interest),
            totalPayment: Math.round(emi),
            balance: Math.round(balance),
            loanPaidToDate: (loanAmount - balance) / loanAmount * 100,
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
