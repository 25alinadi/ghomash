import {APP_SITE_URL} from "../constans/global";
import placeHolderImg from "../../public/images/placeholder.png";


export const generateMediaLink = (value: string) => {
    return APP_SITE_URL + value
}

export const generateImageLink = (value: string) => {
    return isNotEmpty(value) ? generateMediaLink(value) : placeHolderImg.src
}

export const UnauthorizedRedirect = () => {
    window.location.replace("/auth");
}

export const isNotEmpty = (value: any) => {
    return value !== null && value !== "";
}

export const isEmpty = (value: any) => {
    return value === null || value === "";
}

export const priceFormatWithUnitToman = (value: number): string => {
    return separateNumber(value / 10) + " تومان";
}

export const priceFormatToman = (value: number): string => {
    return separateNumber(value / 10);
}

export const priceFormatWithUnitRial = (value: number): string => {
    return separateNumber(value) + " ریال"
}

export const separateNumber = (Number: any) => {
    Number += '';
    Number = Number.replace(',', '');
    let x = Number.split('.');
    let y = x[0];
    let z = x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(y))
        y = y.replace(rgx, '$1' + ',' + '$2');
    return y + z;
}