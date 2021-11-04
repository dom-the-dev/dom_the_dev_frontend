import React from 'react';
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import Container from "./Container";
import SocialMediaBadge from "../SocialMediaBadge";

const Layout = ({title, children}) => (
	<div className={"bg-dark text-white min-h-screen"}>
		<Head>
			<title>{title} | Dom the dev</title>
			<meta name="description" content="Blog/Portfolio of Dom the Dev"/>
			<link rel="icon" href="/favicon.ico"/>
			<link
				rel="preload"
				href="/fonts/Montserrat-Regular.ttf"
				as="font"
				crossOrigin=""
			/>
			<link
				rel="preload"
				href="/fonts/Montserrat-Bold.ttf"
				as="font"
				crossOrigin=""
			/>
		</Head>

		<Header/>

		<main>
			<SocialMediaBadge/>
			<Container>
				{children}
			</Container>
		</main>

		<Footer/>
	</div>
);

export default Layout;
