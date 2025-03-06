"use client";
import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // Ensure you import styles

interface LoanInputProps {
    label: string;
    value: number;
    setValue: (val: number) => void;
    min: number;
    max: number;
    step?: number;
    unit?: string;
}

const LoanInput: React.FC<LoanInputProps> = ({ label, value, setValue, min, max, step = 1, unit }) => {
    return (
        <div className="space-y-3">
            {/* Label */}
            <label className="text-gray-700 font-medium">{label}</label>

            {/* Number Input */}
            <div className="relative">
                <input
                    type="number"
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    onChange={(e) => setValue(Number(e.target.value))}
                    onBlur={(e) => {
                        let newValue = Number(e.target.value);
                        if (newValue < min) newValue = min;
                        if (newValue > max) newValue = max;
                        setValue(newValue);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                />
                {unit && (
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">{unit}</span>
                )}
            </div>

            {/* Slider */}
            <Slider
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={setValue}
                trackStyle={{ backgroundColor: "#f97316", height: 6 }}
                handleStyle={{
                    backgroundColor: "#f97316",
                    borderColor: "#f97316",
                    height: 18,
                    width: 18,
                    marginTop: -6,
                }}
                railStyle={{ backgroundColor: "#d1d5db", height: 6 }}
                aria-label={`${label} Slider`}
            />

            {/* Scale Labels */}
            <div className="flex justify-between text-sm text-gray-500">
                <span>{min}</span>
                <span>{Math.round((min + max) / 2)}</span>
                <span>{max}</span>
            </div>
        </div>
    );
};

export default LoanInput;
