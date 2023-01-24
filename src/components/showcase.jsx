import React from "react";
import avatar from "../images/avatar.jpg";
import EnrollModal from "./EnrollModal";
import SignupModal from "./SignupModal";
import SigninModal from "./SigninModal";

function Showcase() {
   return (
      <section className="bg-dark text-light p-5">
         <div className="container">
            <div className="d-md-flex justify-content-around text-center text-md-start">
               <div className="col-md-5 ">
                  <h1>
                     We offer a wide range of <span className="text-warning">Progamming solutions</span>
                  </h1>
                  <p>Let our professionals handle your software needs. We have the best price and customer service.</p>
                  {/*  <button className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#enroll">
                     Contact us
                  </button> */}
                  <EnrollModal />
                  <div style={{ display: localStorage.getItem("auth") ? "none" : "" }}>
                     <button
                        id="signin"
                        className="btn btn-primary m-1 btn-lg d-block w-100 mt-3"
                        data-bs-toggle="modal"
                        data-bs-target="#signinModal"
                     >
                        Sign in
                     </button>

                     <button
                        id="signup"
                        className="btn btn-secondary m-1 btn-lg d-block w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#signupModal"
                     >
                        Sign up
                     </button>
                  </div>

                  <SignupModal />
                  <SigninModal />
               </div>
               <img className="w-25 d-md-block d-none img" src={avatar} alt="dev" />
            </div>
         </div>
      </section>
   );
}

export default Showcase;
