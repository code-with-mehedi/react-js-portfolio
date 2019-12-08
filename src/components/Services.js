import React,{Fragment} from 'react';
function service(){
  return(
    <Fragment>
    <section id="services" className="services-area">
        <div className="container">
            <div className="row">
                <div className="section-title text-center">
                    <h2>Services</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-6 single-service">
                    <div className="service-icon">
                        <img src={require("../assets/images/editor.png") } alt="" />
                    </div>
                    <h3>Web design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ratione id rerum enim, soluta expedita libero tempora voluptas.</p>
                </div>
                <div className="col-md-4 col-sm-6 single-service">
                    <div className="service-icon">
                        <img src={require("../assets/images/diamond.png")} alt="" />
                    </div>
                    <h3>UI design</h3>
                    <p>Aperiam tempora, ipsa et! Dolorum repellendus quas, quae iste non animi. Ruae repellendus quas aperiam tempora. Consectetur elit.</p>
                </div>
                <div className="col-md-4 col-sm-6 single-service">
                    <div className="service-icon">
                        <img src={require("../assets/images/coding.png")} alt="" />
                    </div>
                    <h3>Web development</h3>
                    <p>Ipsa et! Dolorum repellendus quas, quae iste non animi. Lorem ipsum dolor sit amet, consectetur adicing elit. Quae iste non animi.</p>
                </div>
                <div className="col-md-4 col-sm-6 single-service">
                    <div className="service-icon">
                        <img src={require("../assets/images/wordpress.png")} alt="" />
                    </div>
                    <h3>WordPress</h3>
                    <p>Consectetur adipisicing elit. Possimus ratione id rerum enim, soluta expedita libero voluptas eius isteorem ipsum dolor sit amet.</p>
                </div>
                <div className="col-md-4 col-sm-6 single-service">
                    <div className="service-icon">
                        <img src={require("../assets/images/browser.png")} alt="" />
                    </div>
                    <h3>SEO</h3>
                    <p>Possimus ratione id rerum enim, soluta expedita libero voluptas eius iste. Aperiam tempora, ipsa et! Dolorum repellendus quas.</p>
                </div>
                <div className="col-md-4 col-sm-6 single-service">
                    <div className="service-icon">
                        <img src={require("../assets/images/customer-service.png")} alt="" />
                    </div>
                    <h3>Customer Support</h3>
                    <p>Dolorum repellendus quas, quae iste non animi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa voluptas iste.</p>
                </div>
            </div>
        </div>
    </section>
    </Fragment>
  )
}
export default service
