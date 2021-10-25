import React from 'react';
import { Link } from 'react-router-dom';
import  ScrollAnimation  from 'react-animate-on-scroll';

const LinkBox = ({time}) => {
    return (
        // Use time prop to set animation duration
        <div className={`lg:w-1/4 md:w-1/2 w-full px-4`}>
            <ScrollAnimation
            duration={time}
            animateIn='fadeIn'
        >
            <h2 className={`title-font font-bold text-white tracking-widest text-md mb-3`}>CATEGORIES</h2>
            <nav className={`list-none mb-10`}>
                <li>
                    <Link className={`text-white hover:text-green-400`} to="/">First Link</Link>
                </li>
                <li>
                    <Link className={`text-white hover:text-green-400`} to="/">Second Link</Link>
                </li>
                <li>
                    <Link className={`text-white hover:text-green-400`} to="/">Third Link</Link>
                </li>
                <li>
                    <Link className={`text-white hover:text-green-400`} to="/">Fourth Link</Link>
                </li>
            </nav>
            </ScrollAnimation>
        </div>
        
    )
}

export default LinkBox;
