import React from "react"
import ButtonLoading from "../../ButtonLoading";

interface IButtonProps {
    title: string,
    btnClassName?: string,
    isLoading?: boolean,
    isPrimary?: boolean,
    isDisable?: boolean,
    btnType?: any,
}

const Button: React.FC<IButtonProps> = ({title, btnClassName = "", btnType = "submit", isLoading = false, isPrimary=true, isDisable=false}) => {
    return (
        <button type={btnType}
                className={`${isLoading || isDisable ? "bg-gray-400" : (isPrimary ? "bg-primary" : "bg-secondary")} px-4 py-4 rounded-xl opacity-100 text-white cursor-pointer  transition duration-200 hover:opacity-60 ${btnClassName ?? ""}`}
                disabled={isLoading || isDisable}>
            <div className={"flex justify-center items-center"}>
                {isLoading && <div className={"ml-2"}><ButtonLoading /></div>}
                <div className={"text-lg"}>{title}</div>
            </div>
        </button>
    )
}

export default Button