import React from "react"
import {ErrorMessage, Field, FieldProps} from "formik";
import {isNotEmpty} from "../../../../helpers/functions";

interface IInputProps {
    name: string,
    label?: string,
    placeholder?: string,
    inputClassName?: string,
    errorClassName?: string,
    labelClassName?: string,
    isRequired?: boolean,
    isDisabled?: boolean,
    meta?: any,
    children?: any,
    isChecked? : boolean,
    defaultValue? : any,
    subContent?:string
}

const InputCheckbox: React.FC<IInputProps> = (
    {
        name,
        inputClassName = null,
        label = null,
        errorClassName = null,
        labelClassName = null,
        isRequired = false,
        isDisabled = false,
        isChecked = false,
        children,
        defaultValue,
        meta,
    }
) => {

    return (
        <React.Fragment>
            <div className={"mb-2 flex flex-row justify-start items-center"}>
                <div>
                    <Field
                        id={name}
                        type={"checkbox"}
                        name={name}
                        className={`w-full mt-1 mb-1 ml-2 border ${meta?.error ? "border-red-300" : "border-gray-300"} rounded-xl px-6 outline-0 focus:border-primary/75 ${inputClassName ?? null}`}
                        disabled={isDisabled}
                        isChecked={isChecked}
                    >
                        {children}
                    </Field>
                </div>
                {label &&
                <label htmlFor={name}
                       className={`pr-1 mb-2 block text-md font-medium text-gray-500 flex items-center ${labelClassName ?? null}`}>
                    <span className={"ml-1"}>{label}</span>
                    {isRequired && <span className={"text-xl text-red-500"}>*</span>}
                </label>
                }
            </div>
            <div className={"mt-1 mr-1"}>
                <ErrorMessage name={name} className={`text-red-500 text-sm text-right ${errorClassName ?? null}`}
                              component={"div"}/>
            </div>
        </React.Fragment>
    )
}

export default InputCheckbox