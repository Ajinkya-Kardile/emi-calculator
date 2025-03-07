"use client";
import React from "react";
import ReactECharts from "echarts-for-react";
import { EmiResult } from "@/types/emiTypes";
import * as echarts from "echarts"; // ✅ Import echarts
import { EChartsOption } from "echarts";

export default function EmiChart({ data }: { data: EmiResult }) {
    const pieOption: EChartsOption  = {
        tooltip: {
            trigger: "item" as const,
            formatter: (params: any) => {
                return `${params.name}: ₹${params.value.toLocaleString()} (${params.percent}%)`;
            },
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

    const areaOption: EChartsOption = {
        tooltip: { trigger: "axis", axisPointer: { type: "cross" } },
        grid: { right: "20%", left: "10%", bottom: "15%" },
        legend: { bottom: 0, data: ["Principal", "Interest", "Balance", "Loan Paid to Date"] },
        xAxis: {
            type: "category",
            data: data.schedule.map((item) => item.period),
            axisLine: { lineStyle: { color: "#424242" } },
        },
        yAxis: [
            {
                type: "value",
                name: "Principal",
                position: "right",
                alignTicks: true,
                axisLine: { lineStyle: { color: "#4CAF50" } }, // Green Axis
                axisLabel: { formatter: "₹{value}" },
            },
            {
                type: "value",
                name: "Interest",
                position: "right",
                offset: 60, // Moves it right for better visibility
                alignTicks: true,
                axisLine: { lineStyle: { color: "#FF9800" } }, // Orange Axis
                axisLabel: { formatter: "₹{value}" },
            },
            {
                type: "value",
                name: "Balance",
                position: "left",
                axisLine: { lineStyle: { color: "#0288D1" } }, // Blue Axis
                axisLabel: { formatter: "₹{value}" },
            }
        ],
        series: [
            {
                name: "Principal",
                type: "line",
                yAxisIndex: 0, // ✅ Uses the first y-axis (Green)
                smooth: true,
                showSymbol: false,
                data: data.schedule.map((item) => item.principal),
                lineStyle: { width: 2, color: "#4CAF50" }, // Green
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "rgba(76, 175, 80, 0.6)" },
                        { offset: 1, color: "rgba(76, 175, 80, 0.1)" },
                    ]),
                },
            },
            {
                name: "Interest",
                type: "line",
                yAxisIndex: 1, // ✅ Uses the second y-axis (Orange)
                smooth: true,
                showSymbol: false,
                data: data.schedule.map((item) => item.interest),
                lineStyle: { width: 2, color: "#FF9800" }, // Orange
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "rgba(255, 152, 0, 0.6)" },
                        { offset: 1, color: "rgba(255, 152, 0, 0.1)" },
                    ]),
                },
            },
            {
                name: "Balance",
                type: "line",
                yAxisIndex: 2, // ✅ Uses the third y-axis (Blue)
                smooth: true,
                showSymbol: false,
                data: data.schedule.map((item) => item.balance),
                lineStyle: { width: 2, color: "#0288D1" }, // Blue
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "rgba(2, 136, 209, 0.6)" },
                        { offset: 1, color: "rgba(2, 136, 209, 0.1)" },
                    ]),
                },
            },
            {
                name: "Loan Paid to Date",
                type: "line",
                yAxisIndex: 2,
                smooth: true,
                showSymbol: false,
                data: data.schedule.map((item) => item.loanPaidToDate),
                lineStyle: { width: 2, color: "#0288D1" }, // Blue
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "rgba(2, 136, 209, 0.6)" },
                        { offset: 1, color: "rgba(2, 136, 209, 0.1)" },
                    ]),
                },
            },
        ],
    };

    return (
        <div className="w-full bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">EMI Analysis</h2>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Pie Chart Section */}
                <div className="w-full lg:w-1/3 flex flex-col items-center">
                    <h3 className="text-lg font-semibold text-gray-700 text-center mb-2">Principal vs Interest</h3>
                    <div className="w-[300px] max-w-full">
                        <ReactECharts option={pieOption} style={{ height: "300px", width: "100%" }} />
                    </div>
                </div>

                {/* Smoothed Gradient Area Chart Section */}
                <div className="w-full lg:w-2/3">
                    <h3 className="text-lg font-semibold text-gray-700 text-center mb-2">EMI Breakdown per Period</h3>
                    <ReactECharts
                        option={areaOption}
                        style={{ height: "350px", width: "100%" }}
                        opts={{ renderer: "canvas" }} // ✅ Ensures smooth rendering
                    />
                </div>
            </div>
        </div>
    );
}
