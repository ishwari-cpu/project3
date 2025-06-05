import React from 'react';
import { useParams } from 'react-router-dom';

function Stud_Details(props) {
    let {id}  = useParams()
    return (
        <div>
            <h1>Student ID:{id}</h1>
            
        </div>
    );
}

export default Stud_Details;