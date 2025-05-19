// src/lib/getLatestPosts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/types/blog';

export async function getLatestPosts(): Promise<BlogPost[]> {
    const postsDirectory = path.join(process.cwd(), 'src/posts');
    if (!fs.existsSync(postsDirectory)) return [];

    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug: filename.replace(/\.md$/, ''),
            title: data.title,
            date: data.date,
            excerpt: data.excerpt || '',
            content,
        };
    });

    return posts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
