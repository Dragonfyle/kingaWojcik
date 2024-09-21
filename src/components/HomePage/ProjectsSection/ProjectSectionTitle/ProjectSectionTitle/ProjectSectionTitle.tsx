import { ProjectSectionTitleProps } from "./ProjectSectionTitle.types";

export default function ProjectSectionTitle({ title }: ProjectSectionTitleProps) {
    return (
        <header className="flex items-center">
            <h2 className="text-3xl font-bold">{title}</h2>
        </header>
    );
}
