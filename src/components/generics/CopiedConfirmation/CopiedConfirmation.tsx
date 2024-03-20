import * as P from "./CopiedConfirmation.parts";
import Text from "../Text/Text";
import { forwardRef } from "react";

const CopiedConfirmation = forwardRef<HTMLElement>(function CopiedConfirmation(_, ref) {
    return (
        <P.Copied ref={ref}>
            <Text size="s">skopiowane</Text>
        </P.Copied>
    );
});

export { CopiedConfirmation };
