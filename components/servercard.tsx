import React from "react";
import Link from "next/link";

const ServerCard = (props) => {
    return (
        <>
            <div className="flex flex-col bg-gray-900 shadow-lg w-3/12 border-b-2 border-red-600">
                <div className="relative">
                    <img src={props.img} className=""/>
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] to-gray-900" />
                    <img className="absolute left-[10px] top-[10px] w-5/12 " src={props.logo} />
                </div>
                <div className="m-4">
                    <div className="">Offline</div>
                </div>
            </div>
        </>
    );
}

export default ServerCard;