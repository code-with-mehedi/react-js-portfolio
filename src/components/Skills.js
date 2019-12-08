import React,{Fragment} from 'react';
function skills(){
  return(
    <Fragment>
    <section className="skill-area parallax-window overlay-black" data-parallax="scroll" data-image-src="images/bg/3.jpg">
        <div className="container">
            <div className="row">
                <div className="ab-count">

                    <div className="col-md-3 col-sm-3 col-xs-6">
                        <div className="about-counter-list text-center">
                            <div className="informations">
                                <i className="flaticon-trophy"></i>
                                <h2 className="about-counter">200</h2>
                                <p>Win Project</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-3 col-xs-6">
                        <div className="about-counter-list text-center">
                            <div className="informations">
                                <i className="flaticon-rating"></i>
                                <h2 className="about-counter">80</h2>
                                <p>Total Clients</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-3 col-xs-6">
                        <div className="about-counter-list text-center">
                            <div className="informations">
                                <i className="flaticon-experiment-results"></i>
                                <h2 className="about-counter">4</h2>
                                <p>Years Experience</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-3 col-xs-6">
                        <div className="about-counter-list text-center">
                            <div className="informations">
                                <i className="flaticon-checked"></i>
                                <h2 className="about-counter">354</h2>
                                <p>Projects Done</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </Fragment>
  )}
export default skills;
