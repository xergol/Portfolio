import React, { Fragment } from 'react'

const Resume = props => {
    return (
        <Fragment>
            <div id="resume" className="collapse show">
                <div className="card card-body bg-success text-white py-5">
                    <h2>My Resume</h2>
                    <p className="lead">Professionally connected with the web development industry and information technology for many years.</p>
                </div>

                <div className="card card-body py-5">
                    <h3>Where Have I Worked?</h3>
                    <p>Before hiring me, better know about my experiences.</p>
                    <div className="card-deck">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Cigna</h4>
                                <p className="card-text">I have worked for Cigna, an American worldwide health services organization based in Bloomfield, Connecticut.</p>
                                <p className="p-2 mb-3 bg-dark text-white">
                                    Position: UI Developer
                                </p>
                                <p className="p-2 mb-3 bg-dark text-white">
                                    Phone: 1800 102 4462
                                </p>
                            </div>
                            <div className="card-footer">
                                <h6 className="text-muted">Dates: 2016 - 2018</h6>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Florida Power & Light</h4>
                                <p className="card-text">Designed a wonderfull Idea board web application for Florida-based power utility company.</p>
                                <p className="p-2 mb-3 bg-dark text-white">
                                    Position: Angular Developer
                                </p>
                                <p className="p-2 mb-3 bg-dark text-white">
                                    Phone: 1-800-226-3545
                                </p>
                            </div>
                            <div className="card-footer">
                                <h6 className="text-muted">Dates: 2018 - 2019</h6>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">NextEra Energy</h4>
                                <p className="card-text">Designed a wonderfull control system web application for Florida-based power utility company.</p>
                                <p className="p-2 mb-3 bg-dark text-white">
                                    Position: React Developer
                                </p>
                                <p className="p-2 mb-3 bg-dark text-white">
                                    Phone: 561-691-7171
                                </p>
                            </div>
                            <div className="card-footer">
                                <h6 className="text-muted">Dates: 2019 - 2020</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default Resume
