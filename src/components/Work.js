import React, { Fragment } from 'react'
import devConnector from '../img/devConnector1.jpg'
import toDoList from '../img/toDoList1.jpg'


const Work = props => {
    return (
        <Fragment>
            <div id="work" className="collapse show">
                <div className="card card-body bg-warning text-white py-5">
                    <h2>My Work</h2>
                    <p className="lead">Intrested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
                </div>

                <div className="card card-body py-5">
                    <h3>What Have I Built?</h3>
                    <p>Samples of some of my work from the past year.</p>
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <a target= "_blank" rel="noopener noreferrer" href="https://hidden-reef-42515.herokuapp.com/" data-toggle="lightbox">
                                <img src={devConnector} alt="" className="img-fluid" />
                            </a>
                        </div>
                        <div className="col-md-6">
                            <a target= "_blank" rel="noopener noreferrer" href="https://mighty-refuge-89636.herokuapp.com/" data-toggle="lightbox">
                                <img src={toDoList} alt="" className="img-fluid" />
                            </a>
                        </div>
                    </div>

                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <a href="https://unsplash.it/1200/768.jpg?image=256" data-toggle="lightbox">
                                <img src="https://unsplash.it/600.jpg?image=256" alt="" className="img-fluid" />
                            </a>
                        </div>
                        <div className="col-md-3">
                            <a href="https://unsplash.it/1200/768.jpg?image=257" data-toggle="lightbox">
                                <img src="https://unsplash.it/600.jpg?image=257" alt="" className="img-fluid" />
                            </a>
                        </div>
                        <div className="col-md-3">
                            <a href="https://unsplash.it/1200/768.jpg?image=258" data-toggle="lightbox">
                                <img src="https://unsplash.it/600.jpg?image=258" alt="" className="img-fluid" />
                            </a>
                        </div>
                        <div className="col-md-3">
                            <a href="https://unsplash.it/1200/768.jpg?image=259" data-toggle="lightbox">
                                <img src="https://unsplash.it/600.jpg?image=259" alt="" className="img-fluid" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Work
