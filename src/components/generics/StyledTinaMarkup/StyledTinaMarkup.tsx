import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function StyledTinaMarkup({ content }: { content: any }) {
    return (
        <TinaMarkdown
            components={{
                bold: (props) => <span className="is-bold text-orange-500">{props?.children}</span>,
                a: (props) => (
                    <a
                        className="underline hover:text-orange-500 has-[.is-bold]:decoration-orange-500"
                        href={props?.url}>
                        {props?.children}
                    </a>
                ),
                h3: (props) => <h3 className="text-[1.5rem] font-bold">{props?.children}</h3>,
                h4: (props) => <h4 className="text-[1.1rem] font-bold text-orange-500">{props?.children}</h4>,
                h5: (props) => <h5 className="text-[1.1rem] font-bold">{props?.children}</h5>,
            }}
            content={content}
        />
    );
}
