import React from 'react';

const TripSelector = ({ handleChange, handleSubmit, values }) => {
    
    const {
        city,
        tripDate,
        guests
    } = values;
    
    return (
        <form className={`block h-auto md:h-14 mt-4 px-2 md:px-0`} onSubmit={handleSubmit}>
            <div className={`grid grid-cols-1 md:grid-cols-12 gap-0 mt-6 h-full rounded-md md:bg-white bg-transparent`}>
                <div className={`col-span-4 my-2 md:my-0 `}>
                    <input
                        type="text"
                        placeholder="city..."
                        className={`h-full md:rounded-l-md p-4 w-full rounded-md`}
                        value={city}
                        onChange={handleChange}
                    />
                </div>
                <div className={`col-span-3 my-2 md:my-0`}>
                    <input
                        type="text"
                        name="date"
                        placeholder="Date..."
                        className={`md:rounded-none rounded-md p-4 w-full`}
                        value={tripDate}
                        onChange={handleChange}
                    />
                </div>
                <div className={`col-span-3 my-2 md:my-0`}>
                    <input
                        type="text"
                        name="guests"
                        placeholder="Guests"
                        className={`md:rounded-none rounded-md p-4 w-full`}
                        value={guests}
                        onChange={handleChange}
                    />
                </div>
                <div className={`col-span-2 rounded-md md:rounded-r-md my-2 md:my-0`}>
                    <button className={`bg-green-400 h-full md:rounded-r-md md:rounded-l-none p-4 w-full rounded-md`} value="search">Search</button>
                </div>
            </div>
            
        </form>
    );
};

export default TripSelector;
