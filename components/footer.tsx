import React from "react";
import Link from "next/link";
import Head from "next/head";

const Footer = (props) => {
    return (
        <>
            <div className="w-full bg-gray-800 bottom-0 hidden md:block">
                <div className="flex justify-center items-center py-6">
                    <div className="">
                        <h2 className="tracking-wider text-xl xs:text-3xl  font-semibold uppercase text-gray-200">Quartz Studios</h2>
                        <p className="prose-xl text-gray-200">Creating next-generation Minecraft experiences</p>
                        <hr className="ml-2 mt-1 w-16 border-2 border-[#407cea]" />
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-800 bottom-0 block md:hidden">
                <div className="flex flex-col justify-center items-center py-6">
                    <h2 className="tracking-wider text-xl xs:text-3xl font-semibold uppercase text-gray-200">Quartz Studios</h2>
                    <p className="prose-xl text-gray-200 text-center hidden xs:block">Creating next-generation Minecraft experiences</p>
                    <hr className="ml-2 mt-1 w-16 border-2 border-[#407cea]" />
                </div>
            </div>
        </>
    );
}

export default Footer;