import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faWhatsapp, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import './Contact.css';
import Footer from '../../component/Footer';

const ContactPage = () => {
    return (
        <div id='contact'>
            <div className="container">
                <header>
                    <h1>Contact Us</h1>
                </header>
                <div className="content">
                    <div className="content-form">
                        <section>
                            <FontAwesomeIcon icon={faMapMarker} size="2x" />
                            <h2>Address</h2>
                            <p>
                                Lorem ipsum dolor sit. <br />
                                Lorem, ipsum dolor. <br />
                                lorem
                            </p>
                        </section>
                        <section>
                            <FontAwesomeIcon icon={faPhone} size="2x" />
                            <h2>Phone</h2>
                            <p>123-456-78901548</p>
                        </section>
                        <section>
                            <FontAwesomeIcon icon={faEnvelope} size="2x" />
                            <h2>E-mail</h2>
                            <p>dghdgqd@temporary.net</p>
                        </section>
                    </div>
                    <form>
                        <div className="form">
                            <div className="contact-form">
                                <div>
                                    <input type="text" placeholder="Adınız" required />
                                </div>
                                <div>
                                    <input type="email" placeholder="E-mail" required />
                                </div>
                                <div>
                                    <textarea placeholder="Mesajınızı Yazınız...." required></textarea>
                                </div>
                                <div>
                                    <input type="submit" name="submit" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="media">
                    <ul className="list-inline">
                        <li><FontAwesomeIcon icon={faFacebookSquare} size="2x" /></li>
                        <li><FontAwesomeIcon icon={faInstagram} size="2x" /></li>
                        <li><FontAwesomeIcon icon={faWhatsapp} size="2x" /></li>
                        <li><FontAwesomeIcon icon={faTwitterSquare} size="2x" /></li>
                    </ul>
                </div>
                <div className="empty"></div>
            </div>
                <Footer />
        </div>
    );
}

export default ContactPage;
