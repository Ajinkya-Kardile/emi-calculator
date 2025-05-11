import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface InfoCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    className?: string;
    iconContainerClass?: string;
    titleClass?: string;
    descriptionClass?: string;
}

export function InfoCard({
                             icon,
                             title,
                             description,
                             className = "",
                             iconContainerClass = "",
                             titleClass = "",
                             descriptionClass = "",
                         }: InfoCardProps) {
    return (
        <div
            className={twMerge(
                "bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 h-full transition-all duration-300 hover:shadow-lg",
                className
            )}
        >
            <div className="flex flex-col items-center text-center h-full">
                <div
                    className={twMerge(
                        "mb-4 p-3 bg-blue-50 dark:bg-gray-600 rounded-full",
                        iconContainerClass
                    )}
                >
                    {icon}
                </div>
                <h3
                    className={twMerge(
                        "text-lg font-semibold text-gray-900 dark:text-white mb-2",
                        titleClass
                    )}
                >
                    {title}
                </h3>
                <p
                    className={twMerge(
                        "text-gray-600 dark:text-gray-300 flex-1",
                        descriptionClass
                    )}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}