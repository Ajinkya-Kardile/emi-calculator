import { MetadataRoute } from "next";

const baseUrl = "https://emicalculatortool.in";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: baseUrl, priority: 1.0, changeFrequency: "weekly" },
        { url: `${baseUrl}/emi-calculator`, priority: 0.9, changeFrequency: "weekly" },
        { url: `${baseUrl}/emi-calculator/personal-loan`, priority: 0.9, changeFrequency: "monthly" },
        { url: `${baseUrl}/emi-calculator/home-loan`, priority: 0.9, changeFrequency: "monthly" },
        { url: `${baseUrl}/emi-calculator/car-loan`, priority: 0.9, changeFrequency: "monthly" },
        { url: `${baseUrl}/emi-calculator/credit-card`, priority: 0.9, changeFrequency: "monthly" },
        { url: `${baseUrl}/financial/fd-calculator`, priority: 0.9, changeFrequency: "monthly" },
        { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: "monthly" },
        { url: `${baseUrl}/faq`, priority: 0.8, changeFrequency: "monthly" },
        { url: `${baseUrl}/privacy-policy`, priority: 0.4, changeFrequency: "yearly" }
    ];
}
