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
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@Dom_TheDev" />
			<meta name="twitter:title" content="Dom the Dev - Full Stack Developer" />
			<meta name="twitter:description" content="Website of Dom the Dev - Full Stack Developer" />
			<meta name="twitter:image" content="/card.png" />
			<link rel="icon" href="/favicon.ico"/>
			<link
				rel="preload"
				href="/fonts/Montserrat-Regular.ttf"
				as="font"
				crossOrigin=""
			/>
			<link rel="shortcut icon" href="/favicon.ico" />
			<link
				rel="preload"
				href="/fonts/Montserrat-Bold.ttf"
				as="font"
				crossOrigin=""
			/>
		</Head>

		<Header/>

		<main className={"pt-20"}>
			<SocialMediaBadge/>
			<Container>
				{children}
			</Container>
		</main>

		<Footer/>
	</div>
);

export default Layout;
