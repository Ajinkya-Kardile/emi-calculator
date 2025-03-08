import React from "react";

const Footer: React.FC = () => (
    <footer className="w-full bg-white shadow-md py-3 px-4 text-center mt-4 relative">
        <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} EMI Calculator. All rights reserved.</p>
    </footer>
);

export default Footer;
