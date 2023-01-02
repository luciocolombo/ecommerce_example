import React from "react";

function Contact() {
   return (
      <section className="container my-5 ">
         <h3 className="text-center">Contact Us</h3>
         <div className="row my-5">
            <div className="container col-md mb-5">
               <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                     <span className="fw-bold">Address: Rioja 2467, Sta</span> - Sta Office
                  </li>
                  <li className="list-group-item">
                     <span className="fw-bold">Address: Lameri 8394, USA</span> - USA Office
                  </li>
                  <li className="list-group-item">
                     <span className="fw-bold">Address: Rilok 32, California</span> - California Office
                  </li>
                  <li className="list-group-item">
                     <span className="fw-bold">Address: Batesrisi 344, Bosnia</span> - Bosnia Office
                  </li>
                  <li className="list-group-item">
                     <span className="fw-bold">Address: Walter 3042, France</span> - France Office
                  </li>
               </ul>
            </div>
            <div className="col-md border map-placeholder"></div>
         </div>
      </section>
   );
}

export default Contact;
