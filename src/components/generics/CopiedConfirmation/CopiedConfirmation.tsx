import { forwardRef } from "react";

import Text from "$generics/Text/";

import * as P from "./CopiedConfirmation.parts";

const CopiedConfirmation = forwardRef<HTMLElement>(function CopiedConfirmation(_, ref) {
    return (
        <P.Copied ref={ref}>
            <Text size="s">skopiowane</Text>
        </P.Copied>
    );
});

export { CopiedConfirmation };
