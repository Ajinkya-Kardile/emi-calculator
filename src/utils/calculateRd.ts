export interface RdInput {
    monthlyDeposit: number;
    rate: number;
    tenure: number;
    tenureUnit: "months" | "years";
    compoundingFrequency: "Monthly" | "Quarterly";
}

export interface RdOutput {
    maturityAmount: number;
    interestEarned: number;
    totalDeposits: number;
}

export function calculateRd(input: RdInput): RdOutput {
    const { monthlyDeposit, rate, tenure, tenureUnit, compoundingFrequency } = input;

    // Convert tenure to months if it's in years
    const tenureInMonths = tenureUnit === "years" ? tenure * 12 : tenure;

    // Calculate total deposits
    const totalDeposits = monthlyDeposit * tenureInMonths;

    // Convert annual rate to periodic rate based on compounding frequency
    const periodsPerYear = compoundingFrequency === "Monthly" ? 12 : 4;
    const periodicRate = rate / (periodsPerYear * 100);

    // Calculate maturity amount using RD formula
    let maturityAmount = 0;
    for (let i = 1; i <= tenureInMonths; i++) {
        const monthsRemaining = tenureInMonths - i + 1;
        const compoundingPeriods = monthsRemaining / (12 / periodsPerYear);
        maturityAmount += monthlyDeposit * Math.pow(1 + periodicRate, compoundingPeriods);
    }

    // Round to 2 decimal places
    maturityAmount = parseFloat(maturityAmount.toFixed(2));
    const interestEarned = parseFloat((maturityAmount - totalDeposits).toFixed(2));

    return {
        maturityAmount,
        interestEarned,
        totalDeposits
    };
}