import React,{Fragment} from 'react';
function contact(){
  return(
    <Fragment>
    <section id="contact" className="contact-sec">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="section-title text-center">
                        <h2>Contact Me</h2>
                        <p>Consequatur perspiciatis ipsam, deleniti eius. Distinctio nesciunt ipsum cumque saepe, accusamus nostrum quidem.</p>
                    </div>
                </div>
                <div className="col-md-8 col-sm-8">
                    <form action="index.html" className="contact-form">
                        <div className="form-field">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name" required />
                        </div>
                        <div className="form-field">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your email" required />
                        </div>
                        <div className="form-field textarea">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" placeholder="Your message" required></textarea>
                        </div>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                    <div className="v-bar"></div>
                </div>
                <div className="col-md-4 col-sm-4 contact-info">
                    <div className="single-info">
                        <div className="cont-info-img">
                            <i className="flaticon-24-hours-phone-service"></i>
                        </div>
                        <span>Phone</span>
                        <a href="tel:+00123456789">+00123456789</a>
                    </div>
                    <div className="single-info">
                        <div className="cont-info-img">
                            <i className="flaticon-message"></i>
                        </div>
                        <span>E-mail</span>
                        <a href="mailto:abc@example.com">abc@example.com</a>
                    </div>
                    <div className="single-info">
                        <div className="cont-info-img">
                            <i className="flaticon-placeholder"></i>
                        </div>
                        <span>Location</span>
                        <p>221B Baker Street, London</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </Fragment>
)}
export default contact;
