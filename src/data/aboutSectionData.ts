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
       
        Studia kognitywistyczne pozwoliły mi zdobyć wiedzę dotyczącą neuro-psychologicznych aspektów ludzkiego postrzegania, komunikacji i znaków. Dzięki temu mogę tworzyć lepsze projekty, odpowiadające na potrzeby danej marki i realizujące jej cele marketingowe. 
        
        Pierwsze doświadczenie zdobywałam, projektując materiały dla firm, w których pracowałam. Obecnie pracuję w firmie marketingowej.
        
        Coraz bardziej interesuje mnie też malarstwo cyfrowe i dlatego postanowiłam doskonalić te umiejętności.`,
};

export type { AboutSectionData };

export { aboutSectionData };
