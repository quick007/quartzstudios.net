import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/outline";



const StaffCard = (props) => {
    return (
        <>
            <div className="flex flex-col">
                <img src={"https://crafatar.com/avatars/" + props.uuid + "?overlay"} className="rounded mx-auto w-1/2" alt={props.ign + "'s minecraft skin head"} />
                <h2 className={"flex justify-center font-quartz uppercase text-xs text-white rounded-sm tracking-tight mt-3 px-1 " + props.roleColor}>{props.roleName}</h2>
                <h2 className="flex justify-center font-roboto mt-1 text-gray-200">{props.ign}</h2>
            </div>
        </>
    );
}

export default StaffCard;

