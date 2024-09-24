import { Metadata } from "next";
import { Navigation as NavigationType } from "tina/__generated__/types";
import client from "tina/__generated__/client";

import AllContextProvider from "$contexts/AllContextProvider";
import Navigation from "$components/Navigation/";
import Footer from "$components/Footer/Footer";

import "./globals.css";
import LayoutWrapper from "$components/generics/LayoutWrapper";

export const metadata: Metadata = {
    title: "Kinga Ewa Wójcik - grafik, ilustrator",
    description: "Portfolio projektów graficznych",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    async function fetchNavigation() {
        const navigationResponse = await client.queries.navigationConnection();
        const navigation = navigationResponse.data?.navigationConnection?.edges?.map((edge) => edge?.node);

        return navigation as NavigationType[];
    }

    const navigationItems = await fetchNavigation();

    return (
        <html lang="pl">
            <head>
                {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Hind+Guntur:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <title>Kinga Ewa Wójcik</title>
            </head>

            <body>
                <AllContextProvider>
                    <LayoutWrapper>
                        <div>
                            <Navigation navigationItems={navigationItems} />
                            <main className="">{children}</main>
                        </div>
                        <Footer />
                    </LayoutWrapper>
                </AllContextProvider>
            </body>
        </html>
    );
}
