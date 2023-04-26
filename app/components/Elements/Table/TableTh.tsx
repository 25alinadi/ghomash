import React from "react"

interface TableThProps{
    title:string,
    ThClassName? : string
}

const TableTh:React.FC<TableThProps> = ({ title , ThClassName = null}) => {
    return(
        <th
            className={`h-12 px-6 py-3 font-vazir text-md leading-4 tracking-wider text-center text-gray-600 uppercase border-b border-gray-200 bg-gray-50 ${ThClassName ?? null}`}>
            {title}
        </th>
    )
}

export default TableTh