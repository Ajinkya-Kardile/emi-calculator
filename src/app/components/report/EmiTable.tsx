import React from "react";
import {EmiResult} from "@/types/emiTypes";
import {generatePDF} from "@/utils/generatePdf";

const EmiTable: React.FC<EmiResult> = ({schedule}) => {
    return (
        <div className="overflow-x-auto mt-6">
            <h2 className="text-xl font-semibold mb-4">EMI Payment Schedule</h2>
            <button
                onClick={() => generatePDF(schedule)}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                Download PDF
            </button>
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
