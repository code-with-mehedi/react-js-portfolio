import React,{Fragment} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function team(){
  return(
    <Fragment>
    <section id="team">
        <div className="team-area">
            <div className="container">
                <div className="row">
                    <div className="section-title text-center">
                        <h2>Team</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
              <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav
            >
            <div className="item">
                <div className="single-member text-center">
                    <div className="team-img">
                        <img src={require("../assets/images/team/1.jpg")} className="img-responsive" alt="team" />
                    </div>
                    <div className="team-content">
                        <h4><a href="#">Sowat Ahsan </a></h4>
                        <h6>Graphic Designer</h6>
                        <div className="overlay">
                            <div className="member-media">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="item">
                <div className="single-member text-center">
                    <div className="team-img">
                        <img src={require("../assets/images/team/2.jpg")} className="img-responsive" alt="team" />
                    </div>
                    <div className="team-content">
                        <h4><a href="#">Jhon Abrar </a></h4>
                        <h6>Web Developer</h6>
                        <div className="overlay">
                            <div className="member-media">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="item">
                <div className="single-member text-center">
                    <div className="team-img">
                        <img src={require("../assets/images/team/3.jpg")} className="img-responsive" alt="team" />
                    </div>
                    <div className="team-content">
                        <h4><a href="#">David Raz </a></h4>
                        <h6>Web Designer</h6>
                        <div className="overlay">
                            <div className="member-media">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="item">
                <div className="single-member text-center">
                    <div className="team-img">
                        <img src={require("../assets/images/team/4.jpg")} className="img-responsive" alt="team" />
                    </div>
                    <div className="team-content">
                        <h4><a href="#">Main Shahin</a></h4>
                        <h6>Programmer</h6>
                        <div className="overlay">
                            <div className="member-media">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="item">
                <div className="single-member text-center">
                    <div className="team-img">
                        <img src={require("../assets/images/team/2.jpg")} className="img-responsive" alt="team" />
                    </div>
                    <div className="team-content">
                        <h4><a href="#">Sowat Ahsan </a></h4>
                        <h6>Graphic Designer</h6>
                        <div className="overlay">
                            <div className="member-media">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="item">
                <div className="single-member text-center">
                    <div className="team-img">
                        <img src={require("../assets/images/team/3.jpg")} className="img-responsive" alt="team" />
                    </div>
                    <div className="team-content">
                        <h4><a href="#">Jhon Abrar </a></h4>
                        <h6>Web Developer</h6>
                        <div className="overlay">
                            <div className="member-media">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </OwlCarousel>

                    </div>

                </div>
            </div>
        </div>
    </section>
    </Fragment>
  )}
export default team;
