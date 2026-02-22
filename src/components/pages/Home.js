import React, { useEffect } from 'react';
import '../../App.css';
import Cards from '../Cards';


function Home () {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <Cards />
        </>
    )
}

export default Home