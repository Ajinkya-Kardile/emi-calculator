import Image from 'next/image';

export default function AuthorBio({
                                      name,
                                      image,
                                      bio,
                                      socialLinks,
                                  }: {
    name: string;
    image?: string;
    bio?: string;
    socialLinks?: { twitter?: string; linkedin?: string };
}) {
    return (
        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row gap-6">
                {image && (
                    <div className="relative w-20 h-20 rounded-full overflow-hidden">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover"
                            sizes="80px"
                        />
                    </div>
                )}
                <div className="flex-1">
                    <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-gray-100">
                        Written by {name}
                    </h3>
                    {bio && (
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {bio}
                        </p>
                    )}
                    {socialLinks && (
                        <div className="flex gap-4">
                            {socialLinks.twitter && (
                                <a
                                    href={socialLinks.twitter}
                                    className="text-gray-500 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                                    aria-label={`Follow ${name} on Twitter`}
                                >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                            )}
                            {socialLinks.linkedin && (
                                <a
                                    href={socialLinks.linkedin}
                                    className="text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
                                    aria-label={`Connect with ${name} on LinkedIn`}
                                >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}