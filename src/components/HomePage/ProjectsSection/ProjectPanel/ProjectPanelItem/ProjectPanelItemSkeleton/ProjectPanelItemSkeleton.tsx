import { ReactNode } from "react";

export default function ProjectPanelItemSkeleton({ children }: { children?: ReactNode }) {
    return <div className="bg-gray-2 border-gray-2 h-project-panel-item w-project-panel-item border-2">{children}</div>;
}
