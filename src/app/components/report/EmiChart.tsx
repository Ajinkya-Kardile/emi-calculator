"use client";
import React from "react";
import ReactECharts from "echarts-for-react";
import { EmiResult } from "@/types/emiTypes";

export default function EmiChart({ data }: { data: EmiResult }) {
    const pieOption = {
        tooltip: {
            trigger: "item",
            formatter: "{b}: {c} ({d}%)",
        },
        legend: {
            bottom: 0,
            left: 'center'
        },
        series: [
            {
                name: "EMI Breakdown",
                type: "pie",
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 15,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { name: "Total Principal", value: data.totalPayment - data.totalInterest },
                    { name: "Total Interest", value: data.totalInterest },
                ],
            },
        ],
    };

    const barOption = {
        tooltip: {
            trigger: "axis",
        },
        legend: {
            bottom: 0,
        },
        xAxis: {
            type: "category",
            data: data.schedule.map((item) => item.period),
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                name: "Principal",
                type: "bar",
                data: data.schedule.map((item) => item.principal),
                itemStyle: { color: "#4CAF50" },
            },
            {
                name: "Interest",
                type: "bar",
                data: data.schedule.map((item) => item.interest),
                itemStyle: { color: "#FF9800" },
            },
        ],
    };

    return (
        <div className="w-full bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">EMI Analysis</h2>

            {/* Responsive Layout */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Pie Chart Section */}
                <div className="w-full lg:w-1/3 flex flex-col items-center">
                    <h3 className="text-lg font-semibold text-gray-700 text-center mb-2">Principal vs Interest</h3>
                    <div className="w-[300px] max-w-full">
                        <ReactECharts option={pieOption} style={{ height: "300px", width: "100%" }} />
                    </div>
                </div>

                {/* Bar Chart Section */}
                <div className="w-full lg:w-2/3">
                    <h3 className="text-lg font-semibold text-gray-700 text-center mb-2">EMI Breakdown per Period</h3>
                    <ReactECharts option={barOption} style={{ height: "350px", width: "100%" }} />
                </div>
            </div>
        </div>
    );
}
