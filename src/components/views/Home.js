import React, {useState} from 'react';
import HeroHome from '../headers/HeroHome';

const Home = () => {
    
    const [loading, setLoading] = useState(false);

    return (
        <main className={`min-h-screen`}>
            <HeroHome/>
        </main>
    )
}

export default Home
