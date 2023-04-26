import React from "react"
import {ErrorMessage, Field, FieldProps} from "formik";
import {isNotEmpty} from "../../../../helpers/functions";

interface IInputProps {
    name: string,
    type?: string,
    label?: string,
    as?: string | React.ComponentType<FieldProps['field']>,
    placeholder?: string,
    inputClassName?: string,
    errorClassName?: string,
    labelClassName?: string,
    isRequired?: boolean,
    isDisabled?: boolean,
    meta?: any,
    children?: any,
    isValid? : boolean,
    defaultValue? : any,
    subContent?:string
}

const Input: React.FC<IInputProps> = (
    {
        name,
        inputClassName = null,
        label = null,
        as =  "input",
        placeholder = null,
        type = 'text',
        errorClassName = null,
        labelClassName = null,
        isRequired = false,
        isDisabled = false,
        isValid = true,
        children,
        defaultValue,
        meta,
        subContent=""
    }
) => {

    return (
        <React.Fragment>
            <div className={"mb-5"}>
                {label &&
                <label htmlFor={name}
                       className={`pr-1 mb-2 block text-md font-medium text-gray-500 flex items-center ${labelClassName ?? null}`}>
                    <span className={"ml-1"}>{label}</span>
                    {isRequired && <span className={"text-xl text-red-500"}>*</span>}
                </label>
                }
                <div>
                    <Field
                        id={name}
                        type={type}
                        name={name}
                        as={as}
                        className={`w-full ${as !== 'textarea' ? 'h-14' : null} mt-1 mb-1 border ${meta?.error ? "border-red-300" : "border-gray-300"} rounded-xl ${as === 'textarea' ? 'py-4' : null} px-6 outline-0 focus:border-primary/75 ${inputClassName ?? null}`}
                        placeholder={placeholder}
                        value={defaultValue}
                        rows={7}
                        disabled={isDisabled}
                    >
                        {children}
                    </Field>
                    {subContent && isNotEmpty(subContent) && <div className={"text-gray-500 text-sm text-right mt-1 mr-1"}>{subContent}</div>}
                    <div className={"mt-1 mr-1"}>
                        <ErrorMessage name={name} className={`text-red-500 text-sm text-right ${errorClassName ?? null}`}
                                      component={"div"}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Input