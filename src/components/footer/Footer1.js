import React from 'react';
import { Link } from 'react-router-dom';
import LinkBox from './LinkBox';
import Logo from '../../assets/images/Leisure.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer1 = () => {

    return (
      
        <div className={`mb-16`}>
        <footer className={`text-gray-600 body-font bg-black`}>
            <div className={`container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col`}>
                <div className={`w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left`}>
                    <Link className={`flex title-font font-medium items-center md:justify-start justify-center text-gray-900`} to="/">
                    <img src={Logo} alt="Logo" className={`h-16 w-16 mr-2 rounded-full`}/>
                    <span className={`ml-3 text-xl text-white`}>DestinationLeisure</span>
                    </Link>
                    <p className={`mt-2 text-sm text-white`}>Aute ipsum labore nostrud ex fugiat aute consequat minim irure.</p>
                </div>
            <div className={`flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center`}>
                <LinkBox time={1}/>
                <LinkBox time={2}/>
                <LinkBox time={3}/>
                <LinkBox time={4}/>
            </div>
            </div>
            <div className={`bg-green-400`}>
            <div className={`container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row`}>
                <p className={`text-white text-sm text-center sm:text-left`}>© 2021 DestinationLeisure </p>
                <span className={`inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start`}>
                <Link className={`text-gray-200`} to="/">
                    <FaFacebookF/>
                </Link>
                <Link className={`ml-3 text-gray-200`} to="/">
                    <FaTwitter/>
                </Link>
                <Link className={`ml-3 text-gray-200`} to="/">
                    <FaInstagram/>
                </Link>
                <Link className={`ml-3 text-gray-200`} to="/">
                    <FaLinkedinIn/>
                </Link>
                </span>
            </div>
            </div>
        </footer>
        </div>


    );
};
    
export default Footer1;
