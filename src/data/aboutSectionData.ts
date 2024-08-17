import photoUna from "$img/author/about_kinga_wojcik.jpg";

interface AboutSectionData {
    imgUrl: string;
    header: string;
    description: string;
}

const aboutSectionData: AboutSectionData = {
    imgUrl: photoUna,
    header: "Trochę o sobie",
    description:
        `Swoją przygodę z grafiką rozpoczęłam od zagadnień brandingowych i to one sprawiają mi najwięcej satysfakcji.
       
Ukończyłam studia kognitywistyczne na Uniwersytecie Marii Curie-Skłodowskiej. Dzięki temu postrzegam projektowanie szerzej niż tylko obsługę narzędzi i staram się łączyć wiedzę dotyczącą ludzkiej percepcji z graficznym rzemiosłem.
        
        Tworzę też ilustracje cyfrowe w niezbyt poważnym stylu :)`,
};

export type { AboutSectionData };

export { aboutSectionData };
