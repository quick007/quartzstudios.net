import React from "react";
import Link from "next/link";

const ServerCard = (props) => {
    return (
        <>
            <div className="flex bg-gray-900 shadow-lg w-96 border-b-2 border-red-600">
                <ul>
                    <li className="relative">
                        <img src={props.img} className=""/>
                        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] to-gray-900" />
                        <img className="absolute left-[10px] top-[10px] w-5/12 " src={props.logo} />
                    </li>
                    <li className="m-4">
                        <h2 className="prose-2xl text-white font-semibold">{props.title}</h2>
                        <p className="prose-lg mb-2 text-gray-200 mx-1">{props.desc}</p>
                        <div className="relative">
                            <div className={"rounded-full px-2 prose text-gray-200 font-semibold inline-flex bg-red-700"}>Offline</div>
                            <div className="absolute right-0 inline-flex border border-gray-500 divide-x text-gray-200 ">
                                <div className="p-1">{props.ip}</div>
                                <div className="p-1">Copy IP</div>
                            </div>

                        </div>
                    </li>
                    
                </ul>
            </div>
        </>
    );
}

export default ServerCard;