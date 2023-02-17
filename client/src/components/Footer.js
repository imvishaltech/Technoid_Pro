import "./FooterStyles.css";
import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaFacebook } from "react-icons/fa";
const Footer = () => {
    return (
        
        <div className="footer" >
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                        
                        

                        

                            <p> 611 South DuPont Highway,  </p>
                            <p> Suite 102, Dover, DE 19901 </p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        PH:8444936249 Cell:6602385412

                        </h4>
                    </div>
                    <a href="mailto:harshit@technoidusa.com ">
                    <div className="email" >
                      <h4>
                        <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        harshit@technoidusa.com

                      </h4>
                    </div>
                  </a>
                </div>
                <div className="right">
                <h4> About Us</h4>
                <p> Technoid is a company specializing in IT and digital technology, established in 2013 with its main office located in Dover on South DuPont Highway. The company's aim is to create cutting-edge software and offer their clients cost-efficient technology solutions that are quick and adaptable to their needs. </p>
                <div className="social">
                
                <a href="https://www.facebook.com/harshit.patni.14" target="_new">
                <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                </a>

                
                <a href="https://www.linkedin.com/in/harshit-patni-53a923168/" target="_new">
                 <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>

            
 

                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
