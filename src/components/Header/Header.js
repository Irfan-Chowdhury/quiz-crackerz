import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-primary text-light">
            <div className="container-fluid">
                <h1>Quiz Crakers</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="" className="text-light nav-link active">Topic</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="statistics" className="text-light nav-link active">Statistics</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="blog" className="text-light nav-link active">Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;