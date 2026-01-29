import { useContext, useEffect } from 'react';
import { LanguageContext } from '../App';

export const useSEO = () => {
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        const isKo = language === 'ko';

        // Uniform message as requested
        const titleText = isKo
            ? 'KAIST AI 대학'
            : 'KAIST College of AI';

        const descText = isKo
            ? 'KAIST AI 대학 - 세계 최고 수준의 연구와 교육을 통해 인공지능의 미래를 선도합니다.'
            : 'KAIST College of AI - Leading the future of artificial intelligence through world-class research and education.';

        document.title = titleText;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', descText);
        }

        // Update OG tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', titleText);
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content', descText);
        }

        // Update Twitter tags
        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.setAttribute('content', titleText);
        }

        const twitterDescription = document.querySelector('meta[property="twitter:description"]');
        if (twitterDescription) {
            twitterDescription.setAttribute('content', descText);
        }
    }, [language]);
};
