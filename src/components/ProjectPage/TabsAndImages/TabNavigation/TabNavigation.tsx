import Button from "../../../generics/Button/Button";
import Text from "../../../generics/Text/Text";
import * as P from "./TabNavigation.parts";

export default function TabNavigation() {
    const tabNames = ["brief", "logo", "strona internetowa", "moje propozycje"];

    function getButtons(tabNames) {
        return tabNames.map((name) => (
            <Button>
                <Text bold>{name}</Text>
            </Button>
        ));
    }

    return <P.StyledMenu>{getButtons(tabNames)}</P.StyledMenu>;
}
