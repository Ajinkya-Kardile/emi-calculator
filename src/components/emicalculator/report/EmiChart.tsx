"use client";
import React from "react";
import ReactECharts from "echarts-for-react";
import {EmiResult} from "@/types/emiTypes";
import * as echarts from "echarts";
import {EChartsOption} from "echarts";

export default function EmiChart({ data }: { data: EmiResult }) {
    const isDarkMode = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;

    const colors = ['#42A5F5', '#EF5350', '#4CAF50'];

    // ✅ Pie Chart Configuration
    const pieOption: EChartsOption = {
        tooltip: { trigger: "item" },
        legend: {
            bottom: 0,
            left: "center",
            textStyle: { color: isDarkMode ? "#FFF" : "#424242" },
        },
        series: [
            {
                name: "EMI Breakdown",
                type: "pie",
                radius: ["40%", "70%"],
                itemStyle: {
                    borderRadius: 10,
                    borderColor: isDarkMode ? "#333" : "#fff",
                    borderWidth: 2,
                },
                label: { show: false, position: "center", color: isDarkMode ? "#ffffff" : "#000000" },
                emphasis: {
                    label: { show: true, fontSize: 15, fontWeight: "bold" },
                },
                labelLine: { show: false },
                data: [
                    { name: "Total Principal", value: data.totalPayment - data.totalInterest, itemStyle: { color: colors[0] } },
                    { name: "Total Interest", value: data.totalInterest, itemStyle: { color: colors[1] } },
                ],
            },
        ],
    };

    // ✅ Area Chart Configuration
    const areaOption: EChartsOption = {
        tooltip: { trigger: "axis", axisPointer: { type: "cross" } },
        grid: { right: "15%", left: "10%", bottom: "15%" },
        legend: {
            bottom: 0,
            data: ["Principal", "Interest", "Balance"],
            textStyle: { color: isDarkMode ? "#FFF" : "#424242" },
        },
        xAxis: {
            type: "category",
            data: data.schedule.map((item) => item.period),
            axisLine: { lineStyle: { color: isDarkMode ? "#BBB" : "#424242" } },
        },
        yAxis: [
            { type: "value", name: "Principal", position: "right", alignTicks: true, axisLine: { lineStyle: { color: colors[0] } }, axisLabel: { formatter: "₹{value}", color: isDarkMode ? "#FFF" : "#424242" } },
            { type: "value", name: "Interest", position: "right", offset: 60, alignTicks: true, axisLine: { lineStyle: { color: colors[1] } }, axisLabel: { formatter: "₹{value}", color: isDarkMode ? "#FFF" : "#424242" } },
            { type: "value", name: "Balance", position: "left", axisLine: { lineStyle: { color: colors[2] } }, axisLabel: { formatter: "₹{value}", color: isDarkMode ? "#FFF" : "#424242" } },
        ],
        series: [
            { name: "Principal", type: "line", yAxisIndex: 0, smooth: true, showSymbol: false, data: data.schedule.map((item) => item.principal), lineStyle: { width: 2, color: colors[0] }, areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "rgba(76, 175, 80, 0.6)" }, { offset: 1, color: "rgba(76, 175, 80, 0.1)" }]) } },
            { name: "Interest", type: "line", yAxisIndex: 1, smooth: true, showSymbol: false, data: data.schedule.map((item) => item.interest), lineStyle: { width: 2, color: colors[1] }, areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "rgba(255, 152, 0, 0.6)" }, { offset: 1, color: "rgba(255, 152, 0, 0.1)" }]) } },
            { name: "Balance", type: "line", yAxisIndex: 2, smooth: true, showSymbol: false, data: data.schedule.map((item) => item.balance), lineStyle: { width: 2, color: colors[2] }, areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: "rgba(2, 136, 209, 0.6)" }, { offset: 1, color: "rgba(2, 136, 209, 0.1)" }]) } },
        ],
    };

    return (
        <div className="w-full bg-white dark:bg-gray-900/80 backdrop-blur-lg rounded-lg p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">EMI Analysis</h2>

            {/* Result Overview + Pie Chart Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-0 md:px-6">
                {/* EMI Result Overview */}
                <div className="space-y-6">
                    {[
                        { label: "Loan EMI", value: `₹${data.emi.toLocaleString()}` },
                        { label: "Total Interest Payable", value: `₹${data.totalInterest.toLocaleString()}` },
                        { label: "Total Payment (Principal + Interest)", value: `₹${data.totalPayment.toLocaleString()}` },
                    ].map((item, index) => (
                        <div key={index} className="border-2 border-blue-800 dark:border-blue-300 border-solid bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow-md text-center transition-transform transform hover:scale-105">
                            <p className="text-md font-medium text-gray-700 dark:text-gray-300">{item.label}</p>
                            <p className="text-2xl font-extrabold text-blue-700 dark:text-blue-200">{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* Pie Chart */}
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 text-center mb-3">Principal vs Interest</h3>
                    <ReactECharts option={pieOption} style={{ height: "320px", width: "100%" }} />
                </div>
            </div>

            {/* Area Chart Section */}
            <div className="w-full mt-8">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 text-center mb-3">EMI Breakdown per Period</h3>
                <ReactECharts option={areaOption} style={{ height: "420px", width: "100%" }} />
            </div>
        </div>
    );
}
