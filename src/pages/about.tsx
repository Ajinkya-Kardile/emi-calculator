import SidebarLayout from "@/components/layout/sidebarLayout";
import React from "react";
import Link from "next/link";

export default function About() {
    return (
        <div className="flex flex-col lg:flex-row">
            <SidebarLayout>
                <section className="bg-white dark:bg-gray-900">
                    <div className="px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white text-center">
                                About Us
                            </h2>
                            <p className="mb-4 font-light text-justify">
                                We believe financial planning should be simple, transparent, and accessible to everyone.
                                Our EMI Calculator is designed to help you make smart, informed decisions about your
                                loans, whether it&apos;s a home loan, personal loan, car loan, or business loan.
                            </p>
                            <p className="mb-4 font-medium text-justify">
                                With easy-to-use features and accurate calculations, our tool enables you to plan your
                                loan repayments efficiently. We provide a seamless experience with instant EMI
                                breakdowns, interest analysis, and loan comparison options.
                            </p>
                            <h3 className="mb-4 text-2xl tracking-tight font-bold text-gray-900 dark:text-white text-center">
                                Why Choose Us?
                            </h3>
                            <ul className="mb-4 space-y-2 font-light text-justify">
                                <li>✅ Fast & Accurate EMI Calculations – Get instant results with precise formulas.</li>
                                <li>✅ Compare Loan Options – Find the best loan that suits your budget.</li>
                                <li>✅ No Hidden Costs – 100% free and transparent calculations.</li>
                                <li>✅ User-Friendly & Mobile-Optimized – Accessible anytime, anywhere.</li>
                            </ul>
                            <p className="mb-4 font-medium text-justify">
                                Our mission is to empower users with the right financial tools to make better borrowing
                                decisions. Whether you&apos;re a first-time borrower or an experienced investor, our EMI
                                Calculator helps you stay ahead.
                            </p>
                            <div className="flex justify-center mt-6">
                                <Link
                                    href="/"
                                    className="inline-flex items-center px-6 py-3 text-lg font-semibold text-blue-600 border-2 border-blue-600 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300"
                                >
                                    🏠 Go to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Contact Section */}
                <section className="bg-gray-100 dark:bg-gray-800 py-12 mt-10">
                    <div className="px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white text-center">
                        <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
                        <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
                            Have any questions or need assistance? Feel free to reach out to us.
                        </p>
                        <div className="flex flex-col items-center space-y-4">
                            <p className="text-lg">📧 Email: <a href="mailto:support@emicalculator.com" className="text-blue-600 dark:text-blue-400">support@emicalculator.com</a></p>
                        </div>
                    </div>
                </section>
            </SidebarLayout>
        </div>
    );
}
