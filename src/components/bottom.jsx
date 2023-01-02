import React from "react";
import reactImg from "../images/react.svg";

function Bottom() {
   return (
      <div className="bg-dark">
         <div className="container bg-dark text-light text-center p-5">
            <div className="row">
               <div className="col-md m-auto ">
                  <h3>We work with all web technologies</h3>
                  <p>Do you have a favourite framework to choose from? Just tell us.</p>
                  <p>You do not have technical knowledge? That is good too. Leave everything to us</p>
                  <a href="#4" className="btn btn-light">
                     <i className="bi bi-chevron-right"></i>
                     Contact us
                  </a>
               </div>
               <div className="col-md m-auto">
                  <img className="w-100 mt-sm-5" src={reactImg} alt="react" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Bottom;
