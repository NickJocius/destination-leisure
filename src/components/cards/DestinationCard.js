import React, { useState } from 'react';
import CardOverlay from './CardOverlay';

const DestinationCard = ({ dest }) => {
    
    const [expanded, setExpanded] = useState('hidden');

    const handleHover = (e) => {
        if (expanded === 'hidden') {
            setExpanded('');
        } else {
        setExpanded('hidden')
    }
        
    }
    return (
        <div className={`relative md:w-60 md:h-52 w-80 h-64 lg:w-92 lg:h-60 bg-black mx-auto shadow-lg rounded-lg`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <h4 className={`text-white absolute bottom-0 left-0 p-2`}>{dest.city}</h4>
            <img src={`${process.env.PUBLIC_URL}${dest.image}`} alt={dest.city} className={`rounded-t-lg `} />
            <CardOverlay hidden={expanded}>
                <p>CardOverlay</p>
            </CardOverlay>
        </div>
    );
};

export default DestinationCard;
