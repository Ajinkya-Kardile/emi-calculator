"use client";
import React from "react";
import ReactECharts from "echarts-for-react";
import {EmiResult} from "@/types/emiTypes";
import * as echarts from "echarts"; // ✅ Import echarts
import {EChartsOption} from "echarts";

export default function EmiChart({data}: { data: EmiResult }) {
    const colors = ['#42A5F5', '#EF5350', '#4CAF50'];
    const pieOption: EChartsOption = {
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
                    {
                        name: "Total Principal",
                        value: data.totalPayment - data.totalInterest,
                        itemStyle: {color: colors[0]}
                    }, // Blue
                    {name: "Total Interest", value: data.totalInterest, itemStyle: {color: colors[1]}}, // Red
                ],
            },
        ],
    };

    const areaOption: EChartsOption = {
        tooltip: {
            trigger: "axis",
            axisPointer: { type: "cross" },
            formatter: (params: any) => {
                let tooltipContent = `<strong>${params[0].axisValue}</strong><br/>`;
                params.forEach((item: any) => {
                    const seriesColor = colors[item.seriesIndex]; // ✅ Ensure the correct color is used
                    tooltipContent += `
                    <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${seriesColor};margin-right:5px;"></span>
                    ${item.seriesName}: ₹${item.value.toLocaleString()}<br/>
                `;
                });
                return tooltipContent;
            },
        },
        grid: {right: "15%", left: "10%", bottom: "15%"},
        legend: {bottom: 0, data: ["Principal", "Interest", "Balance"]},
        xAxis: {
            type: "category",
            data: data.schedule.map((item) => item.period),
            axisLine: {lineStyle: {color: "#424242"}},
        },
        yAxis: [
            {
                type: "value",
                name: "Principal",
                position: "right",
                alignTicks: true,
                axisLine: {lineStyle: {color: colors[0]}}, // Green Axis
                axisLabel: {formatter: "₹{value}"},
            },
            {
                type: "value",
                name: "Interest",
                position: "right",
                offset: 60, // Moves it right for better visibility
                alignTicks: true,
                axisLine: {lineStyle: {color: colors[1]}}, // Orange Axis
                axisLabel: {formatter: "₹{value}"},
            },
            {
                type: "value",
                name: "Balance",
                position: "left",
                axisLine: {lineStyle: {color: colors[2]}}, // Blue Axis
                axisLabel: {formatter: "₹{value}"},
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
                lineStyle: {width: 2, color: colors[0]}, // Green
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {offset: 0, color: "rgba(76, 175, 80, 0.6)"},
                        {offset: 1, color: "rgba(76, 175, 80, 0.1)"},
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
                lineStyle: {width: 2, color: colors[1]}, // Orange
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {offset: 0, color: "rgba(255, 152, 0, 0.6)"},
                        {offset: 1, color: "rgba(255, 152, 0, 0.1)"},
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
                lineStyle: {width: 2, color: colors[2]}, // Blue
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {offset: 0, color: "rgba(2, 136, 209, 0.6)"},
                        {offset: 1, color: "rgba(2, 136, 209, 0.1)"},
                    ]),
                },
            },
        ],
    };

    return (
        <div className="w-full bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">EMI Analysis</h2>

            {/* Result Overview + Pie Chart Section */}
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 mb-6">
                {/* EMI Result Overview (Now on the Left Side on larger screens) */}
                <div className="flex flex-col space-y-4 min-w-[300px]">
                    {[
                        {label: "Loan EMI", value: `₹${data.emi.toLocaleString()}`},
                        {label: "Total Interest Payable", value: `₹${data.totalInterest.toLocaleString()}`},
                        {
                            label: "Total Payment (Principal + Interest)",
                            value: `₹${data.totalPayment.toLocaleString()}`
                        },
                    ].map((item, index) => (
                        <div key={index} className="bg-gray-100 px-6 py-4 rounded-lg shadow-md text-center">
                            <p className="text-sm font-medium text-gray-600">{item.label}</p>
                            <p className="text-lg font-bold text-gray-900">{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* Pie Chart (Now on the Right Side for Desktop, Below for Mobile) */}
                <div className="w-[300px] max-w-full flex flex-col items-center">
                    <h3 className="text-lg font-semibold text-gray-700 text-center mb-2">Principal vs Interest</h3>
                    <ReactECharts option={pieOption} style={{height: "300px", width: "100%"}}/>
                </div>
            </div>

            {/* Area Chart Section */}
            <div className="w-full">
                <h3 className="text-lg font-semibold text-gray-700 text-center mb-2">EMI Breakdown per Period</h3>
                <ReactECharts option={areaOption} style={{height: "400px", width: "100%"}}/>
            </div>
        </div>


    );
}
