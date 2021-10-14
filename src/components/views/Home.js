import React, {useState} from 'react';
import HeroHome from '../headers/HeroHome';

// Initial state for TripSelector form
const initialState = {
    city: '',
    tripDate: '',
    guests: 0
}

const Home = () => {

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
        <main className={`min-h-screen`}>
            <HeroHome
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                values={values}
            />
        </main>
    )
}

export default Home;
