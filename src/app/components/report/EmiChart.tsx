"use client";
import {BarChart, Bar, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend} from "recharts";
import {EmiResult} from "../../types/emiTypes";

const COLORS = ["#4CAF50", "#FF9800"];

export default function EmiChart({data}: { data: EmiResult }) {
    const pieData = [
        {name: "Total Principal", value: data.totalPayment - data.totalInterest},
        {name: "Total Interest", value: data.totalInterest}
    ];

    return (
        <div className="w-full bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">EMI Analysis</h2>

            {/* Pie Chart */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 text-center mb-2">Principal vs Interest</h3>
                <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({name, percent}) => `${name} (${(percent * 100).toFixed(0)}%)`}
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                            ))}
                        </Pie>
                        <Tooltip/>
                        <Legend/>
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div>
                <h3 className="text-lg font-semibold text-gray-700 text-center mb-2">EMI Breakdown per Period</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data.schedule}>
                        <XAxis dataKey="period"/>
                        <YAxis/>
                        <Tooltip/>
                        <Bar dataKey="principal" fill="#4CAF50"/>
                        <Bar dataKey="interest" fill="#FF9800"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
