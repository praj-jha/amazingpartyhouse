import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title: string;
    description: string;
    keywords: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: string;
    schema?: object;
}

const SEO = ({
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage = '/aphl.png',
    ogType = 'website',
    schema
}: SEOProps) => {
    const location = useLocation();
    const baseUrl = 'https://amazingpartyhouse.com';
    const fullUrl = canonicalUrl || `${baseUrl}${location.pathname}`;
    const fullTitle = `${title} | Amazing Party House - Premier Event & Party Planners Florida`;

    useEffect(() => {
        // Update title
        document.title = fullTitle;

        // Update or create meta tags
        const updateMetaTag = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
            let element = document.querySelector(`meta[${attribute}="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Basic meta tags
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);
        updateMetaTag('author', 'Amazing Party House');
        updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

        // Open Graph meta tags
        updateMetaTag('og:title', fullTitle, 'property');
        updateMetaTag('og:description', description, 'property');
        updateMetaTag('og:url', fullUrl, 'property');
        updateMetaTag('og:type', ogType, 'property');
        updateMetaTag('og:image', `${baseUrl}${ogImage}`, 'property');
        updateMetaTag('og:site_name', 'Amazing Party House', 'property');
        updateMetaTag('og:locale', 'en_US', 'property');

        // Twitter Card meta tags
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', fullTitle);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', `${baseUrl}${ogImage}`);

        // Geo tags for local SEO
        updateMetaTag('geo.region', 'US-FL');
        updateMetaTag('geo.placename', 'Florida');
        updateMetaTag('geo.position', '28.5383;-81.3792');
        updateMetaTag('ICBM', '28.5383, -81.3792');

        // Business specific
        updateMetaTag('og:phone_number', '+1-407-921-6454', 'property');
        updateMetaTag('og:email', 'hello@amazingpartyhouse.com', 'property');

        // Update canonical link
        let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.rel = 'canonical';
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.href = fullUrl;

        // Add JSON-LD structured data
        if (schema) {
            let scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
            if (!scriptTag) {
                scriptTag = document.createElement('script');
                scriptTag.type = 'application/ld+json';
                document.head.appendChild(scriptTag);
            }
            scriptTag.textContent = JSON.stringify(schema);
        }
    }, [fullTitle, description, keywords, fullUrl, ogImage, ogType, schema]);

    return null;
};

export default SEO;
