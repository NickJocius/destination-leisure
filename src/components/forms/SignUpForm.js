import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const SignUpForm = ({ handleChange, handleSubmit, values }) => {
    const {
        name,
        email,
        password
    } = values;
    return (
        <div className={`relative`}>
                        <form className={`relative bg-gray-200 w-96 h-auto rounded-2xl pt-8 pb-8 px-8 flex flex-col items-center shadow-xl z-10`}>
            
            <div className={`rounded-full w-24 h-24 bg-green-400 flex justify-center items-center`}>
                <FaUserAlt />
            </div>
            <input
                type="text"
                className={`w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4`}
                value={name}
                placeholder="Name"
                name="name"
                onChange={handleChange}
                required
            />
            <input
                type="text"
                className={`w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4`}
                value={email}
                placeholder="Email"
                name="email"
                onChange={handleChange}
                required
            />
            <input
                type="password"
                className={`w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4`}
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
                required
            />
            <button className={`w-full h-10 bg-green-400 text-white uppercase font-semibold hover:bg-yellow-200 hover:text-black transition duration-300 mb-4`}>
                SignUp
            </button>
            <Link to="#" className={`text-right mb-4 hover:text-green-400 transition duration-300`} >Already Signed Up?</Link>
        </form>
        <div
			    className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-green-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl z-0">
		    </div>
            
        </div>
    );
};

export default SignUpForm;
