import React, { Fragment } from 'react'
import resume from '../docs/resume.pdf'

const Footer = props => {
    return (
        <Fragment>
            <footer id="main-footer" className="p-5 bg-dark text-white">
                <div className="row">
                    <div className="col-md-6">
                        <a  href={resume} className="btn btn-outline-light" download="Sourabh Bankey Resume">
                            <i className="fas fa-cloud"></i> Download Resume
                        </a>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer
