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
                <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

                {/*Twitter*/}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://quartzstudios.net" />
                <meta property="twitter:title" content={props.title + " | Quartz Studios"} />
                <meta property="twitter:description" content="Quartz Studios creates next-generation experiences in Minecraft. Experience something idk what to put here tbh. " />
                <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
            </Head>
            <nav className="bg-gray-700 flex flex-grow">
                <img src="logos/main.png"></img>
            </nav>
            
        </>
    )
}

export default Navbar;