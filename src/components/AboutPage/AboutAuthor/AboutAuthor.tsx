import Image from "next/image";

import StyledTinaMarkup from "$components/generics/StyledTinaMarkup";

import { AboutSectionProps } from "./AboutAuthor.types";

export default function AboutAuthor({ source }: AboutSectionProps) {
    return (
        <section className="flex flex-col">
            <div className="flex">
                <Image src={source.photo} alt="zdjęcie autora" width={source.photoWidth} height={source.photoHeight} />
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
