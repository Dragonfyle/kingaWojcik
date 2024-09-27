import KingaBrand from "$generics/KingaBrand/";
import LinkedinIcon from "$generics/LinkedinIcon/";

export default function BrandAndLinkedin({ linkedinSize, onClick }: { linkedinSize: number; onClick?: () => void }) {
    return (
        <div className="flex w-auto gap-4">
            <LinkedinIcon size={linkedinSize} />
            <KingaBrand onClick={onClick} />
        </div>
    );
}
