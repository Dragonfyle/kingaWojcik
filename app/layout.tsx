import { Metadata } from "next";
import { Navigation as NavigationType } from "tina/__generated__/types";
import client from "tina/__generated__/client";
import { Analytics } from "@vercel/analytics/react";

import AllContextProvider from "$contexts/AllContextProvider";
import Navigation from "$components/Navigation/";
import Footer from "$components/Footer/Footer";

import "./globals.css";
import LayoutWrapper from "$components/generics/LayoutWrapper";

export const metadata: Metadata = {
    title: "Kinga Ewa Wójcik - grafik, ilustrator",
    description: "Ilustracje i projektowanie graficzne",
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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
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
                <Analytics />
            </body>
        </html>
    );
}
