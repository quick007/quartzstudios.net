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
                        <div className={"rounded-full px-2 prose text-gray-200 font-semibold inline-flex bg-red-700"}>Offline</div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ServerCard;