"use client";
import {motion} from "framer-motion";

export default function Loader() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <motion.div
                className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
            />
            <p className="mt-4 text-gray-600 text-sm">Loading EMI Calculator...</p>
        </div>
    );
}
