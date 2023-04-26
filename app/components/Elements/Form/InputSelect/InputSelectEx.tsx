import React from "react"
import {Listbox, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import {FiCheck} from "react-icons/fi"
import {ErrorMessage, Field} from "formik";
import {HiOutlineChevronDown} from "react-icons/hi";

interface IInputSelectExProps {
    name: string,
    data: Array<any>,
    selectData?: Array<any>,
    label?: string,
    placeholder?: string,
    inputClassName?: string,
    errorClassName?: string,
    labelClassName?: string,
    isRequired?: boolean,
    meta?: any,
    isValid?: boolean,
}

const InputSelectEx: React.FC<IInputSelectExProps> = ({
                                                      name,
                                                      data = [],
                                                      selectData = [],
                                                      inputClassName = null,
                                                      label = null,
                                                      placeholder = null,
                                                      errorClassName = null,
                                                      labelClassName = null,
                                                      isRequired = false,
                                                      isValid = true,
                                                      meta,
                                                  }) => {
    const [items, setItems] = useState(data)
    const [selected, setSelected] = useState(selectData)

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
                <Listbox name={name} value={selected} onChange={setSelected} multiple>
                    <div className="relative mt-1">
                        <Listbox.Button className={`w-full h-14 mt-1 mb-1 border ${meta?.error ? "border-red-300" : "border-gray-300"} rounded-xl py-2 px-2 text-right focus:outline-none focus:border-primary/75 sm:text-sm ${inputClassName ?? null}`}>
                            <Field
                                id={name}
                                name={name}
                                placeholder={placeholder}
                                value={selected.map((item) => item.title).join(', ')}
                                className={`w-full h-8`}
                            />
                            {/*{selected.map((person) => person.name).join(', ')}*/}
                            <span className="pointer-events-none absolute inset-y-0 left-[20px] flex items-center pr-2">
                                <HiOutlineChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options
                                className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {items.map((item, itemIdx) => (
                                    <Listbox.Option
                                        key={itemIdx}
                                        className={({active}) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-primary/10 text-primary' : 'text-gray-900'}`}
                                        value={item}
                                    >
                                        {
                                            ({selected}) => (
                                            <>
                                                  <span
                                                      className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                    {item.title}
                                                  </span>
                                                {selected ? (<span
                                                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary/60">
                                                      <FiCheck className="h-5 w-5" aria-hidden="true"/>
                                                    </span>) : null}
                                            </>)
                                        }
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
                <div className={"mt-1 mr-1"}>
                    <ErrorMessage name={name} className={`text-red-500 text-sm text-right ${errorClassName ?? null}`}
                                  component={"div"}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default InputSelectEx