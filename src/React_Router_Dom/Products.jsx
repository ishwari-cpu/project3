import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Products(props) {
    return (
        <div>
            <h1>All Component</h1>
            <Link to='/Products/All'>All</Link>
            <br />

             <Link to='/Products/Men'>Men</Link>
            <br />

             <Link to='/Products/Women'>Women</Link>
            <Outlet/>
            
        </div>
    );
}

function All(props) {
    return (
        <div>
            <h1>All Products </h1>
            
        </div>
    );
}


function Men(props) {
    return (
        <div>
            <h1>Men Products</h1>
            
        </div>
    );
}


function Women(props) {
    return (
        <div>
            <h1>Women Products</h1>
            
        </div>
    );
}




export { Products,All,Men,Women};