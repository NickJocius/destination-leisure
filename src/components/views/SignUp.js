import React, {useState} from 'react';
import SignUpForm from '../forms/SignUpForm';

const initialState = {
    name: '',
    email: '',
    password: '',
}


const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState(initialState);
    
    const handleChange = (e) => {
        // get and set the value dynamically
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Insert function to submit data to back end or client side HTTP request
        console.log(values);
        setLoading(false);
    };

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-0`}>
            <section className={`bg-signup-col bg-center bg-cover bg-no-repeat min-w-full min-h-screen`}></section>
            <section className={`flex justify-center items-center min-h-screen`}>
                <SignUpForm values={values} handleChange={handleChange} handleSubmit={handleSubmit}/>
            </section>
        </div>
    );
};

export default SignUp;
