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
            left: "center",
        },
        series: [
            {
                name: "EMI Breakdown",
                type: "pie",
                radius: ["40%", "70%"],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: "#fff",
                    borderWidth: 2,
                },
                label: {
                    show: false,
                    position: "center",
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 15,
                        fontWeight: "bold",
                    },
                },
                labelLine: {
                    show: false,
                },
                data: [
                    { name: "Total Principal", value: data.totalPayment - data.totalInterest, itemStyle: { color: "#42A5F5" } }, // Blue
                    { name: "Total Interest", value: data.totalInterest, itemStyle: { color: "#EF5350" } }, // Red
                ],
            },
        ],
    };

    const barOption = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross",
            },
        },
        grid: {
            right: "20%",
        },
        legend: {
            bottom: 0,
            data: ["Principal", "Interest", "Balance"],
        },
        xAxis: {
            type: "category",
            data: data.schedule.map((item) => item.period),
            axisLine: {
                lineStyle: {
                    color: "#424242",
                },
            },
        },
        yAxis: [
            {
                type: "value",
                name: "Principal",
                position: "right",
                alignTicks: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#4CAF50",
                    },
                },
                axisLabel: {
                    formatter: "₹{value}",
                },
            },
            {
                type: "value",
                name: "Interest",
                position: "right",
                alignTicks: true,
                offset: 60,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#FF9800",
                    },
                },
                axisLabel: {
                    formatter: "₹{value}",
                },
            },
            {
                type: "value",
                name: "Balance",
                position: "left",
                alignTicks: false,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#03A9F4",
                    },
                },
                axisLabel: {
                    formatter: "₹{value}",
                },
            },
        ],
        series: [
            {
                name: "Principal",
                type: "bar",
                data: data.schedule.map((item) => item.principal),
                itemStyle: {
                    color: "rgba(76, 175, 80, 0.8)", // Green with transparency
                },
            },
            {
                name: "Interest",
                type: "bar",
                yAxisIndex: 1,
                data: data.schedule.map((item) => item.interest),
                itemStyle: {
                    color: "rgba(255, 152, 0, 0.8)", // Orange with transparency
                },
            },
            {
                name: "Balance",
                type: "line",
                yAxisIndex: 2,
                data: data.schedule.map((item) => item.balance),
                itemStyle: {
                    color: "#0288D1", // Deep Blue
                },
                lineStyle: {
                    width: 2,
                },
                smooth: true, // Makes the line smoother
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
