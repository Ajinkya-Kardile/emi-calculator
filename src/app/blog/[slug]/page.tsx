import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import {Metadata} from 'next';
import Image from 'next/image';
import TableOfContents from '@/components/blog/TableOfContents';
import AuthorBio from '@/components/blog/AuthorBio';

export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), 'src/posts');

    // Handle case where directory doesn't exist
    if (!fs.existsSync(postsDirectory)) {
        console.warn('Posts directory not found at:', postsDirectory);
        return [];
    }

    try {
        const filenames = fs.readdirSync(postsDirectory);
        return filenames.map((filename) => ({
            slug: filename.replace(/\.md$/, ''),
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}

export async function generateMetadata({params}: { params: { slug: string } }): Promise<Metadata> {
    const filePath = path.join(process.cwd(), 'src/posts', `${params.slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const {data} = matter(fileContents);

    return {
        title: `${data.title} | EMI Calculator Blog`,
        description: data.excerpt || '',
        openGraph: {
            title: data.title,
            description: data.excerpt || '',
            images: data.image ? [{url: data.image}] : [],
            type: 'article',
            publishedTime: data.date,
        },
    };
}

export default async function BlogPostPage({params}: { params: { slug: string } }) {
    const filePath = path.join(process.cwd(), 'src/posts', `${params.slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const {data, content} = matter(fileContents);
    const stats = readingTime(content);

    const processedContent = await remark()
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(remarkGfm)
        .use(rehypeStringify)
        .process(content);
    const contentHtml = processedContent.toString();

    return (
        <div className=" p-1 md:p-2 bg-white dark:bg-gray-900 rounded-sm">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <article className="relative">

                    {/* Article Header */}
                    <header className="mb-12">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                            <span>{new Date(data.date).toLocaleDateString('en-US', {dateStyle: 'long'})}</span>
                            <span className="mx-2">•</span>
                            <span>{stats.text}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">{data.title}</h1>
                        {data.subtitle &&
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{data.subtitle}</p>}

                        <div className="flex items-center gap-4">
                            {data.authorImage && (
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={data.authorImage}
                                        alt={data.author || 'Author'}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                            <div>
                                {data.author &&
                                    <p className="font-medium text-gray-900 dark:text-white">{data.author}</p>}
                                {data.authorTitle &&
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{data.authorTitle}</p>}
                            </div>
                        </div>
                    </header>

                    {/* Article Content */}
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="hidden lg:block lg:w-64 shrink-0">
                            <TableOfContents content={contentHtml}/>
                        </div>

                        <div className="flex-1">
                            <div
                                className="prose prose-lg max-w-none dark:prose-invert"
                                dangerouslySetInnerHTML={{__html: contentHtml}}
                            />

                            {/* Tags */}
                            {data.tags && (
                                <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
                                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">TAGS</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {data.tags.map((tag: string) => (
                                            <div
                                                key={tag}
                                                className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-800 dark:text-gray-200"
                                            >
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </article>

                {/* Author Bio */}
                {data.author && (
                    <AuthorBio
                        name={data.author}
                        image={data.authorImage}
                        bio={data.authorBio}
                        socialLinks={data.socialLinks}
                    />
                )}

                {/* Related Posts */}
                {/*<RelatedPosts currentSlug={params.slug} tags={data.tags} />*/}
            </div>
        </div>

    );
}