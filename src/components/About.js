import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/ryan1.jpeg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Fields of Interest</h2>
                  <p className="address">
       				
                     <span>Software Development</span>
                     <br></br>
                     <span>Visual Media & Arts</span>
                     <br></br>
                     <span>Graphic Design</span>
                     <br></br>
                     <span>Finance & Trade</span>
                     <br></br>
                     <span>Digital Marketing</span>
                     <br></br>
                     <span>Strategic Operations</span>
                     <br></br>
       						   
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}