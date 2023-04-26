import React from "react";
import Rating from "@mui/material/Rating";

interface IMyRatingProps{
    value: number,
    readOnly?: boolean
    disabled?: boolean,
    handlerOnChange?: any,
    precision?: number,
    size? : "small" | "medium" | "large" | undefined,
    showValue?: boolean
}


const MyRating:React.FC<IMyRatingProps> = ({value=0, precision=0.5, readOnly=true, disabled=false, handlerOnChange, size="medium", showValue=true}) => {
    return (
        <div className={"flex flex-row justify-start items-start"}>
            <span className={"ml-2"} style={{direction: "ltr"}}>
                <Rating name="half-rating" value={value} precision={precision} readOnly={readOnly} disabled={disabled}
                          onChange={(event, newValue) => handlerOnChange(newValue)} size={size}/></span>
            {showValue && <span className={"!text-green-600 text-md"}>{value}</span>}
        </div>
    )
}

export default MyRating