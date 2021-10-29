import React from 'react';
import PropTypes from 'prop-types';
import Head from "next/head";
import Footer from "./Footer";
import styles from "../styles/Index.module.scss";
import Header from "./Header";

const Layout = ({title, children}) => {
    return (
        <div>
            <Head>
                <title>{title} | Dom the dev</title>
                <meta name="description" content="Blog/Portfolio of Dom the Dev"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>

            <main className={styles.main}>
                {children}
            </main>

            <Footer/>
        </div>
    );
};

Layout.propTypes = {};

export default Layout;
