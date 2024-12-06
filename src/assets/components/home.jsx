import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="containerHome">
            <h1>Bienvenido! Ingrese donde guste</h1>
            <div className="links-container">
                <Link to="/tateti" className="home-link">Ir a TaTeTi</Link>
                <Link to="/tasks" className="home-link">Ir a Tasks</Link>
            </div>
        </div>
    );
};

export default Home;
