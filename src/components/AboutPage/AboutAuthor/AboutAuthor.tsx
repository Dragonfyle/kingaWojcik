import StyledTinaMarkup from "$components/generics/StyledTinaMarkup";

import { AboutSectionProps } from "./AboutAuthor.types";
import YoutubeEmbed from "$components/ProjectPage/FeatureVideo/YoutubeEmbed";

export default function AboutAuthor({ source }: AboutSectionProps) {
    return (
        <section className="flex flex-col">
            <div className="flex">
				<YoutubeEmbed imageWidth={source.photoWidth} imageHeight={source.photoHeight} videoId={source.videoId || ""} />
            </div>

            <header className="my-8 flex">
                <h1 className="text-xl font-bold uppercase">Kinga Ewa Wójcik</h1>
            </header>

            <div className="flex flex-col gap-6">
                <StyledTinaMarkup content={source.description} />
            </div>
        </section>
    );
}
