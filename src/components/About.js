import React,{Fragment} from 'react';
export default function about(){
  return(
    <Fragment>
    <section id="about-sec" className="about-me">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="section-title text-center">
                        <h2>About me</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ecce aliud simile dissimile. Sequi numquam pariatur, beatae architecto.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-6">
                    <ul className="nav nav-tabs">
                        <li className="active"><a data-toggle="tab" href="#about">About</a></li>
                        <li><a data-toggle="tab" href="#my-skills">My Skills</a></li>
                    </ul>

                    <div className="tab-content">
                        <div id="about" className="tab-pane fade in active">
                            <div className="about-content">
                                <h3>Hello, I'm Razz</h3>
                                <span>Web Designer &amp; Developer</span>
                                <p>Monsectetur adipisicing elit. Quos saepe odio illo sint eveniet corporis quo deserunt quia totam omnis error cum delectus commodi eaque molestiae ipsam libero, ducimus iste? Asperiores atque nostrum officiis, omnis repudiandae? Dolorem obcaecati aut modi labore voluptatum laborum, debitis quibusdam quas expedita. Veritatis incidunt libero voluptates, amet.</p>
                                <div className="social-icons">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="fa fa-dribbble"></i></a>
                                </div>
                                <button className="download-cv">&nbsp;</button>
                            </div>
                        </div>
                        <div id="my-skills" className="tab-pane fade">
                            <div className="skill-set">
                                <div className="single-skill" data-limit="80">
                                    <h5>Web Design</h5>
                                    <div className="skill-holder">
                                        <span className="parcent" style={{right: '20%'}}>80%</span>
                                        <div className="skill" style={{width:'0'}}></div>
                                    </div>
                                </div>
                                <div className="single-skill" data-limit="90">
                                    <h5>Web Development</h5>
                                    <div className="skill-holder">
                                        <span className="parcent" style={{right: '10%'}}>90%</span>
                                        <div className="skill" style={{width:'0'}}></div>
                                    </div>
                                </div>
                                <div className="single-skill" data-limit="85">
                                    <h5>Wordpress</h5>
                                    <div className="skill-holder">
                                        <span className="parcent" style={{right: '15%'}}>85%</span>
                                        <div className="skill" style={{width:'0'}}></div>
                                    </div>
                                </div>
                                <div className="single-skill noMarginBottom" data-limit="80">
                                    <h5>Graphic Design</h5>
                                    <div className="skill-holder">
                                        <span className="parcent" style={{right: '20%'}}>80%</span>
                                        <div className="skill" style={{width:'0'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    <div className="about-img">
                        <img src={require("../assets/images/about/1.jpg")} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </Fragment>
  )
}
