import NextIcon from "$generics/NavIcon/Next/Next";
import PreviousIcon from "$generics/NavIcon/Previous/Previous";
import { NavButtonsProps } from "./NavButtons.types";

//TODO: finish disabling logic
export default function NavButtons({ onNextProject, onPreviousProject, isFirstIndex, isLastIndex }: NavButtonsProps) {
    return (
        <div className="flex h-full w-[200px] cursor-pointer items-center justify-end gap-5">
            <PreviousIcon onClick={onPreviousProject} isDisabled={isFirstIndex} />
            <NextIcon onClick={onNextProject} isDisabled={isLastIndex} />
        </div>
    );
}
