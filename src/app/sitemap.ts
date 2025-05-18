import { MetadataRoute } from "next";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const baseUrl = "https://emicalculatortool.in";

async function getAllPosts() {
    const postsDirectory = path.join(process.cwd(), 'src/posts');
    if (!fs.existsSync(postsDirectory)) return [];

    const filenames = fs.readdirSync(postsDirectory);

    return filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug: filename.replace('.md', ''),
            lastModified: new Date(data.date || fs.statSync(filePath).mtime),
            ...data
        };
    });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getAllPosts();

    const staticRoutes: MetadataRoute.Sitemap[0][] = [
        {
            url: baseUrl,
            priority: 1.0,
            changeFrequency: "monthly"
        },
        {
            url: `${baseUrl}/emi-calculator`,
            priority: 0.9,
            changeFrequency: "monthly"
        },
        {
            url: `${baseUrl}/emi-calculator/personal-loan`,
            priority: 0.9,
            changeFrequency: "monthly"
        },
        {
            url: `${baseUrl}/emi-calculator/home-loan`,
            priority: 0.9,
            changeFrequency: "monthly"
        },
        {
            url: `${baseUrl}/emi-calculator/car-loan`,
            priority: 0.9,
            changeFrequency: "monthly"
        },
        {
            url: `${baseUrl}/emi-calculator/credit-card`,
            priority: 1.0,
            changeFrequency: "monthly"
        },
        {
            url: `${baseUrl}/financial/fd-calculator`,
            priority: 0.9,
            changeFrequency: "monthly"
        },
        {
            url: `${baseUrl}/financial/rd-calculator`,
            priority: 0.9,
            changeFrequency: "monthly"
        },
        {
            url: `${baseUrl}/about`,
            priority: 0.3,
            changeFrequency: "monthly"
        },
        {
            url: `${baseUrl}/faq`,
            priority: 0.2,
            changeFrequency: "monthly"
        },
        {
            url: `${baseUrl}/privacy-policy`,
            priority: 0.1,
            changeFrequency: "yearly"
        },
        {
            url: `${baseUrl}/blog`,
            priority: 0.8,
            changeFrequency: "weekly"
        }
    ];

    const blogPosts: MetadataRoute.Sitemap[0][] = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.lastModified,
        priority: 0.7,
        changeFrequency: "weekly" as const
    }));

    return [...staticRoutes, ...blogPosts];
}