import React from 'react';
import TripSelector from '../forms/TripSelector';



const HeroHome = ({handleChange,handleSubmit,values}) => {


    return (
        <section className={`HeroHome max-w-full bg-hero-home bg-center h-xxl `}>
            <div className={`wrapper w-full h-full flex items-center`}>
                <div className={`container mx-auto`}>
                    <h1 className={`text-center text-4xl md:text-6xl font-passion pb-2 mb-6 text-green-400`}>Destination Leisure</h1>
                    <h3 className={`text-center text-2xl md:text-3xl text-white font-passion`}>Book Your Dream Getaway Now</h3>
                    <p className={`text-center text-xl md:text-2xl text-white font-passion`}>Discover the best deals on flights, car rentals, hotels and vacation packages.</p>
                    <TripSelector
                        handleChange={handleChange}
                        values={values}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroHome;
