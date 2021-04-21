import React from "react";
import Link from "next/link";

const ServerCard = (props) => {
    return (
        <>
            <div className="flex bg-gray-900 shadow-lg w-full lg:w-96 mt-5 lg:mt-0 border-b-2 border-red-600">
                <ul>
                    <li className="relative">
                        <img src={props.img} className=""/>
                        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,1)] via-[rgba(0,0,0,0)] to-gray-900" />
                        <img className="absolute left-[10px] top-[10px] w-5/12 " src={props.logo} />
                    </li>
                    <li className="m-4">
                        <h2 className="prose-2xl text-white font-semibold">{props.title}</h2>
                        <p className="prose-lg mb-2 text-gray-200 mx-1">{props.desc}</p>
                        <div className="relative">
                            <div className={"rounded-full px-2 prose text-gray-200 font-semibold inline-flex bg-red-700"}>Offline</div>
                            <button 
                            className="group absolute right-0 inline-flex text-gray-200 rounded-full px-2 bg-gray-800 hover:bg-gray-700 focus:bg-green-600 cursor-pointer font-roboto focus:outline-none"
                            
                            >
                                <div className="relative items-center justify-center">
                                    <span  className="group-hover:invisible group-focus:invisible">{props.ip}</span>
                                    <span className="hidden group-hover:block group-focus:hidden absolute top-0 ">Click to copy</span>
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