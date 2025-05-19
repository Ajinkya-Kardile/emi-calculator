export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    image?: string;           // Used in <Image />
    readingTime?: string;     // Used for display
    tags?: string[];          // Rendered as tag badges
    // [key: string]: any;       // Allows additional frontmatter fields
}
