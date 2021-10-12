import React from 'react';
import Whirl from '../../assets/images/whirl.gif';

const SuspenseLoader = () => {
    return (
        <div className={`min-h-screen min-w-full d-flex justify-center items-center`}>
            <div className={`w-200 h-300 `}>
                <img className={`w-full h-full`} src={Whirl} alt={`Whirl loader gif`}/>
            </div>
            
        </div>
    )
};

export default SuspenseLoader;
