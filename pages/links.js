import Image from 'next/image'

const Links = () => {
    return (
        <div className={`flex justify-center items-center h-screen bg-gradient-to-t from-cyan-400 to-blue-600`}>
            <div className={`flex flex-col items-center`}>
                <Image src={"/logo_rund.png"} width={100} height={100} layout={"fixed"}  alt={"Dom the Dev Logo"}/>
                <ul className={`text-center mt-3`}>
                    <li>
                        <a className={`hover:text-primary transition-all bg-white p-3 rounded-3xl text-sm my-2 font-bold tracking-wider w-full block`}
                           target={"_blank"} rel={"noreferrer noopener"} href="https://domthedev.com">Portfolio</a>
                    </li>
                    <li>
                        <a className={`hover:text-primary transition-all bg-white p-3 rounded-3xl text-sm my-2 font-bold tracking-wider w-full block`}
                           target={"_blank"} rel={"noreferrer noopener"} href="https://www.youtube.com/domthedeveloper">YouTube</a>
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
                           target={"_blank"} rel={"noreferrer noopener"}
                           href="https://domthedev.gumroad.com/l/free-portfolio-tailwind-template">Free Tailwind
                            Portfolio Template</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Links;
