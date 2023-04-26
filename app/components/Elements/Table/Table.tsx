import React, {FormEvent, useState} from "react"
import TableTh from "./TableTh";
import {FiSearch} from "react-icons/fi";

interface ITableProps {
    isLoading: boolean,
    title?: string,
    subTitle?: string,
    titlesTable: Array<string>,
    isSearch?: boolean,
    handleSearch?: any,
    children: any
}

const Table: React.FC<ITableProps> = ({
                                          isLoading = true,
                                          titlesTable = [],
                                          title = null,
                                          subTitle = null,
                                          isSearch = true,
                                          handleSearch,
                                          children
                                      }) => {
    const [search, setSearch] = useState<string>("")
    const tableThItems = titlesTable.map((title, index) => <TableTh key={`th-${index}`} title={title}/>)
    // const tableLoadingSample = titlesTable.map((_, i) => <TableTdSkeleton key={`skeleton-td-${i}`}/>)
    // const tableLoadingRows = table_skeleton_count.map((_, i) => <tr key={`skeleton-tr-${i}`}>{tableLoadingSample}</tr>)

    const handleSubmitForSearchTable = (e: FormEvent) => {
        e.preventDefault()
        handleSearch(search)
    }

    return (
        <div className="flex flex-col">
            {/*lg:overflow-x-auto*/}
            <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className={"flex flex-row justify-between items-center mb-6"}>
                    <div>
                        {title && <div className={"text-2xl text-semibold text-black-800 mb-2"}>{title}</div>}
                        {subTitle && <div className={"text-sm text-semibold text-gray-400 mb-2"}>{subTitle}</div>}
                    </div>
                    <div className={"relative"}>
                        {isSearch &&
                        <React.Fragment>
                            <form onSubmit={(e) => handleSubmitForSearchTable(e)}>
                                <input
                                    id={"search"}
                                    type={"text"}
                                    name={"search"}
                                    className={"w-64 h-12 bg-gray-100 border rounded-3xl px-4 py-2 text-gray-600 outline-none"}
                                    placeholder={"جستجو..."}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <button type={'submit'}
                                        className={"absolute left-3 top-3 text-2xl text-gray-600 cursor-pointer"}>
                                    <FiSearch/></button>
                            </form>
                        </React.Fragment>
                        }
                    </div>
                </div>
                <div className="inline-block min-w-full align-middle border border-gray-200 sm:rounded-lg mb-6">
                    <table className="min-w-full">
                        <thead>
                        <tr>
                            {tableThItems}
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {isLoading ? "" : children}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table