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
            }}
            content={content}
        />
    );
}
