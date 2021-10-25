import React from 'react';

import SectionHeader from '../../headers/SectionHeader';
import DestinationCard from '../../cards/DestinationCard';

const PopDestinations = ({destinations}) => {

    const title = "Popular Destinations";
    const desc = "Commodo quis voluptate minim excepteur tempor.  Elit labore sint amet do laborum velit voluptate voluptate cupidatat. Nostrud reprehenderit mollit ad exercitation laboris et Lorem quis adipisicing id et ullamco. Ut officia laborum in Lorem aliquip elit qui sint consequat ea cillum."
    return (
        <section className={`container w-full pt-14 mx-auto`}>
            <SectionHeader title={title} desc={desc} />
            <div className={`container w-full h-xxl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-2`}>
                {destinations.length > 0 ? (
                    destinations.map((dest) => (
                        <DestinationCard key={dest.city} dest={dest}/>
                    ))    
                ) : (
                        <h4>No Data</h4>
                )
                                
            }
            </div>
        </section>
    );
};

export default PopDestinations;
