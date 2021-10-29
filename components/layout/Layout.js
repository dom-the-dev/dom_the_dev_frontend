import React from 'react';
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({title, children}) => (
    <div>
        <Head>
            <title>{title} | Dom the dev</title>
            <meta name="description" content="Blog/Portfolio of Dom the Dev"/>
            <link rel="icon" href="/favicon.ico"/>
            <link
                rel="preload"
                href="/fonts/Roboto-Regular.ttf"
                as="font"
                crossOrigin=""
            />
            <link
                rel="preload"
                href="/fonts/Roboto-Bold.ttf"
                as="font"
                crossOrigin=""
            />
        </Head>

        <Header/>

        <main className={"container mx-auto"}>
            {children}
        </main>

        <Footer/>
    </div>
);

export default Layout;
