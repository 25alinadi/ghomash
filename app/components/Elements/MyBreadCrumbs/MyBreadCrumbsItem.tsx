import React from "react";
import Link from 'next/link';

interface IMyBreadCrumbsItemProps{
    title:string,
    url:string
}

const MyBreadCrumbsItem:React.FC<IMyBreadCrumbsItemProps> = ({title, url}) => {
    return(
        <Link
            color="inherit"
            className={"hover:!underline hover:!underline-offset-1"}
            href={url}
        >
            {title}
        </Link>
    )
}

export default MyBreadCrumbsItem