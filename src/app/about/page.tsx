import Head from "next/head";
import SidebarLayout from "@/components/layout/sidebarLayout";
import React from "react";
import Link from "next/link";

export default function About() {
    return (
        <>
            <Head>
                <title>About Us - EMI Calculator</title>
                <meta name="description"
                      content="Learn about our EMI Calculator and how it helps you make smart financial decisions with accurate and transparent loan calculations."/>
                <meta name="keywords"
                      content="EMI calculator, loan calculator, finance planning, loan comparison, home loan, personal loan"/>
                <meta name="author" content="EMI Calculator Team"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta property="og:title" content="About Us - EMI Calculator"/>
                <meta property="og:description"
                      content="Our EMI Calculator simplifies financial planning with fast, transparent, and accurate calculations."/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.emicalculator.com/about"/>
                <meta property="og:image" content="https://www.emicalculator.com/images/emi-banner.png"/>
            </Head>

            <SidebarLayout>
                <div className=" w-full">
                    {/* About Section */}
                    <section className="bg-white dark:bg-gray-900 w-full">
                        <div className="px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                            <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                                <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white text-center">
                                    About Us
                                </h2>
                                <p className="mb-4 font-light text-justify">
                                    We believe financial planning should be simple, transparent, and accessible to
                                    everyone.
                                    Our EMI Calculator helps you make smart, informed decisions about your loans,
                                    whether it&apos;s
                                    a home loan, personal loan, car loan, or business loan.
                                </p>
                                <p className="mb-4 font-medium text-justify">
                                    With easy-to-use features and accurate calculations, our tool enables you to plan
                                    your loan
                                    repayments efficiently. We provide a seamless experience with instant EMI
                                    breakdowns, interest
                                    analysis, and loan comparison options.
                                </p>
                                <h3 className="mb-4 text-2xl tracking-tight font-bold text-gray-900 dark:text-white text-center">
                                    Why Choose Us?
                                </h3>
                                <ul className="mb-4 space-y-2 font-light text-left">
                                    <li>✅ Fast & Accurate EMI Calculations – Get instant results with precise
                                        formulas.
                                    </li>
                                    <li>✅ Compare Loan Options – Find the best loan that suits your budget.</li>
                                    <li>✅ No Hidden Costs – 100% free and transparent calculations.</li>
                                    <li>✅ User-Friendly & Mobile-Optimized – Accessible anytime, anywhere.</li>
                                </ul>
                                <p className="mb-4 font-medium text-justify">
                                    Our mission is to empower users with the right financial tools to make better
                                    borrowing
                                    decisions. Whether you&#39;re a first-time borrower or an experienced investor, our
                                    EMI
                                    Calculator helps you stay ahead.
                                </p>
                                <div className="flex justify-center mt-6">
                                    <Link href="/emi-calculator" passHref>
                                        <button
                                            className="px-6 py-3 text-lg font-semibold text-blue-600 border-2 border-blue-600 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300">
                                            🏠 Go to Home
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="bg-gray-100 dark:bg-gray-800 py-8 mt-10 w-full">
                        <div className="px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white text-center">
                            <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
                            <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
                                Have any questions or need assistance? Feel free to reach out to us.
                            </p>
                            <div className="flex flex-col items-center space-y-4">
                                <p className="text-lg">📧 Email: <a href="mailto:emicalculatortool@gmail.com"
                                                                   target="_blank" rel="noopener noreferrer"
                                                                   className="text-blue-600 dark:text-blue-400">emicalculatortool@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </SidebarLayout>
        </>
    );
}
