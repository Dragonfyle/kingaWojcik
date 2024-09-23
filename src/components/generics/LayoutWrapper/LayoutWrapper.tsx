export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto flex min-h-screen w-full min-w-site-min max-w-site-max flex-col justify-between">
            {children}
        </div>
    );
}
