import React from "react";
import {EmptyStateDiv, EmptyStateH4, EmptyStateImg} from "./EmptyStateElements";
import logo from "../../../public/images/new-logo-header.png";

interface IEmptyStateProps {
    message: string,
    isImg?: boolean,
    img?: string,
}

const EmptyState:React.FC<IEmptyStateProps> = ({message = "", isImg = false, img = ""}) => {
    return (
        <div className={"w-full h-full flex flex-row justify-center items-center text-center py-24 px-6"}>
            <h4 className={"text-center text-2xl text-slate-500 font-semibold"}>
                <div className={"!text-center mb-8"}>
                    {isImg ? <img src={isImg && img ? img : logo.src} className={"w-52 h-auto mx-auto"}/> : null}
                </div>
                {message}
            </h4>
        </div>
    )
}

export default EmptyState;