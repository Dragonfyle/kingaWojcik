import Image from "next/image";
import { ProjectThumbnailProps } from "./Thumbnail.types";

export default function ProjectThumbnail({ src }: ProjectThumbnailProps) {
    return (
        <div className="relative w-[90vw] hover:after:absolute hover:after:left-0 hover:after:top-0 hover:after:h-full hover:after:w-full hover:after:bg-leading-main-2 hover:after:mix-blend-color hover:after:content-[''] s:w-project-panel-item">
            <Image priority alt="miniatura projektu" width={640} height={360} src={src} />
        </div>
    );
}
