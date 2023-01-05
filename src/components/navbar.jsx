import React from "react";

function Navmenu() {
   return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
         <div className="container">
            <a href="#main" className="navbar-brand">
               Devs United
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navmenu">
               <ul className="navbar-nav ms-auto">
                  {/* <li className="nav-item align-self-center d-none d-lg-block">
                     <button id="signinNavbar" className="btn btn-primary btn-sm mx-1" data-bs-toggle="modal" data-bs-target="#signin">
                        Sign in
                     </button>
                  </li>
                  <li className="nav-item align-self-center d-none d-lg-block">
                     <button id="signupNavbar" className="btn btn-secondary btn-sm  mx-1" data-bs-toggle="modal" data-bs-target="#signup">
                        Sign up
                     </button>
                  </li> */}

                  <li className="nav-item">
                     <a href="#news" className="nav-link">
                        About us
                     </a>
                  </li>
                  <li className="nav-item">
                     <a href="#learn" className="nav-link">
                        Our work culture
                     </a>
                  </li>
                  <li className="nav-item">
                     <a href="#Faqs" className="nav-link">
                        FAQ
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}

export default Navmenu;
