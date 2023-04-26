import React from "react";

const TitleRow:React.FC<{title:string, className?: string}> = (props) => {
    return(
        <div className={"py-4 mb-2"}>
            <div className={`text-2xl font-semibold text-slate-700 px-2 md:px-0 ${props.className ?? ""}`}>{props.title}</div>
        </div>
    )
}

export default TitleRow