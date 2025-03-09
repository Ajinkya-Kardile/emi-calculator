import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl bg-white rounded-sm mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p className="mb-4">Last updated: March 2025</p>

            <p className="mb-4">
                Welcome to EMI Calculator. Your privacy is important to us. This Privacy Policy explains how we
                collect, use, disclose, and protect your personal information when you use our website.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
            <p className="mb-4">
                When you use our website, we may collect the following types of information:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Personal Information:</strong> When you contact us via email, we may collect your name and
                    email address.
                </li>
                <li><strong>Usage Data:</strong> We collect information about your interactions with our website, such
                    as page views and time spent on pages.
                </li>
                <li><strong>Cookies and Tracking:</strong> We use cookies to improve user experience and analyze website
                    traffic.
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside mb-4">
                <li>To provide and maintain our services.</li>
                <li>To improve our website and user experience.</li>
                <li>To respond to inquiries and provide customer support.</li>
                <li>To monitor website analytics and security.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Sharing and Disclosure</h2>
            <p className="mb-4">We do not sell, trade, or rent your personal information. However, we may share your
                data in the following cases:</p>
            <ul className="list-disc list-inside mb-4">
                <li>With service providers that help us operate our website.</li>
                <li>If required by law or legal obligations.</li>
                <li>In case of a business transfer or merger.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">4. Security of Your Information</h2>
            <p className="mb-4">We implement security measures to protect your personal data, but no online service is
                100% secure.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">5. Cookies and Tracking Technologies</h2>
            <p className="mb-4">Our website uses cookies to enhance your browsing experience. You can manage cookie
                preferences through your browser settings.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Rights</h2>
            <p className="mb-4">You have the right to request access to or deletion of your personal data. Contact us at
                [your email] for any privacy-related requests.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">7. Changes to This Privacy Policy</h2>
            <p className="mb-4">We may update this policy from time to time. The latest version will always be available
                on this page.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy, you can contact us at <a href="mailto:support@emicalculator.com" className="text-blue-600 dark:text-blue-400">support@emicalculator.com</a>.
            </p>
        </div>
    );
};

export default PrivacyPolicy;
