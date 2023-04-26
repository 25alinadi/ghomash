import React from "react";
import {Breadcrumbs} from "@mui/material";
import Typography from '@mui/material/Typography';
import MyBreadCrumbsItem from "./MyBreadCrumbsItem";

interface IMyBreadCrumbsProps{
    titleDestination: string,
    children?: any
}

const MyBreadCrumbs:React.FC<IMyBreadCrumbsProps> = ({titleDestination, children}) => {
    return(
        <Breadcrumbs aria-label="breadcrumb" className={"!text-sm !font-iranian_sans !text-gray-400 !tracking-tight"}>
            <MyBreadCrumbsItem title={"صفحه اصلی"} url={"/"} />
            {children}
            <Typography color="text-primary" className={"!text-sm !font-iranian_sans !text-primaryLight !tracking-tight"}>{titleDestination}</Typography>
        </Breadcrumbs>
    )
}

export default MyBreadCrumbs