export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    return <div className="min-w-site-min max-w-site-max mx-auto flex min-h-screen w-full flex-col">{children}</div>;
}
