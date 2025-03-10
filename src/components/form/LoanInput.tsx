"use client";
import React, {useState, useEffect} from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface LoanInputProps {
    label: string;
    value: number;
    setValue: (val: number) => void;
    min: number;
    max: number;
    step?: number;
    unit?: string;
}

const LoanInput: React.FC<LoanInputProps> = ({label, value, setValue, min, max, step = 1, unit}) => {
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value === "" ? "" : Number(e.target.value);
        setInputValue(newValue as number);
    };

    const handleInputBlur = () => {
        let newValue = Number(inputValue);
        if (isNaN(newValue) || newValue < min) newValue = min;
        if (newValue > max) newValue = max;
        setValue(newValue);
    };

    return (
        <div className="space-y-3">
            <label className="text-gray-700 font-medium">{label}</label>

            <div className="relative">
                <input
                    type="number"
                    value={inputValue}
                    min={min}
                    max={max}
                    step={step}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                />
                {unit && (
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">{unit}</span>
                )}
            </div>

            <Slider
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(val) => setValue(val as number)}
                styles={{
                    track: {backgroundColor: "#f97316", height: 6},
                    handle: {
                        backgroundColor: "#f97316",
                        borderColor: "#f97316",
                        height: 18,
                        width: 18,
                        marginTop: -6,
                    },
                    rail: {backgroundColor: "#d1d5db", height: 6},
                }}
                aria-label={`${label} Slider`}
            />

            <div className="flex justify-between text-sm text-gray-500">
                <span>{min}</span>
                <span>{Math.round((min + max) / 2)}</span>
                <span>{max}</span>
            </div>
        </div>
    );
};

export default LoanInput;
