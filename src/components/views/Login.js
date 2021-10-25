import React, {useState} from 'react';
import PageHeader from '../headers/PageHeader';
import LoginForm from '../forms/LoginForm';

const initialState = {
    email: '',
    password: '',
}

const Login = () => {
    const [loading, setLoading] = useState(false);
    // set initial values for TripSelector form
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
        <div>
            <PageHeader>
                <h2 className={`font-black text-4xl mb-5`}>Login</h2>
                <p className={`text-center text-xl text-green-400`}>Login in to your account.</p>
            </PageHeader>
            <section className={`flex justify-center items-center min-h-screen`}>
                <LoginForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    values={values} />
            </section>
        </div>
    );
};

export default Login;
    