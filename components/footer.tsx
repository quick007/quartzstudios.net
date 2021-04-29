import React from "react";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import DiscordSvg from "../public/logos/discord";

const Footer = (props) => {
    return (
        <>
            {/*Thicc divice footer*/}
            <div className="w-full bg-gray-800 bottom-0 hidden md:block">
                <div className="flex flex-row max-w-xl md:max-w-5xl xl:max-w-[78rem] mx-auto py-6 space-x-4 md:ml-5 lg:ml-auto">
                    {/*Title bit*/}
                    <div>
                        <div className="flex flex-col">
                            <h2 className="tracking-wider text-3xl  font-semibold uppercase text-gray-200">Quartz Studios</h2>
                            <p className="prose-xl text-gray-200">Creating next-generation Minecraft experiences</p>
                            <hr className="ml-2 mb-2 w-16 border-t-[3px] border-blue-600" />
                        </div>
                    </div>
                    {/*Rows of info*/}
                    <div className="flex flex-grow flex-row-reverse">
                        <div className="flex flex-col mr-2 lg:mr-0">
                            <h2 className="tracking-wider text-lg font-semibold uppercase text-gray-200">Policies</h2>
                            <hr className="mb-2 w-16 border-t-[3px] border-blue-600" />
                            <Link href="/resources/rules">
                                <a className="ml-1 prose-sm text-gray-300 hover:underline">
                                    Rules
                                </a>
                            </Link>
                            <a className="ml-1 prose-sm text-gray-300 hover:underline"></a>
                        </div>
                        <div className="flex flex-col mx-10 xl:mx-16">
                            <h2 className="tracking-wider text-lg font-semibold uppercase text-gray-200">Resources</h2>
                            <hr className="mb-2 w-16 border-t-[3px] border-blue-600" />
                            <a href="https://store.quartzstudios.net/" className="ml-1 prose-sm text-gray-300 hover:underline">Store</a>
                            <a href="https://github.com/quick007/quartzstudios.net" className="ml-1 prose-sm text-gray-300 hover:underline">Contribute</a>
                            <Link href="/resources/joinus">
                                <a className="ml-1 prose-sm text-gray-300 hover:underline">
                                    Team Application
                                </a>
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="tracking-wider text-lg  font-semibold uppercase text-gray-200">Social</h2>
                            <hr className="mb-2 w-16 border-t-[3px] border-blue-600" />
                            <a href="https://discord.gg/ZfPwQ9AhbW" className="ml-1 prose-sm text-gray-300 hover:underline">Discord</a>
                            <a href="https://github.com/QuartzStudios" className="ml-1 prose-sm text-gray-300 hover:underline">Github</a>
                        </div>
                    </div>
                </div>
            </div>

            {/*Mobile Footer*/}
            <div className="w-full bg-gray-800 bottom-0 block md:hidden">
                <div className="flex flex-col justify-center items-center py-6">
                    <h2 className="tracking-wider text-xl xs:text-3xl font-semibold uppercase text-gray-200">Quartz Studios</h2>
                    <p className="prose-xl text-gray-200 text-center hidden xs:block">Creating next-generation Minecraft experiences</p>
                    <hr className="mt-1 w-16 border-t-[3px] border-blue-600 mb-4" />
                    <div className="flex text-gray-500 space-x-2"> {/*modify text color to change svg colors*/}
                        <Link href="/discord">
                            <a className="rounded-full bg-gray-900 bg-opacity-50 p-2">
                                <DiscordSvg />
                            </a>
                        </Link>
                        <Link href="/store">
                            <a className="rounded-full bg-gray-900 bg-opacity-50 p-2">
                                <ShoppingCartIcon className="w-6 h-auto" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;

// Now, I don't normally like to do 1 section for mobile and one for desktop, but I wanted to make them very different, and idk js so I can't make them like colapse or whatever so if your seeing this, a pr to fix it would be amazing!

