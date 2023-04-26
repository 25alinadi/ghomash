import {toast} from "react-toastify";

const useToastNotify = () => {
    const toastNotify = (type: string, message: string) => {
        if (message) {
            switch (type) {
                case 'error':
                    toast.error(message)
                    break;
                case 'success':
                    toast.success(message)
                    break;
                case 'warning':
                    toast.warning(message)
                    break;
                case 'info':
                    toast.info(message)
                    break;
                default:
                    toast.info(message)
                    break;
            }
        }
    }

    return {toastNotify}
}

export default useToastNotify;