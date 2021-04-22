import React from "react";
import Link from "next/link";
import Head from "next/head";

const Navbar = (props) => {
    return (
        <>
            <Head>
                <title>{props.title + " | Quartz Studios"}</title>

                {/*Primary Meta Tags*/}
                <meta name="title" content={props.title + " | Quartz Studios"} />
                <meta name="description" content="Quartz Studios creates next-generation experiences in Minecraft. Experience something idk what to put here tbh." />

                {/*Open Graph / Facebook & Discord*/}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://quartzstudios.net" />
                <meta property="og:title" content={props.title + " | Quartz Studios"} />
                <meta property="og:description" content="Quartz Studios creates next-generation experiences in Minecraft. Experience something idk what to put here tbh. " />
                <meta property="og:image" content="https://quartzstudios-net.vercel.app/logos/embead.png" />

                {/*Twitter*/}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://quartzstudios.net" />
                <meta property="twitter:title" content={props.title + " | Quartz Studios"} />
                <meta property="twitter:description" content="Quartz Studios creates next-generation experiences in Minecraft. Experience something idk what to put here tbh. " />
                <meta property="twitter:image" content="https://quartzstudios-net.vercel.app/logos/embead.png" />
            </Head>
            <nav className="text-gray-100 bg-gray-900 body-font shadow max-width-xl">
                <div className="h-16 w-16 flex items-center justify-center ml-4 space-x-4">
                    <Link href="/">
                        <img src="logos/main.png" className="h-10 hover:h-12 w-auto cursor-pointer"> </img>
                    </Link>
                </div>
            </nav>
            
        </>
    )
}

export default Navbar;