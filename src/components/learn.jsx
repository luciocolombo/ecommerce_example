import React from "react";
import img from "../images/penguin.png";
function Learn() {
   return (
      <div className="container text-center my-5" id="learn">
         <div className="row align-items-center ">
            <div className="col-md">
               <img className="w-50" src={img} alt="linux" />
            </div>
            <div className="col-md ">
               <h2>Quality over quantity</h2>
               <p>
                  We take pride of the quality of our job, and that is why we only take one customer at a time, to ensure the utmost
                  satisfaction.
               </p>
               <p>Our satisfaction rate is 100%</p>
               <a href="#3" className="btn btn-light">
                  <i className="bi bi-chevron-right"></i>
                  Read more
               </a>
            </div>
         </div>
      </div>
   );
}

export default Learn;
