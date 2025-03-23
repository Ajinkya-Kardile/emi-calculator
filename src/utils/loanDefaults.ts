export const loanDefaults = {
    home: {
        loanAmount: 500000,
        interestRate: 7.5,
        tenure: 5,
        tenureType: "years" as "months" | "years",
    },
    personal: {
        loanAmount: 200000,
        interestRate: 12.0,
        tenure: 3,
        tenureType: "years" as "months" | "years",
    },
    car: {
        loanAmount: 800000,
        interestRate: 9.0,
        tenure: 5,
        tenureType: "years" as "months" | "years",
    },
    creditCard: {
        loanAmount: 50000,
        interestRate: 15.0,
        tenure: 12,
        tenureType: "years" as "months" | "years",
    }
};