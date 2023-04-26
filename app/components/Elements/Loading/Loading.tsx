import React from "react";
import style from "./loading.module.css";
import loading from "../../../../public/images/loading.svg";

interface ILoadingProps {
    show?: boolean,
    absolute?: boolean,
    bgShow?: boolean,
}

const Loading: React.FC<ILoadingProps> = ({show = false, absolute, bgShow = false}) => {
    return (
        <div className={`w-full min-h-[300px] relative flex flex-row justify-center items-center ${absolute ? style.loadingAbsolute : null} ${bgShow ? style.bgShow : null} `}>
            <img src={loading.src} alt="loading..."/>
        </div>
    )
}

export default Loading;