import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const SectionHeader = ({title, desc}) => {
    return (
        <section className={`w-full container mb-14 bg-white`}>
            <ScrollAnimation
                duration={4}
                animateIn='fadeInLeft'
               
            >
                <h2 className={`text-black text-4xl text-center mb-4 font-passion`}>{title}</h2>
            </ScrollAnimation>
            <p className={`text-xl text-black text-center mb-4`}>{desc}</p>
        </section>
    );
};

export default SectionHeader;
