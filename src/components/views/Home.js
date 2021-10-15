import React, {useState, useEffect} from 'react';
import HeroHome from '../headers/HeroHome';
import PopDestinations from '../popular/destinations/PopDestinations';
import { getTopDest } from '../../functions/destinations';

// Initial state for TripSelector form
const initialState = {
    city: '',
    tripDate: '',
    guests: 0
}

const Home = () => {
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(false);

    // set initial values for TripSelector form
   const [values, setValues] = useState(initialState);


    // function to load pop destinations using axios function
    const loadTopDestinations = () => {
        setLoading(true);
        getTopDest().then((res) => {
            setDestinations(res.data.data);
            setLoading(false);
        }).catch((err) => {
            setLoading(false);
            console.log(err);
        })
    }

    // runs loadTopDestinations function on component mount
    useEffect(() => {
        loadTopDestinations();
    },[])



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
            <PopDestinations destinations={destinations}/>
        </main>
    )
}

export default Home;
