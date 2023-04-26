import React from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import style from './toast-notify.module.css';

const ToastNotify = () => {
    return (
        <React.Fragment>
            <ToastContainer
                position="bottom-right"
                theme="light"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl
                icon={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                className={style.toastNotify}
            />
        </React.Fragment>
    )
}

export default ToastNotify;