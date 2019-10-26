import React from 'react';
import {NavLink} from "react-router-dom";

const SignedInLinks = (props) =>{
    return (
        <ul className="right">
            <li><NavLink to='/create'>New project</NavLink></li>
            <li><NavLink to='/'>logout</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>NN</NavLink></li>
        </ul>
    );
};

export default SignedInLinks;
