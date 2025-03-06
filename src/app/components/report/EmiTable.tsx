import React from "react";

interface EmiSchedule {
    period: string;
    principal: number;
    interest: number;
    totalPayment: number;
    balance: number;
    loanPaidToDate: number;
}

interface EmiTableProps {
    schedule: EmiSchedule[];
}

const EmiTable: React.FC<EmiTableProps> = ({ schedule }) => {
    return (
        <div className="overflow-x-auto mt-6">
            <h2 className="text-xl font-semibold mb-4">EMI Payment Schedule</h2>
            <table className="min-w-full border border-gray-300 shadow-lg">
                <thead className="bg-blue-500 text-white">
                <tr>
                    <th className="px-4 py-2 border">Period</th>
                    <th className="px-4 py-2 border">Principal</th>
                    <th className="px-4 py-2 border">Interest</th>
                    <th className="px-4 py-2 border">Total Payment</th>
                    <th className="px-4 py-2 border">Balance</th>
                    <th className="px-4 py-2 border">Loan Paid to Date</th>
                </tr>
                </thead>
                <tbody>
                {schedule.map((row, index) => (
                    <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                    >
                        <td className="px-4 py-2 border">{row.period}</td>
                        <td className="px-4 py-2 border">₹{row.principal.toFixed(2)}</td>
                        <td className="px-4 py-2 border">₹{row.interest.toFixed(2)}</td>
                        <td className="px-4 py-2 border">₹{row.totalPayment.toFixed(2)}</td>
                        <td className="px-4 py-2 border">₹{row.balance.toFixed(2)}</td>
                        <td className="px-4 py-2 border">₹{row.loanPaidToDate.toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmiTable;
