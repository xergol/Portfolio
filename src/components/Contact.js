import React, { Fragment, useState } from 'react'
import axios from 'axios'

const Contact = props => {

    const [formData, setFormData] = useState({
        contactName: '',
        email: '',
        content: ''
    })

    const {
        contactName,
        email,
        content,
    } = formData;

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        await axios.post('/api/form', formData);
        setFormData({
            contactName: '',
            email: '',
            content: ''
        });
    }





    return (
        <Fragment>
            <div id="contact" className="collapse show">
                <div className="card card-body bg-danger text-white py-5">
                    <h2>Contact</h2>
                    <p className="lead">Let's Work Together.</p>
                </div>

                <div className="card card-body py-5">
                    <h3>Get In Touch</h3>
                    <p>If you’d like to chat about a project please fill in the form below and I’ll get back within 1-2 days.</p>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <div className="input-group input-group-lg">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-danger text-white">
                                        <i className="fas fa-user"></i>
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control bg-dark text-white"
                                    placeholder="Name"
                                    name="contactName"
                                    value={contactName}
                                    onChange={e => { onChange(e) }}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-group input-group-lg">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-danger text-white">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </div>
                                <input
                                    type="email"
                                    className="form-control bg-dark text-white"
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    onChange={e => { onChange(e) }}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-group input-group-lg">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-danger text-white">
                                        <i className="fas fa-pencil-alt"></i>
                                    </span>
                                </div>
                                <textarea
                                    className="form-control bg-dark text-white"
                                    placeholder="Content"
                                    name="content"
                                    value={content}
                                    onChange={e => { onChange(e) }}
                                ></textarea>
                            </div>
                        </div>

                        <input type="submit" class="btn btn-danger btn-block btn-lg" />
                    </form>
                </div>
            </div>
        </Fragment>
    )
}



export default Contact
