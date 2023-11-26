import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <nav>
                    <ul>
                        <li><Link to="/State">State</Link></li>
                        <li><Link to="/state-city">State-City</Link></li>
                        <li><Link to="/temporal">Temporal</Link></li>
                        <li><Link to="/detailed">Detailed</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;