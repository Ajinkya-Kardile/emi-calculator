export interface EmiResult {
    emi: number;
    totalPayment: number;
    totalInterest: number;
    schedule: EmiSchedule[];
}



export interface EmiSchedule {
    period: string;
    principal: number;
    interest: number;
    totalPayment: number;
    balance: number;
    loanPaidToDate: number;
}
