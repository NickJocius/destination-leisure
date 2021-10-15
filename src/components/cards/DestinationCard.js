import React from 'react';

const DestinationCard = ({dest}) => {
    return (
        <div className={`relative md:w-60 md:h-52 w-96 h-72 bg-black mx-auto shadow-lg`}>
            <h4 className={`text-white absolute bottom-0 left-0 p-2`}>{dest.city}</h4>
            <img src={`${process.env.PUBLIC_URL}${dest.image}`} alt={dest.city}/>
        </div>
    );
};

export default DestinationCard;
