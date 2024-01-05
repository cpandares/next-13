import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords: ['About', 'Cesar', 'info'],
};

export default function AboutPage() {
    return (        
        <span className="text-5xl">About page</span>
    )
    }