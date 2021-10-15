import React from 'react';
import styles from './SuspenseLoader.module.css';

const SuspenseLoader = () => {
    //TODO add licensed gif
    return (
        <div className={`min-h-screen min-w-full d-flex justify-center items-center`}>
            
            <div className={`${styles.lds_ripple}`}><div></div><div></div></div>
           
            
        </div>
    )
};

export default SuspenseLoader;
