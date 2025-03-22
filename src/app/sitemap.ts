import { MetadataRoute } from "next";

const baseUrl = "https://emicalculatortool.in";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: baseUrl, priority: 1.0, changeFrequency: "weekly" },
        { url: `${baseUrl}/emi-calculator`, priority: 0.9, changeFrequency: "weekly" },
        { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: "monthly" },
        { url: `${baseUrl}/faq`, priority: 0.8, changeFrequency: "monthly" },
        { url: `${baseUrl}/privacy-policy`, priority: 0.4, changeFrequency: "yearly" }
    ];
}
