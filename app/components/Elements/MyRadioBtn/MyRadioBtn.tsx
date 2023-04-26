import React from "react";

const MyRadioBtn:React.FC<{title:string, isChecked:boolean, handleSelect:any}> = ({title, isChecked=false,handleSelect}) => {
    return(
        <div className={"flex flex-row justify-start items-center py-2"}>
            <div className={`w-5 h-5 ${isChecked ? "border-4 border-blue-500" : "border-2 border-gray-300"} rounded-full ml-2 cursor-pointer`} onClick={() => handleSelect()}/>
            <div className={"ml-3 truncate"}>{title}</div>
        </div>
    )
}

export default MyRadioBtn