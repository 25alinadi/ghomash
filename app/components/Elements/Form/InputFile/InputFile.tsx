import React, {useState} from "react"
import {ErrorMessage, Field} from "formik";
import uploadFile from "../../../../../public/images/upload-file.png";
import {generateImageLink, isNotEmpty} from "../../../../helpers/functions";

interface IInputFileProps {
    name: string,
    label?: string,
    accept?: string,
    inputClassName?: string,
    errorClassName?: string,
    labelClassName?: string,
    defaultValue?: string,
    isRequired?: boolean,
    handleUploadFile?: any,
    isImg?: boolean,
    field?: any,
    meta?: any,
}

const InputFile: React.FC<IInputFileProps> = (
    {
        name,
        inputClassName = null,
        label = null,
        accept = null,
        errorClassName = null,
        labelClassName = null,
        isRequired = false,
        handleUploadFile,
        defaultValue = null,
        isImg = false, field, meta
    }
) => {
    const [file, setFile] = useState('')
    return (
        <React.Fragment>
            <div className={"mb-5"}>
                {label &&
                <div className={`pr-1 mb-2 block text-md font-medium text-gray-500 flex items-center ${labelClassName ?? null}`}>
                    <span className={"ml-1"}>{label}</span>
                    {isRequired && <span className={"text-xl text-red-500"}>*</span>}
                </div>
                }
                <div>
                    <div className={"flex justify-start items-center"}>
                        <div className={"ml-4"}>
                            {defaultValue && isNotEmpty(defaultValue) && !file ?
                                <img className={"w-24 h-24 rounded-full border border-2 border-gray-300"} src={isImg ? generateImageLink(defaultValue) : uploadFile} alt={""}/> :
                                (isImg ?
                                        (file && <img className={"w-24 h-24 rounded-full border border-2 border-gray-300"} src={file}/>) :
                                        (file && <img className={"w-24 h-24 rounded-full border border-2 border-gray-300"} src={uploadFile.src}/>))
                            }
                        </div>
                        <div>
                            <label htmlFor={name} className={`pr-1 mb-2 block text-md font-medium text-gray-500 flex items-center ${labelClassName ?? null}`}>
                                <div>
                                    <div className={`w-32 ${file? "bg-amber-400" : "bg-primary"} px-4 py-2 rounded-lg text-white text-center opacity-100 cursor-pointer transition transition-duration-200 hover:opacity-60`}>
                                        {
                                            file ? "بارگذاری شد" : (isImg ? "بارگذاری تصویر" : "بارگذاری فایل")}
                                    </div>
                                    <div className={"text-sm text-gray-400 mt-4"}>{`پسوندهای مجاز: ${accept}`}</div>
                                </div>
                            </label>
                            <input
                                id={name}
                                type={"file"}
                                name={name}
                                className={`hidden w-full h-14 mt-1 mb-1 rounded-xl px-6 outline-0 ${inputClassName ?? null}`}
                                accept={accept!}
                                onChange={(event:any) => {
                                    const fileUrl = URL.createObjectURL(event.target.files[0]);
                                    setFile(fileUrl)
                                    handleUploadFile(name, event.target.files[0])
                                }}
                            />
                            <div className={"mr-4"}>
                                <ErrorMessage name={name} className={`text-red-500 text-sm text-right ${errorClassName ?? null}`}
                                              component={"div"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default InputFile;