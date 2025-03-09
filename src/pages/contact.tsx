"use client"
import RightSidebar from "@/components/common/RightSidebar";

export default function Contact() {
    return (
        <div className="flex flex-col lg:flex-row">
            <main className="flex-1 bg-white p-4 shadow-lg rounded-lg">
                <div className=" mx-auto p-4 bg-white shadow-md rounded-md">
                    <h1 className="text-2xl font-bold text-center mb-6">Contact Page</h1>
                </div>
            </main>

            {/*/!* RightSidebar Ad *!/*/}
            {/*<RightSidebar/>*/}
        </div>
    );
}