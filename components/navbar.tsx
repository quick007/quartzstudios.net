import React from "react";
import Link from "next/link";
import Head from "next/head";

const Navbar = (props) => {
    return (
        <>
            <html lang="en" />
            <Head>
                <title>{props.title + " | Quartz Studios"}</title>

                {/*Primary Meta Tags*/}
                <meta name="title" content={props.title + " | Quartz Studios"} />
                <meta name="description" content="Quartz Studios creates next-generation experiences in Minecraft. Experience something idk what to put here tbh." />
                <meta name="theme-color" content="#263137"/>

                {/*Open Graph / Facebook & Discord*/}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://quartzstudios.net" />
                <meta property="og:title" content={props.title + " | Quartz Studios"} />
                <meta property="og:description" content="Quartz Studios creates next-generation experiences in Minecraft. Experience something idk what to put here tbh. " />
                <meta property="og:image" content="https://quartzstudios-net.vercel.app/logos/embead.jpg" />

                {/*Twitter*/}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://quartzstudios.net" />
                <meta property="twitter:title" content={props.title + " | Quartz Studios"} />
                <meta property="twitter:description" content="Quartz Studios creates next-generation experiences in Minecraft. Experience something idk what to put here tbh. " />
                <meta property="twitter:image" content="https://quartzstudios-net.vercel.app/logos/embead.jpg" />
            </Head>
            <nav className="w-full text-gray-100 bg-gray-800 shadow-lg sticky top-0 z-40">
                <div className="mx-auto max-w-xl md:max-w-4xl xl:max-w-[78rem] flex">
                    <div className="h-16 w-16 flex items-center justify-center">
                        <Link href="/">
                            <img src="/logos/main.jpg" className="h-10 hover:h-12 w-auto cursor-pointer" alt="Back to home logo" />
                        </Link>
                    </div>
                    <div className="flex flex-grow flex-row-reverse items-center mr-2">
                        <Link href="/store">
                            <a className="main-btn font-sans shadow-2xl">
                                Store
                            </a>
                        </Link>
                        <Link href="/rules">
                            <a className="bg-gray-600 hover:opacity-70 px-4 py-1 rounded-sm ml-3 font-sans">
                                Rules
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
            
        </>
    );
}

export default Navbar;
