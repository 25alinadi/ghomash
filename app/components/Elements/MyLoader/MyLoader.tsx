import React from "react";
import styles from './MyLoader.module.css'
import {HashLoader} from "react-spinners";

const MyLoader:React.FC = () => {
    return(
        <div className={styles.wrapper}>
            {/*<div className={styles.loader}>*/}
                <HashLoader
                    color="#FC3968"
                    size={80}
                />
            {/*</div>*/}
        </div>

    )
}

export default MyLoader