import "./HomeContentStyles.css";

import React from 'react';
// import Background_Video from "../assets/Background_Video.mp4";

// import IntroImg from "../assets/Intro-bg.jpg";
// <img className="Intro-Img" src={IntroImg} alt="IntroImg" />


import ShakeHands from "../assets/ShakeHands.png";




import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <div className="technoid">
   
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mask">
          </div>
          <div className="col-12 col-lg-6 content">

            
            <div id="ContainerLH">
  <div class="container px-4 py-5" id="featured-3">
    <h2 class="pb-2 border-bottom"></h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">

      <div class="feature4 col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>

        <div class="sn1">
          <h3 id="H331">Technoid </h3>
        </div>
     
      </div>


      <div class="feature4 col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>

        <div class="sn2">
          <h3 id="H33">Connecting Talent</h3>
        </div>

        
      </div>

      
    
      <div class="sn23">
          <p id="H33p">Welcome to our IT consultancy! We specialize in finding the best talent for open positions in the tech industry. Our services include applicant pre-screening, interview scheduling, and valuable feedback for both candidates and employers.Our goal is to match the right people with the right positions, and we work closely with both employers and job seekers to achieve this. Let us help you succeed in the tech industry.
          Contact us today to learn more about our impressive services.</p>
        </div> 
      

    </div>
  </div>
</div>

            

            <div className="row shakehandDiv">
              <div className="col-12 col-lg-6">
                <img className="ShakeHands" src={ShakeHands} alt="ShakeHands" />
              </div>
              <div className="col-12 col-lg-6">
                


              </div>
            </div>

            <p id="Home_ptag">A Decade of Pursuing Impactful Career Goals.</p>
            <p id="Home_p2">Leverage Our Significant Growth in Technology Expertise and Decade of Experience to Drive Effective Solutions to Your Problems.</p>
            
            <div className="col-12 col-lg-6">
                <Link to="/contact" className=" btn-light-hands"> Contact </Link>
                <Link to="/about"  className="btn-light-hands">About us </Link>
              </div>
            
            <div id="container_main">

              <div className="left1">


                <h3 id="new12" style={{ fontSize: '19px', lineHeight: 1.6, color: '#808080', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>

                  YOU CAN COUNT ON{' '}
                  <span style={{ fontSize: '40px', color: 'black' }} className="custxt">
                    TECHNOID
                  </span>{' '}
                  <br /> FOR ENHANCING YOUR WORKDAY TENANT 
                </h3>




              </div>

              <div className="right">
                <p id="new13">Our roots are in the data center, but we have evolved to become cloud experts, specializing in Workday. We recognize the importance of your choice to implement Workday as an ERP solution, a significant step towards digital transformation and modernizing HR practices. Although implementation is a crucial stage, ongoing post-production activities are just as vital for the success of any product. We provide a range of techno-functional services to help you meet your current HR needs, optimize and fully leverage the capabilities of the Workday ecosystem, and achieve the maximum return on investment. </p>

              </div>
            </div>


            <div id="Img_main">

              <div id="img_container">



                <div class="container px-4 py-5" id="featured-3">
                  <h2 class="pb-2 border-bottom"></h2>
                  <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col " >
                      <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

                      </div>
                      <div className="services-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16"> <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"/> </svg>
                      </div>

                      
                      <div className="service-name">
                        <h3 id="sixx">Optimizations And Automations</h3>
                      </div>
                      

                      <div className="service-text ">
                        <p id="six">Once you're live on Workday, you can begin to explore the numerous possibilities for adding value to your organization.</p>
                      </div>

                    </div>

                    <div className="feature col " >
                      <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

                      </div>
                      <div className="services-icon">
                      <svg width="100" height="100"viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.877075 7.49985C0.877075 3.84216 3.84222 0.877014 7.49991 0.877014C11.1576 0.877014 14.1227 3.84216 14.1227 7.49985C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49985ZM3.78135 3.21565C4.68298 2.43239 5.83429 1.92904 7.09998 1.84089V6.53429L3.78135 3.21565ZM3.21567 3.78134C2.43242 4.68298 1.92909 5.83428 1.84095 7.09997H6.5343L3.21567 3.78134ZM6.5343 7.89997H1.84097C1.92916 9.16562 2.43253 10.3169 3.21579 11.2185L6.5343 7.89997ZM3.78149 11.7842C4.6831 12.5673 5.83435 13.0707 7.09998 13.1588V8.46566L3.78149 11.7842ZM7.89998 8.46566V13.1588C9.16559 13.0706 10.3168 12.5673 11.2184 11.7841L7.89998 8.46566ZM11.7841 11.2184C12.5673 10.3168 13.0707 9.16558 13.1588 7.89997H8.46567L11.7841 11.2184ZM8.46567 7.09997H13.1589C13.0707 5.83432 12.5674 4.68305 11.7842 3.78143L8.46567 7.09997ZM11.2185 3.21573C10.3169 2.43246 9.16565 1.92909 7.89998 1.8409V6.53429L11.2185 3.21573Z" fill="currentColor" /> </svg>
                      </div>


                      <div className="service-name">
                        <h3 id="sixx">Post Implementation</h3>
                      </div>

                      <div className="service-text ">
                        <p id="six">At Technoid, we assist our clients with post-implementation activities and ensure the continuous smooth functioning of their Workday system for both present and future users.</p>
                      </div>

                    </div>




                    <div className="feature col " >
                      <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

                      </div>


                      <div className="services-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-stack" viewBox="0 0 16 16"> <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/> <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/> </svg>
                      </div>


                      <div className="service-name">
                        <h3 id="sixx">Workday Modules</h3>
                      </div>

                      <div className="service-text ">
                        <p id="six">If you've added new modules to your Workday implementation and require additional assistance from fresh perspectives and expert attention.</p>
                      </div>

                    </div>
                  </div>
                </div>



              </div>



              <div id="img_container_2">



                <div class="container px-4 py-5" id="featured-3">
                  <h2 class="pb-2 border-bottom"></h2>
                  <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">


                    <div className="feature col " >
                      <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

                      </div>
                      <div className="services-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"viewBox="0 0 384 512"><path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM192 192c35.35 0 64 28.65 64 64s-28.65 64-64 64S128 291.3 128 256S156.7 192 192 192zM288 448H96c-8.836 0-16-7.164-16-16C80 387.8 115.8 352 160 352h64c44.18 0 80 35.82 80 80C304 440.8 296.8 448 288 448z"/></svg>
                      </div>


                      <div className="service-name">
                        <h3 id="sixx">Short Term Projects</h3>
                      </div>

                      <div className="service-text ">
                        <p id="six">If you require assistance with a short-term project, our skilled consultants can provide effective support to your teams.</p>
                      </div>

                    </div>



                    <div className="feature col " >
                      <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

                      </div>
                      <div className="services-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16"> <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/> <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/> </svg>
                      </div>


                      <div className="service-name">
                      
                        <h3 id="sixx">Workday Reports and Integration</h3>
                      </div>

                      <div className="service-text ">
                        <p id="six">Technoid has expertise in creating and constructing intricate and difficult integrations.</p>
                      </div>

                    </div>


                    <div className="feature col " >
                      <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

                      </div>
                      <div className="services-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M21,12.22C21,6.73,16.74,3,12,3c-4.69,0-9,3.65-9,9.28C2.4,12.62,2,13.26,2,14v2c0,1.1,0.9,2,2,2h1v-6.1 c0-3.87,3.13-7,7-7s7,3.13,7,7V19h-8v2h8c1.1,0,2-0.9,2-2v-1.22c0.59-0.31,1-0.92,1-1.64v-2.3C22,13.14,21.59,12.53,21,12.22z"/><circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/><path d="M18,11.03C17.52,8.18,15.04,6,12.05,6c-3.03,0-6.29,2.51-6.03,6.45c2.47-1.01,4.33-3.21,4.86-5.89 C12.19,9.19,14.88,11,18,11.03z"/></svg>
                      </div>


                      <div className="service-name">
                        <h3 id="sixx">Support</h3>
                      </div>

                      <div className="service-text ">
                        <p id="six">Technoid can relieve a significant amount of workload from your team by providing support for all areas of your Workday operations.</p>
                      </div>

                    </div>




                  </div>
                </div>



              </div>
            </div>

            <div>

            <div id="img_container_3">



            <div class="container px-4 py-5" id="featured-3">
              <h2 class="pb-2 border-bottom"></h2>
              <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">


                <div className="feature2 col " >
                  <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

                  </div>
                  <div className="services-icon">
                  <svg xmlns="http://www.w3.org/2000/svg"  width="80" height="80" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                </svg>
                  </div>


                  <div className="service-name">
                    <h3 id="H32">3000</h3>
                  </div>

                  <div className="service-text ">
                    <p id="PID4">Workday Integration.</p>
                  </div>

                </div>



                <div className="feature2 col " >
                  <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

                  </div>
                  <div className="services-icon">
                  <svg xmlns="http://www.w3.org/2000/svg"  width="80" height="80" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>
                </svg>
                  </div>


                  <div className="service-name">
                    <h3 id="H32">6</h3>
                  </div>

                  <div className="service-text ">
                    <p id="PID4">Average Workday Exp(yrs).</p>
                  </div>

                </div>


                <div className="feature2 col " >
                  <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

                  </div>
                  <div className="services-icon">
                  <svg xmlns="http://www.w3.org/2000/svg"  width="80" height="80" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                </svg>
                  </div>


                  <div className="service-name">
                    <h3 id="H32">300</h3>
                  </div>

                  <div className="service-text ">
                    <p id="PID4">Project Turnaround</p>
                  </div>

                </div>

                <div className="feature2 col " >
                  <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

                  </div>
                  <div className="services-icon">
                  <svg xmlns="http://www.w3.org/2000/svg"  width="80" height="80" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                </svg>
                  </div>


                  <div className="service-name">
                    <h3 id="H32">80</h3>
                  </div>

                  <div className="service-text ">
                    <p id="PID4">Workday Client Served</p>
                  </div>

                </div>




              </div>
              </div>
              </div>

              <div id="container-4">

              <h1 id="h10">HIGH-LEVEL RELATIONSHIPS</h1>
              <p id="h11"> WITH THE INDUSTRY'S LEADING BUSINESSES</p>
              
            </div>

            <div id="container-5">

              <h1 id="h10">OUR CLIENTS</h1>

    

            </div>


            </div>




          </div>




        </div>
      </div>
    </div>
  );
};

export default HomeContent;




// <div>
//                    <Link to="/contact" className="btn2 btn-light"> Contact </Link>
//                 </div>
