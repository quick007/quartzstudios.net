import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/outline";



const StaffCard = (props) => {
    return (
        <>
            <div className="flex">
                <ul className="space-y-2">
                    <img src={"https://crafatar.com/avatars/" + props.uuid} className="rounded mx-auto w-1/2" />
                    <h2 className={"flex justify-center font-quartz uppercase text-xs text-gray-200 rounded-sm tracking-tight px-1 " + props.roleColor}>{props.roleName}</h2>
                    <h2 className="flex justify-center font-roboto text-gray-200">{props.ign}</h2>
                </ul>
            </div>
        </>
    );
}

export default StaffCard;

