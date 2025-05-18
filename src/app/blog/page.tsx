import "@/styles/globals.css";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogCard from '@/components/cards/BlogCard';
import {BlogPost} from '@/types/blog';
import readingTime from 'reading-time';

export const metadata = {
    title: 'Blog - EMI Calculator Tool',
    description: 'Learn about EMI calculations, financial tips, and more',
};

function getAllPosts(): BlogPost[] {
    const postsDirectory = path.join(process.cwd(), 'src/posts');

    if (!fs.existsSync(postsDirectory)) {
        console.warn('Posts directory not found at:', postsDirectory);
        return [];
    }

    try {
        const filenames = fs.readdirSync(postsDirectory);

        return filenames
            .map((filename) => {
                const filePath = path.join(postsDirectory, filename);
                const fileContents = fs.readFileSync(filePath, 'utf8');
                const {data, content} = matter(fileContents);
                const stats = readingTime(content);

                return {
                    slug: filename.replace('.md', ''),
                    title: data.title,
                    date: data.date,
                    excerpt: data.excerpt || '',
                    content,
                    ...data,
                    readingTime: stats.text || '',
                } as BlogPost;
            })
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch (error) {
        console.error('Error loading blog posts:', error);
        return [];
    }
}

export default async function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                Blog
            </h1>

            {posts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <div key={post.slug} className="h-full">
                            <BlogCard post={post}/>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        No blog posts found yet. Check back soon!
                    </p>
                </div>
            )}
        </div>
    );
}