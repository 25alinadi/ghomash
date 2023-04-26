import Cookies from 'universal-cookie';
import {isNotEmpty} from "./functions";

export const auth_cookie_key = 'ghomash_user'

const storeLoginToken = (token: string, days: number = 25) => {
    const cookies = new Cookies();
    cookies.set(auth_cookie_key, token, {
        path: '/',
        maxAge: (days * 24 * 3600) // for 25 days
    });
}

const getAuthToken = () => {
    const cookies = new Cookies();
    return isLoginUser() ? cookies.get(auth_cookie_key) : null
}

const isLoginUser = () => {
    const cookies = new Cookies();
    return (typeof cookies.get(auth_cookie_key) !== 'undefined') && isNotEmpty(cookies.get(auth_cookie_key))
}

const removeLoginToken = () => {
    const cookies = new Cookies();
    cookies.remove(auth_cookie_key,{
        path: '/',
    })
}

export {storeLoginToken, removeLoginToken, getAuthToken, isLoginUser};