import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';

export default function BlogCard({ post }: { post: BlogPost }) {
    return (
        <article className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md dark:hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
            {post.image && (
                <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0 overflow-hidden rounded-lg">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 256px"
                    />
                </div>
            )}
            <div className="flex-1">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { dateStyle: 'long' })}</span>
                    {post.readingTime && <span>• {post.readingTime}</span>}
                </div>
                <h2 className="text-2xl font-bold mb-3 leading-tight text-gray-900 dark:text-white">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors before:absolute before:inset-0"
                    >
                        {post.title}
                    </Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags?.map(tag => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 group-hover:underline transition-colors"
                >
                    Read more
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </Link>
            </div>
        </article>
    );
}