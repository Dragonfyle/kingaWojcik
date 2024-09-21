import { ClientOnly } from "./client";

export function generateStaticParams() {
    return [
        { slug: [""] },
        // { slug: ["/"] },
        { slug: ["about"] },
        { slug: ["contact"] },
        // { slug: ["branding-2"] },
        { slug: ["branding-3"] },
        { slug: ["branding-4"] },
        { slug: ["illustrations-1"] },
        { slug: ["illustrations-2"] },
        { slug: ["illustrations-3"] },
    ];
}

export default function Page() {
    return <ClientOnly />;
}
