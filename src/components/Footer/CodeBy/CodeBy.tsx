import Text from "$components/generics/Text";
import { defaultTheme } from "$styles/DefaultTheme";

export default function CodeBy() {
    return (
        <div className="flex w-full justify-end pr-5">
            <Text className="text-s" color={defaultTheme.colors.white[1]}>
                Code by Michal Rygorowicz
            </Text>
        </div>
    );
}
