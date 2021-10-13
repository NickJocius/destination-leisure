import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import {bounceInDown} from 'react-animations';
import Logo from '../../assets/images/Leisure.png';

const TopNav = () => {

    const [expanded, setExpanded] = useState(false);

    const handleButton = () => {
        setExpanded(!expanded);
    }
    
    const bounceIn = keyframes`${bounceInDown}`;

    const DropDown = styled.div`animation: 1s ${bounceIn};`;

    return (
        <nav className="bg-white shadow-lg min-w-full fixed">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
                        <div>
                            <Link to="/" className={`flex items-center py-2 px-2`}>
                                <img src={Logo} alt="Logo" className={`h-16 w-16 mr-2`}/>
                            </Link>
                        </div>
                        <div className={`hidden md:flex items-center space-x-1`}>
                            <Link to="/" className={`py-4 px-2 text-green-400 font-semibold hover:text-yellow-200 transition duration-300`}>Home</Link>
                            <Link to="/" className={`py-4 px-2 text-green-400 font-semibold hover:text-yellow-200 transition duration-300`}>Flights</Link>
                            <Link to="/" className={`py-4 px-2 text-green-400 font-semibold hover:text-yellow-200 transition duration-300`}>Hotels</Link>
                            <Link to="/" className={`py-4 px-2 text-green-400 font-semibold hover:text-yellow-200 transition duration-300`}>Packages</Link>
                        </div>
                        
                    </div>
                    <div className="hidden md:flex items-center space-x-3 ">
                            <Link to="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</Link>
                            <Link to="/" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</Link>
					    </div>
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button" onClick={handleButton}>
						<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
            </div>
            <DropDown className={`${!expanded ? 'hidden' : ''} mobile-menu absolute w-full h-500 border-b-2 border-green-500 transition duration-300 bg-white`}>
				<ul className="">
					<li className="active"><Link to="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</Link></li>
					<li><Link to="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Flights</Link></li>
					<li><Link to="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Hotels</Link></li>
					<li><Link to="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Packages</Link></li>
				</ul>
			</DropDown>
            </nav>
       
        
    );
};

export default TopNav;
