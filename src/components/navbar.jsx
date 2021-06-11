import React, { Component } from 'react';
import { Pill } from 'evergreen-ui';

//Stateless functional component
const NavBar = (props) => {
    return (<nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar
                <Pill display="inline-flex" margin={5} color="blue">
                    {props.totalCounters}
                </Pill>
            </a>
        </nav>);
}
 
export default NavBar;