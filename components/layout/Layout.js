import React from 'react';
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import Container from "./Container";
import SocialMediaBadge from "../SocialMediaBadge";

const Layout = ({title, children}) => (
	<div className={"text-dark dark:text-white min-h-screen"}>
		<Head>
			<title>{title} | Dom the dev</title>
			<meta name="description" content="Blog/Portfolio of Dom the Dev"/>
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@Dom_TheDev" />
			<meta name="twitter:title" content="Dom the Dev - Full Stack Developer" />
			<meta name="twitter:description" content="Website of Dom the Dev - Full Stack Developer" />
			<meta name="twitter:image" content={`https://www.domthedev.com/${title}.png`} />

			<meta property="og:url" content="http://www.domthedev.com/" />
			<meta property="og:title" content="Dom the Dev - Full Stack Developer" />
			<meta property="og:description" content="Website of Dom the Dev - Full Stack Developer" />
			<meta property="og:image" content={`https://www.domthedev.com/${title}.png`} />



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
				href="/fonts/Rubik/Rubik-Bold.ttf"
				as="font"
				crossOrigin=""
			/>
			<link
				rel="preload"
				href="/fonts/Rubik/Rubik-Light.ttf"
				as="font"
				crossOrigin=""
			/>
			<link
				rel="preload"
				href="/fonts/Rubik/Rubik-Regular.ttf"
				as="font"
				crossOrigin=""
			/>
		</Head>

		<Header/>

		<main className={"h-full bg-white dark:bg-dark"}>
			<SocialMediaBadge/>
			<Container>
				{children}
			</Container>
		</main>

		<Footer/>
	</div>
);

export default Layout;
