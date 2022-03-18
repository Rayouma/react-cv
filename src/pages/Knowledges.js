import React from 'react';
import Experience from '../Components/Knowledges/Experience';
import Hobbies from '../Components/Knowledges/Hobbies';
import Lnaguages from '../Components/Knowledges/Lnaguages';
import OthersSkils from '../Components/Knowledges/OthersSkils';
import Navigation from '../Components/Navigation';

const Knowledges = () => {
    return (
        <div className='knowledges'>
            <Navigation/>
        <div className='knowledgesContent'>
            <Lnaguages/>
            <Experience/>
            <OthersSkils/>
            <Hobbies/>
    
        </div>
        </div>
    );
};

export default Knowledges;