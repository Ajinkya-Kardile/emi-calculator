export interface FdInputs {
    principal: number;
    rate: number;
    tenure: number;
    tenureUnit: "months" | "years";
    frequency: "Monthly" | "Quarterly" | "Annually" | "At Maturity";
}

export const calculateFd = ({ principal, rate, tenure, tenureUnit, frequency }: FdInputs) => {
    const t = tenureUnit === "months" ? tenure / 12 : tenure; // Convert to years
    const r = rate / 100;

    if (frequency === "At Maturity") {
        const interest = principal * r * t;
        return {
            maturityAmount: principal + interest,
            interestEarned: interest,
        };
    }

    const n = frequency === "Monthly" ? 12 : frequency === "Quarterly" ? 4 : 1;
    const maturityAmount = principal * Math.pow(1 + r / n, n * t);
    const interestEarned = maturityAmount - principal;

    return { maturityAmount, interestEarned };
};