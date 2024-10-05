import CodeBy from "./CodeBy";
import FooterSections from "./FooterSections";

export default function Footer() {
    return (
        <footer className="mt-24 flex h-auto w-screen flex-col gap-10 bg-leading-secondary-1 py-6 site-padding">
            <FooterSections />
            <CodeBy />
        </footer>
    );
}
