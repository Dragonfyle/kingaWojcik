import Image from "next/image";
import { ProjectThumbnailProps } from "./Thumbnail.types";

export default function ProjectThumbnail({ src }: ProjectThumbnailProps) {
    //TODO: add image optimization
    return (
        <div className="relative aspect-project-panel-item w-[90vw] hover:after:absolute hover:after:left-0 hover:after:top-0 hover:after:h-full hover:after:w-full hover:after:bg-leading-main-2 hover:after:mix-blend-color hover:after:content-[''] s:w-project-panel-item">
            <Image
                alt="miniatura projektu"
                layout="fill"
                src={src}
                className="h-project-panel-item w-project-panel-item object-contain"
            />
        </div>
    );
}
