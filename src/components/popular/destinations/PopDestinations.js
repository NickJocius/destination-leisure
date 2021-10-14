import React from 'react';
import SectionHeader from '../../headers/SectionHeader';

const PopDestinations = () => {

    const title = "Popular Destinations";
    const desc = "Commodo quis voluptate minim excepteur tempor.  Elit labore sint amet do laborum velit voluptate voluptate cupidatat. Nostrud reprehenderit mollit ad exercitation laboris et Lorem quis adipisicing id et ullamco. Ut officia laborum in Lorem aliquip elit qui sint consequat ea cillum."
    return (
        <section className={`container w-full pt-14 mx-auto`}>
            <SectionHeader title={title} desc={desc} />
            <div className={`container w-full h-xxl`}>

            </div>
        </section>
    );
};

export default PopDestinations;
