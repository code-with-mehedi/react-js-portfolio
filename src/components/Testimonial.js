import React,{Fragment} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function testimonial(){
  return(
    <Fragment>
      <section id="clients" className="testimonial">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="section-title text-center">
                          <h2>Testimonial</h2>
                          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <div className="testimonial-caro owl-carousel owl-theme">
                      <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={10}
                        nav
                    >
                          <div className="single-testimonial item">
                              <div className="clients-img">
                                  <img src={require("../assets/images/testomonial/1.png")} alt="" />
                              </div>
                              <h4>Jhon Doe</h4>
                              <span>Google</span>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quo rem optio excepturi deleniti porro voluptatem asperiores alias in aliquid velit omnis, ratione, eligendi. Ab doloribus, cumque et nam ipsam.</p>
                          </div>
                          <div className="single-testimonial item">
                              <div className="clients-img">
                                  <img src={require("../assets/images/testomonial/2.png")} alt="" />
                              </div>
                              <h4>Selly Lynda</h4>
                              <span>Microsoft</span>
                              <p>Rerum quo rem optio excepturi deleniti porro voluptatem asperiores alias in aliquid velit omnis, ratione, eligendi. Ab doloribus, cumque et nam ipsam.</p>
                          </div>
                          <div className="single-testimonial item">
                              <div className="clients-img">
                                  <img src={require("../assets/images/testomonial/3.png")} alt="" />
                              </div>
                              <h4>DK Jhon</h4>
                              <span>Yahoo</span>
                              <p>Porro voluptatem asperiores. Rerum quo rem optio excepturi deleniti. alias in aliquid velit omnis, ratione, eligendi. Ab doloribus, cumque et nam ipsam.</p>
                          </div>
                        </OwlCarousel>  
                      </div>
                  </div>
              </div>
          </div>
      </section>
      </Fragment>
    )}
    export default testimonial;
