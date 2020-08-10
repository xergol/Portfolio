import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import img from '../img/portfolio1.JPG'

const Header = props => { 
    return (
        <Fragment>
            <header id="main-header">
                <div className="row no-gutters">
                    <div className="col-lg-4 col-md-5">
                        <img className="imgPortfiolio" src={img} alt="portfolio img" />
                    </div>
                    <div className="col-lg-8 col-md-7">
                        <div className="d-flex flex-column">
                            <div className="p-5 bg-dark text-white">
                                <div className="d-flex flex-row justify-content-between align-items-center">
                                    <h1 className="display-4">Sourabh Bankey</h1>
                                    <div className="d-none d-lg-block">
                                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/sourabhbankey11" className="text-white">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </div>
                                    <div>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sourabh-bankey-096647165/" className="text-white">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </div>
                                    <div className="d-none d-lg-block">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sourabhbankey/" className="text-white">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                    <div className="d-none d-lg-block">
                                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/xergol" className="text-white">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-black">
                                Web designer and developer
                            </div>

                            <div>
                                <div className="d-flex flex-row text-white align-items-stretch text-center">

                                    <Link to="/" className="port-item p-4 bg-primary" style={{ color: 'white', textDecoration: 'none' }}>
                                        <i className="fas fa-home fa-2x d-block"></i>
                                        <span className="d-none d-sm-block">Home</span>
                                    </Link>

                                    <Link to="/resume" className="port-item p-4 bg-success" style={{ color: 'white', textDecoration: 'none' }}>
                                        <i className="fas fa-graduation-cap fa-2x d-block"></i>
                                        <span className="d-none d-sm-block">Resume</span>
                                    </Link>

                                    <Link to="/work" className="port-item p-4 bg-warning" style={{ color: 'white', textDecoration: 'none' }}>
                                        <i className="fas fa-folder-open fa-2x d-block"></i>
                                        <span className="d-none d-sm-block">Work</span>
                                    </Link>

                                    <Link to="/contact" className="port-item p-4 bg-danger" style={{ color: 'white', textDecoration: 'none' }}>
                                        <i className="fas fa-envelope fa-2x d-block"></i>
                                        <span className="d-none d-sm-block">Contact</span>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment >
    )
}

export default Header
