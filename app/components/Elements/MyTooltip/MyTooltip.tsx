import React from "react";
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

interface IMyTooltipProps{
    title: string,
    children: any,
    arrow?:boolean
}

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        // backgroundColor: theme.palette.common.white,
        // color: 'rgba(0, 0, 0, 0.87)',
        // boxShadow: theme.shadows[1],
        fontSize: 10,
        fontFamily: 'IranianSans'
    },
}));

const MyTooltip:React.FC<IMyTooltipProps> = ({title, children, arrow=true}) => {
    return <CustomTooltip title={title} placement={"top-end"} arrow={arrow}>{children}</CustomTooltip>
}

export default MyTooltip