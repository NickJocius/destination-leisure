import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaGithub, FaGoogle, FaFacebook } from 'react-icons/fa';

const LoginForm = ({ handleChange, handleSubmit, values }) => {
    const {
        email,
        password
    } = values;

    return (
        <div className={`relative`}>
            
            <form className={`relative bg-gray-200 w-96 h-auto rounded-2xl pt-8 pb-8 px-8 flex flex-col items-center shadow-xl z-10`} onSubmit={handleSubmit}>
            
            <div className={`rounded-full w-24 h-24 bg-green-400 flex justify-center items-center`}>
                <FaUserAlt />
            </div>
            <input
                type="text"
                className={`w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4`}
                value={email}
                placeholder="Email"
                name="email"
                onChange={handleChange}
            />
            <input
                type="password"
                className={`w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4`}
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
            />
            <button className={`w-full h-10 bg-green-400 text-white uppercase font-semibold hover:bg-yellow-200 hover:text-black transition duration-300 mb-4`}>
                Login
            </button>
            <Link to="#" className={`text-right mb-4 hover:text-green-400 transition duration-300`} >Forgot password?</Link>
            <div className={`my-2 bg-gray-200 flex flex-row justify-center`}>
              <span className={`absolute bg-gray-200 px-4`}>or</span>
              <div
                className={`min-w-full bg-black mt-3 h-1`}></div>
            </div>
            <button className={`bg-red-500 text-white w-full p-2 flex flex-row justify-center gap-2 font-semibold items-center hover:bg-red-600 transition duration-100 ease-in-out mb-4`}>
                <FaGoogle />Sign with Google
            </button>
            <button className={`bg-blue-600 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-blue-700 duration-100 ease-in-out transition mb-4`}>
                <FaFacebook />Sign with Facebook
            </button>
            <button className={`bg-gray-700 text-white w-full p-2 flex flex-row justify-center font-semibold gap-2 items-center hover:bg-gray-800 duration-100 ease-in-out mb-4`}>
                <FaGithub />Sign with Github
            </button>
            
        </form>
        <div
			    className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-green-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl z-0">
		    </div>
        </div>
        
    );
};

export default LoginForm;
