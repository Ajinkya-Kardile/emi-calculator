import "@/styles/globals.css";

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogCard from '@/components/cards/BlogCard';
import {BlogPost} from '@/types/blog';

export const metadata = {
    title: 'Blog - EMI Calculator Tool',
    description: 'Learn about EMI calculations, financial tips, and more',
};

function getAllPosts(): BlogPost[] {
    const postsDirectory = path.join(process.cwd(), 'src/posts');
    const filenames = fs.readdirSync(postsDirectory);

    return filenames
        .map((filename) => {
            const filePath = path.join(postsDirectory, filename);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const {data, content} = matter(fileContents);

            return {
                slug: filename.replace('.md', ''),
                title: data.title,
                date: data.date,
                excerpt: data.excerpt || '',
                content,
                ...data,
            } as BlogPost;
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// ✅ Async Server Component
export default async function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
            <div className="space-y-8">
                {posts.map((post) => (
                    <BlogCard key={post.slug} post={post}/>
                ))}
            </div>
        </div>
    );
}
