import Image from 'next/image'
import Head from "next/head";

const Links = () => {
    return (
        <>
            <Head>
                <title>Links | Dom the dev</title>
                <meta name="description" content="Blog/Portfolio of Dom the Dev"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@Dom_TheDev"/>
                <meta name="twitter:title" content="Dom the Dev - Full Stack Developer"/>
                <meta name="twitter:description" content="Website of Dom the Dev - Full Stack Developer"/>

                <meta property="og:url" content="http://www.domthedev.com/"/>
                <meta property="og:title" content="Dom the Dev - Full Stack Developer"/>
                <meta property="og:description" content="Website of Dom the Dev - Full Stack Developer"/>


                <link rel="icon" href="/favicon.ico"/>
                <link
                    rel="preload"
                    href="/fonts/Montserrat-Regular.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link rel="shortcut icon" href="/favicon.ico"/>
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
            <div className={`flex justify-center items-center h-screen bg-gradient-to-t from-cyan-400 to-blue-600`}>
                <div className={`flex flex-col items-center`}>
                    <Image src={"/logo_rund.png"} width={100} height={100} layout={"fixed"} alt={"Dom the Dev Logo"}/>
                    <ul className={`text-center mt-3`}>
                        <li>
                            <a className={`hover:text-primary transition-all bg-white p-3 rounded-3xl text-sm my-2 font-bold tracking-wider w-full block`}
                               target={"_blank"} rel={"noreferrer noopener"} href="https://domthedev.com">Portfolio</a>
                        </li>
                        <li>
                            <a className={`hover:text-primary transition-all bg-white p-3 rounded-3xl text-sm my-2 font-bold tracking-wider w-full block`}
                               target={"_blank"} rel={"noreferrer noopener"}
                               href="https://www.youtube.com/domthedeveloper">YouTube</a>
                        </li>
                        <li>
                            <a className={`hover:text-primary transition-all bg-white p-3 rounded-3xl text-sm my-2 font-bold tracking-wider w-full block`}
                               target={"_blank"} rel={"noreferrer noopener"}
                               href="https://twitter.com/Dom_TheDev">Twitter</a>
                        </li>
                        <li>
                            <a className={`hover:text-primary transition-all bg-white p-3 rounded-3xl text-sm my-2 font-bold tracking-wider w-full block`}
                               target={"_blank"} rel={"noreferrer noopener"} href="https://tailymate.com">Tailymate</a>
                        </li>
                        <li>
                            <a className={`hover:text-primary transition-all bg-white p-3 rounded-3xl text-sm my-2 font-bold tracking-wider w-full block`}
                               target={"_blank"} rel={"noreferrer noopener"} href="https://app.gumroad.com/domthedev">Gumroad</a>
                        </li>
                        <li>
                            <a className={`hover:text-primary transition-all bg-white p-3 rounded-3xl text-sm my-2 font-bold tracking-wider w-full block`}
                               target={"_blank"} rel={"noreferrer noopener"} href="https://domthedev.gumroad.com/l/tailor">Free Template</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Links;
