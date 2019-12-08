import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
const header = (props) =>{
  return(
<div className="header-area-cover">
<header>
    <div className="header-area" id="sticky">
        <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-10">
                    <div className="logo-area">
                    <Link to="/"><img src={require("../assets/images/logo.png")} alt="logo" /></Link>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                    <div className="menu-area">
                        <nav>
                            <ul id="nav">
                                <li className="current"><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/team">Team</Link></li>
                                <li><Link to="/portfolio">Portfolio</Link></li>
                                <li><Link to="/clients">Client’s </Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact"> Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="mobile-menu-area">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="mobile-menu">
                        <nav id="dropdown">
                            <ul>
                                <li className="active"><a href="index.html">Home</a></li>
                                <li><a href="#about-sec">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#team">Team</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#clients">Client’s</a></li>
                                <li><a href="#news">Blog</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
</div>
)}
export default header;
