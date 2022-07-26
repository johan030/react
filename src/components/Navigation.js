import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "../styles/components/navigation.scss";



const Navigation = () => {
    return (
        <div className='navigation'>
            <h2 className='logo'>John Doe</h2>
            <ul>
                <NavLink to="/">
                    <li>accueil</li>
                </NavLink>
                <NavLink to="/blog">
                    <li>blog</li>
                </NavLink>
            </ul>
            <Button type='button'>sign in</Button>
        </div>
    );
};

export default Navigation;