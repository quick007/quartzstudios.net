import React from "react";
import Link from "next/link";
import Head from "next/head";

const Navbar = (props) => {
    return (
        <>
            <Head>
                <title>{props.title + " | Quartz Studios"}</title>
            </Head>
            <nav className="bg-gray-700 flex flex-grow">
                <img src="../public/yes.png"></img>
            </nav>
            
        </>
    )
}

export default Navbar;