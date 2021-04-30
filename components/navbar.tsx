import React from "react";
import Link from "next/link";
import Head from "next/head";

const Navbar = (props) => {
    function isPage() {
        if (props.page === "rules") {
            
        }
    }
    return (
        <>
            <html lang="en" />
            <Head>
                <title>{props.title + " | Quartz Studios"}</title>

                {/*Primary Meta Tags*/}
                <meta name="title" content={props.title + " | Quartz Studios"} />
                <meta name="description" content="Quartz Studios creates next-generation experiences in Minecraft. Experience servers that push past Minecrafts limitations - all while  giving you the best product." />
                <meta name="theme-color" content="#2563EB"/>

                {/*Open Graph / Facebook & Discord*/}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://quartzstudios.net" />
                <meta property="og:title" content={props.title + " | Quartz Studios"} />
                <meta property="og:description" content="Quartz Studios creates next-generation experiences in Minecraft. Experience servers that push past Minecrafts limitations - all while  giving you the best product." />
                <meta property="og:image" content="https://quartzstudios-net.vercel.app/logos/embead.jpg" />

                {/*Twitter*/}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://quartzstudios.net" />
                <meta property="twitter:title" content={props.title + " | Quartz Studios"} />
                <meta property="twitter:description" content="Quartz Studios creates next-generation experiences in Minecraft. Experience servers that push past Minecrafts limitations - all while  giving you the best product." />
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
                        <Link href="/resources/rules">
                            <a className={"bg-gray-600 hover:opacity-70 px-4 py-1 rounded-sm ml-3 font-sans" + (props.isRules ? "border-b border-blue-600" : "")}>
                                Rules
                            </a>
                        </Link>
                        <Link href="/discord">
                            <a className="bg-gray-600 hover:opacity-70 px-4 py-1 rounded-sm ml-3 font-sans hidden md:block">
                                {DiscordSvg()}
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
            
        </>
    );
}

export default Navbar;

function DiscordSvg() {
    return (
    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240" className="fill-current w-6 h-auto">
        <path
            className="st0"
            d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
        />
        <path
            className="st0"
            d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
        />
    </svg>

    );
}