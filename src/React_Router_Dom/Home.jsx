import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home(props) {
    let navigate =useNavigate()
    return (
        <div>
            <h1>Home Component</h1>
            <button onClick={()=>{navigate('about')}}>About</button>
            
        </div>
    );
}

export default Home;