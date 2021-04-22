import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/outline";

const ServerCard = (props) => {
    return (
        <>
            <div className="flex bg-gray-900 shadow-lg w-full lg:w-96 mt-5 lg:mt-0 border-b-2 border-red-600 lg:mr-4">
                <ul>
                    {/*Image*/}
                    <li className="relative lg:w-96">
                        <img src={props.img} className=""/>
                        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,1)] via-[rgba(0,0,0,0)] to-gray-900" />
                        <img className="absolute left-[10px] top-[10px] w-5/12 " src={props.logo} />
                    </li>
                    {/*Card Content*/}
                    <li className="m-3">
                        <h2 className="prose-2xl text-white font-semibold mx-1">{props.name}</h2>
                        <p className="prose-lg text-gray-200 mx-2 break-words h-16">{truncate(props.desc,75)}</p>
                        <Link href={"/" + props.name}>
                            <h5 className="group rounded-full select-none px-2 prose text-gray-200 opacity-60 hover:opacity-90 font-semibold inline-flex hover:bg-gray-700 cursor-pointer mb-5">
                                Read More 
                                <ArrowRightIcon className="ml-2 group-hover:ml-3 h-7 w-5" />
                            </h5>
                        </Link>
                        <div className="relative">
                            {/*Player counter/offline*/}
                            <div className={"rounded-full select-none px-2 prose text-gray-200 font-semibold inline-flex cursor-not-allowed bg-red-700"}>Offline</div>
                            {/*Click to copy*/}
                            <button 
                                onClick={() => navigator.clipboard.writeText(props.ip)} 
                                className="group absolute right-0 inline-flex text-gray-200 rounded-full px-2 bg-gray-800 hover:bg-gray-700 focus:bg-green-600 cursor-pointer font-roboto focus:outline-none"
                            >
                                <div className="relative items-center justify-center select-none">
                                    <span className="group-hover:invisible group-focus:invisible">{props.ip}</span>
                                    <span className="text-center hidden group-hover:block group-focus:hidden absolute top-0 ">Click to copy</span>
                                    <span className="hidden group-focus:block absolute top-0 ">Copied!</span>
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

//Cut a string off at a set value
function truncate(str: string, maxLength: number, suffix = "..."): string {
    return str.length > maxLength ? str.substr(-1, maxLength) + suffix : str;
}
  