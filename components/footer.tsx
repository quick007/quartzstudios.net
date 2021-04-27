import React from "react";
import Link from "next/link";
import Head from "next/head";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const Footer = (props) => {
    return (
        <>
            {/*Thicc divice footer*/}
            <div className="w-full bg-gray-800 bottom-0 hidden md:block">
                <div className="grid grid-cols-7 max-w-[75rem] mx-auto py-6 space-x-4">
                    <div className="left-0 col-span-4">
                        <h2 className="tracking-wider text-3xl  font-semibold uppercase text-gray-200">Quartz Studios</h2>
                        <p className="prose-xl text-gray-200">Creating next-generation Minecraft experiences</p>
                        <hr className="ml-2 mt-1 w-16 border-2 border-blue-600" />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="tracking-wider text-lg  font-semibold uppercase text-gray-200">Social</h2>
                        <hr className="mt-1 w-16 border-2 border-blue-600" />
                        <a href="https://discord.gg/ZfPwQ9AhbW" className="ml-1 prose-sm text-gray-300 hover:underline">Discord</a>
                        <a href="https://github.com/QuartzStudios" className="ml-1 prose-sm text-gray-300 hover:underline">Github</a>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="tracking-wider text-lg font-semibold uppercase text-gray-200">Resources</h2>
                        <hr className="mt-1 w-16 border-2 border-blue-600" />
                        <a href="https://store.quartzstudios.net/" className="ml-1 prose-sm text-gray-300 hover:underline">Store</a>
                        <a href="https://github.com/quick007/quartzstudios.net" className="ml-1 prose-sm text-gray-300 hover:underline">Contribute</a>
                        <Link href="/joinus"><a className="ml-1 prose-sm text-gray-300 hover:underline">Team Application</a></Link>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="tracking-wider text-lg  font-semibold uppercase text-gray-200">Policies</h2>
                        <hr className="mt-1 w-16 border-2 border-blue-600" />
                        <Link href="/rules"><a className="ml-1 prose-sm text-gray-300 hover:underline">Rules</a></Link>
                        <a className="ml-1 prose-sm text-gray-300 hover:underline"></a>
                    </div>
                </div>
            </div>

            {/*Mobile Footer*/}
            <div className="w-full bg-gray-800 bottom-0 block md:hidden">
                <div className="flex flex-col justify-center items-center py-6">
                    <h2 className="tracking-wider text-xl xs:text-3xl font-semibold uppercase text-gray-200">Quartz Studios</h2>
                    <p className="prose-xl text-gray-200 text-center hidden xs:block">Creating next-generation Minecraft experiences</p>
                    <hr className="ml-2 mt-1 w-16 border-2 border-blue-600 mb-4" />
                    <div className="flex text-gray-700 space-x-2">
                        <a href="https://discord.gg/ZfPwQ9AhbW" className="rounded-full bg-gray-900 p-2">
                            {discordsvg()}
                        </a>
                        <a href="https://store.quartzstudios.net/" className="rounded-full bg-gray-900 p-2">
                            <ShoppingCartIcon className="w-6 h-auto" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;

// Now, I don't normally like to do 1 section for mobile and one for desktop, but I wanted to make them very different, and idk js so I can't make them like colapse or whatever so if your seeing this, a pr to fix it would be amazing!

function discordsvg() {
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

