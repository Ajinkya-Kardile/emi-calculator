'use client';

import { useEffect, useState } from 'react';

export default function TableOfContents({ content }: { content: string }) {
    const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

    useEffect(() => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        const headingElements = Array.from(doc.querySelectorAll('h2, h3'));

        const extractedHeadings = headingElements.map((heading, index) => {
            let id = heading.id?.trim();
            const text = heading.textContent?.trim() || '';
            const level = parseInt(heading.tagName.substring(1));

            if (!id) {
                id = `heading-${level}-${index}`;
                heading.id = id;
            }

            return { id, text, level };
        });

        setHeadings(extractedHeadings);
    }, [content]);

    return (
        <div className="sticky top-24">
            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">
                Table of Contents
            </h3>
            <nav className="space-y-2">
                {headings.map((heading) => (
                    <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block text-sm text-gray-800 dark:text-gray-300 hover:text-blue-600 transition-colors ${heading.level === 3 ? 'pl-4' : ''}`}
                    >
                        {heading.text}
                    </a>
                ))}
            </nav>
        </div>
    );
}