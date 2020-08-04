import React from 'react';

import './styles/Home.css';
import platziconfLogoImage from '../images/platziconf-logo.svg';
import astronautsImage from '../images/astronauts.svg';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <div className="container">
                    <div className="row">
                        <div className="Home__col col-12 col-md-4">
                            <img className="img-fluid mb-2" src={platziconfLogoImage} alt="Platzi Conf Logo"/>

                            <h1>Badge Management System</h1>
                            <Link to="/badges" className="btn btn-primary">
                                Start
                            </Link>
                        </div>
                        <div className="Home__col">
                            <img 
                            src={astronautsImage} 
                            alt="Austronauts"
                            className="img-fluid p-4"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;