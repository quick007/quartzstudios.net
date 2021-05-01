import React, { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/outline";
import useSWR from "swr";
import fetch from 'node-fetch'

export async function fetcher(...args) {
    const res = await fetch(...args)
    return res.json()
}


const ServerCard = (props) => {
    const loadFailed = "Failed to load!"
    var playercount;
    const { data, error } = useSWR('https://api.mcsrvstat.us/2/' + props.ip, fetcher);
    if (error) playercount = loadFailed;
    if (!data) playercount = "Loading!";
    else if (!data.online) playercount = loadFailed;
    else playercount = data.players.online + " Online"

    const [expanded, setExpanded] = useState(false)
    return (
        <>
            <div className="flex bg-gray-900 shadow-lg w-full lg:w-96 border-b-2 border-red-600">
                <ul>

                    {/*Image*/}
                    <li className="relative lg:w-96">
                        <img src={props.img} className="w-full lg:w-96" alt={props.name + "'s image from server"} />
                        <div className="absolute inset-0 bottom-[-1px] bg-gradient-to-b from-[rgba(0,0,0,0.5)] via-[rgba(0,0,0,0)] to-gray-900" />
                        <img className="absolute left-[10px] top-[10px] w-5/12 sm:w-3/12 lg:w-5/12 " src={props.logo} alt={props.name + "'s logo"} />
                    </li>

                    {/*Card Content*/}
                    <li className="m-3">
                        <h2 className="prose prose-2xl text-white font-semibold mx-1">{props.name}</h2>
                        <button
                            className={"group relative w-full h-24 md:h-16 focus:outline-none mb-2 " + (expanded ? "!h-auto" : "")}
                            onClick={() => { setExpanded(!expanded) }}
                        >
                            <p
                                className="prose prose-lg group-hover:blur text-gray-200 mx-2 break-words text-left"

                            >
                                <span className={"hidden lg:block " + (expanded ? "!hidden" : "")}>{truncate(props.desc, 69)}</span>
                                <span className={"hidden md:block lg:hidden " + (expanded ? "!hidden" : "")}>{truncate(props.desc, 130)}</span>
                                <span className={"block md:hidden " + (expanded ? "!hidden" : "")}>{truncate(props.desc, 69)}</span>
                                <span className={expanded ? "block" : "hidden"}>{props.desc}</span>
                            </p>
                            <div className={"hidden group-hover:block backdrop-filter backdrop-blur-sm absolute inset-0 group-hover:flex justify-center items-center " + (expanded ? "!hidden" : "")}>
                                <p className="rounded-full select-none px-2 prose text-gray-200 font-semibold inline-flex bg-gray-800 bg-opacity-60">Expand</p>
                            </div>
                        </button>
                        {/*<Link href={"/" + props.name}>
                            <h3 className="group rounded-full select-none px-2 prose text-gray-200 opacity-60 hover:opacity-90 font-semibold inline-flex hover:bg-gray-700 cursor-pointer mb-5">
                                Learn More 
                                <ArrowRightIcon className="ml-2 group-hover:ml-3 h-7 w-5" />
                            </h3>
                        </Link>*/}
                        <div className="relative">

                            {/*Player counter/offline/coming soon thing*/}
                            <div className={"rounded-full select-none px-2 prose text-gray-200 font-semibold inline-flex " + (playercount !== loadFailed ? "bg-green-600 " : "bg-red-700 ") + (props.open ? "block" : "hidden")}>
                                <span>{playercount}</span>
                            </div>
                            <div className={"rounded-full select-none px-2 prose text-gray-200 font-semibold inline-flex bg-gray-800 break-words " + (props.open ? "hidden" : "block")}>
                                Coming Soon!
                            </div>

                            {/*Click to copy*/}
                            <button
                                onClick={() => navigator.clipboard.writeText(props.ip)}
                                className={"group absolute right-0 inline-flex text-gray-200 rounded-full px-2 bg-gray-800 hover:bg-gray-700 focus:bg-green-600 cursor-pointer font-roboto focus:outline-none "
                                    + (props.open ? "block" : "hidden")}
                            >
                                <div className="relative select-none">
                                    <span className="group-hover:invisible group-focus:invisible">{props.ip}</span>
                                    <span className="hidden group-hover:block group-focus:hidden absolute top-0">Click to copy</span>
                                    <span className="hidden group-focus:block absolute top-0 text-center">Copied!</span>
                                </div>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ServerCard;

//Cut a string off to a set value
function truncate(str: string, maxLength: number, suffix = "..."): string {
    return str.length > maxLength ? str.substr(0, maxLength) + suffix : str;
}
