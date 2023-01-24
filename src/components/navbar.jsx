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
               <ul className="navbar-nav ms-auto ">
                  <div style={{ display: localStorage.getItem("auth") ? "" : "none" }}>
                     <div style={{ marginTop: "5px" }} className="h4 btn btn-success btn-sm align-self-center">
                        <i class="bi bi-person-circle "></i> Welcome {localStorage.getItem("username")}
                     </div>
                     <div className="btn btn-danger btn-sm align-self-center" onClick={logout}>
                        <i class="bi bi-door-closed"></i>
                     </div>
                  </div>

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

function logout() {
   localStorage.removeItem("auth");
   localStorage.removeItem("name");
   window.location.reload();
}
export default Navmenu;
