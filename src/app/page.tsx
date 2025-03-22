import React from "react";
import SimpleEmiCalculator from "./emi-calculator/page";
import Head from "next/head";

export default function Home() {
    return (
        <>

            <Head>
                <title>EMI Calculator - Calculate Loan EMI Online Instantly</title>
                <meta
                    name="description"
                    content="Use our free EMI calculator to estimate your loan EMI. Plan your Home, Car, or Personal Loan with accurate interest rates and repayment schedules."
                />
                <meta
                    name="keywords"
                    content="EMI Calculator, Loan Calculator, Home Loan EMI, Personal Loan EMI, Car Loan EMI, Interest Rate Calculator, Loan Repayment"
                />
                <meta name="robots" content="index, follow"/>

                {/* Open Graph (OG) Meta Tags for Social Media */}
                <meta property="og:title" content="EMI Calculator - Plan Your Loan Smartly"/>
                <meta property="og:description"
                      content="Calculate your loan EMI quickly and accurately with our easy-to-use EMI calculator."/>
                <meta property="og:url" content="https://emicalculatortool.in"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="https://emicalculatortool.in/logo.png"/>

            </Head>
            <SimpleEmiCalculator/>
        </>
    );

}
