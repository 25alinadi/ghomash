import React from 'react';
import Select, {ActionMeta, OnChangeValue, StylesConfig} from 'react-select';
import {ISelectOptionsItem} from "../../../../contracts/select_options";
import {isNotEmpty} from "../../../../helpers/functions";

interface IInputSelectProps {
    name: string,
    handleSetValue: any,
    label?: string,
    placeholder?: string,
    inputClassName?: string,
    errorClassName?: string,
    labelClassName?: string,
    isRequired?: boolean,
    meta?: any,
    isValid?: boolean,
    isMultiple?: boolean,
    isClearable?: boolean,
    isSearchable?: boolean,
    defaultValue?: any,
    error?: any,
    options?: Array<ISelectOptionsItem>,
}

const basicStyle = (error: boolean) => ({
    backgroundColor: 'white',
    height: '56px',
    borderRadius: '12px',
    borderColor: error ? "rgba(255, 0, 0, .3)" : "rgba(0, 0, 0, .2)",
    outline: 'none',
});

const InputSelect: React.FC<IInputSelectProps> = (
    {
        name,
        handleSetValue,
        inputClassName = null,
        label = null,
        placeholder = null,
        errorClassName = null,
        labelClassName = null,
        isRequired = false,
        isValid = true,
        isMultiple = false,
        isClearable = false,
        isSearchable = true,
        error,
        defaultValue,
        options,
        meta
    }) => {

    const colourStyles: StylesConfig = {
        control: (styles) => ({...styles, ...basicStyle(typeof error !== 'undefined' && isNotEmpty(error))}),
        option:(styles,{isSelected}) => (
            {...styles,
                ':hover':{...styles[':hover'], backgroundColor:'var(--primary-light-color)', borderColor:'var(--primary-color)'},
                ':active':{...styles[':active'], backgroundColor:'var(--primary-color)'}
            }
        ),
        input: (styles) => ({...styles}),
        placeholder: (styles) => ({...styles}),
        singleValue: (styles) => ({ ...styles}),
    };

    const handlerChangeValueForMultiple = (newValue: OnChangeValue<ISelectOptionsItem, true>, actionMeta: ActionMeta<ISelectOptionsItem>) => {
        switch (actionMeta.action) {
            case "select-option":
                let tempNewValue: Array<number> = []
                newValue.map((item, _) => {
                    tempNewValue.push(item?.value!)
                })
                return tempNewValue;
            case "remove-value":
                let tempUpdateValue: Array<number> = []
                newValue.map((item, _) => {
                    if (item.value !== actionMeta.removedValue.value) {
                        tempUpdateValue.push(item.value)
                    }
                })
                return tempUpdateValue
            case "clear":
                return []
        }
    }

    const handlerChangeValueForSingle = (newValue: OnChangeValue<ISelectOptionsItem, false>, actionMeta: ActionMeta<ISelectOptionsItem>) => {
        switch (actionMeta.action) {
            case "select-option":
                return newValue?.value!
            case "remove-value":
                break
            case "create-option":
                break
            case "deselect-option":
                break
            case "pop-value":
                break
        }
    }

    return (
        <div className={"mb-5"}>
            {label &&
            <label htmlFor={name}
                   className={`pr-1 mb-2 block text-md font-medium text-gray-500 flex items-center ${labelClassName ?? null}`}>
                <span className={"ml-1"}>{label}</span>
                {isRequired && <span className={"text-xl text-red-500"}>*</span>}
            </label>
            }
            <Select
                id={name}
                name={name}
                options={options}
                onChange={(newValue, actions) => handleSetValue(isMultiple ? handlerChangeValueForMultiple(newValue, actions) : handlerChangeValueForSingle(newValue, actions))}
                value={defaultValue}
                placeholder={placeholder}
                styles={colourStyles}
                className={`basic-select ${inputClassName ?? null}`}
                isMulti={isMultiple}
                isClearable={isClearable}
                isSearchable={isSearchable}
            />
            <div className={"mt-2 mr-1"}>
                <div className={`text-red-500 text-sm text-right ${errorClassName ?? null}`}>{error ?? null}</div>
            </div>
        </div>
    )
}

export default InputSelect;