import CodeBy from "./CodeBy";
import FooterSections from "./FooterSections";

export default function Footer() {
    return (
        <footer className="site-padding flex h-auto w-screen flex-col gap-10 bg-leading-secondary-1 py-6">
            <FooterSections />
            <CodeBy />
        </footer>
    );
}
