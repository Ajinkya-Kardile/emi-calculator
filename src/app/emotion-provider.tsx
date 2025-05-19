'use client';

import { CacheProvider } from '@emotion/react';
import { ReactNode, useState } from 'react';
import createEmotionCache from "@/utils/emotion-cache";

export function EmotionProvider({ children }: { children: ReactNode }) {
    const [emotionCache] = useState(createEmotionCache);
    return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
}
