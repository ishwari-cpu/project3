import React from 'react';
import { useNavigate } from 'react-router-dom';

function About(props) {
    let navigate=useNavigate( )
    return (
        <div>
            <h1>About Component</h1>
            <button onClick={()=>{navigate('/')}}>Home</button>
            
        </div>
    );
}

export default About;