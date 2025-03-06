import {BarChart, Bar, Line, XAxis, YAxis, Tooltip, LineChart, ResponsiveContainer} from "recharts";

export default function EmiChart({data}: { data: any }) {
    return (
        <div className="w-full bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">EMI Analysis</h2>
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
    );
}
