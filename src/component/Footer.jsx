import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
     <section id="footer">
        <footer className="bg-dark text-light pt-5 pb-4">
            <div className="food-container p-2 m-4">
                <div className="row">
                    {/* <!-- Brand & Description --> */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h3 className="fw-bold">SIP & CRUNCH</h3>
                        <p>Enjoy freshly made juices, smoothies, and healthy snacks at your convenience.</p>
                        <div className="social-icons">
                            <a href="#" className="me-2 text-white"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="me-2 text-white"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="me-2 text-white"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-white"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>

                    {/* <!-- Quick Links --> */}
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5 className="fw-bold underline">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light">About Us</a></li>
                            <li><a href="#" className="text-light">Gallery</a></li>
                            <li><a href="#" className="text-light">Blogs</a></li>
                            <li><a href="#" className="text-light">FAQs</a></li>
                            <li><a href="#" className="text-light">Contact</a></li>
                        </ul>
                    </div>

                    {/* <!-- Menu --> */}
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5 className="fw-bold underline">Our Menu</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light">Juices</a></li>
                            <li><a href="#" className="text-light">Smoothies</a></li>
                            <li><a href="#" className="text-light">Healthy Snacks</a></li>
                            <li><a href="#" className="text-light">Desserts</a></li>
                            <li><a href="#" className="text-light">Tasty Snacks</a></li>
                        </ul>
                    </div>

                    {/* <!-- Contact Section --> */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5 className="fw-bold underline">Contact Us</h5>
                        <p>Monday - Friday: <span className="text-warning">8am - 4pm</span></p>
                        <p>Saturday: <span className="text-warning">8am - 12pm</span></p>
                        <div className="input-group">
                            <input type="email" className="form-control" placeholder="Your email address"/>
                            <button className="btn btn-warning">→</button>
                        </div>
                        <div className="form-check mt-2">
                            <input type="checkbox" className="form-check-input" id="privacyCheck"/>
                            <label className="form-check-label" for="privacyCheck">I agree to the <a href="#"
                                    className="text-warning">Privacy Policy</a>.</label>
                        </div>
                    </div>
                </div>

                <hr className="text-light"/>

                <div className="text-center">
                    <p className="mb-0">© 2025 Sip and Crunch. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </section>
    </>
    
  )
}

export default Footer