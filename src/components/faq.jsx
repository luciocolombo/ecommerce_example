import React from "react";

function Faq() {
   return (
      <div className="container my-5 w-75 text-center" id="Faqs">
         <h2>Frequently asked questions</h2>
         <div className="accordion mt-4" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
               <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                     className="accordion-button"
                     type="button"
                     data-bs-toggle="collapse"
                     data-bs-target="#panelsStayOpen-collapseOne"
                     aria-expanded="true"
                     aria-controls="panelsStayOpen-collapseOne"
                  >
                     How many developers do you have?
                  </button>
               </h2>
               <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                  <div className="accordion-body">
                     <strong>Now we are 25 developers all over the world</strong> We will be expanding in the following months to 30
                  </div>
               </div>
            </div>
            <div className="accordion-item">
               <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                     className="accordion-button collapsed"
                     type="button"
                     data-bs-toggle="collapse"
                     data-bs-target="#panelsStayOpen-collapseTwo"
                     aria-expanded="false"
                     aria-controls="panelsStayOpen-collapseTwo"
                  >
                     What can I expect from a quotation?
                  </button>
               </h2>
               <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div className="accordion-body">
                     <strong>Taks are usually charged on a horly base.</strong> This is the most transparent way we found to avoid tasks
                     becoming too large to handle in the expected timeframe
                  </div>
               </div>
            </div>
            <div className="accordion-item">
               <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                  <button
                     className="accordion-button collapsed"
                     type="button"
                     data-bs-toggle="collapse"
                     data-bs-target="#panelsStayOpen-collapseThree"
                     aria-expanded="false"
                     aria-controls="panelsStayOpen-collapseThree"
                  >
                     Do you have references?
                  </button>
               </h2>
               <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div className="accordion-body">
                     <strong>We have many references</strong> We respect our customer's privacy, so we only give their details in a case by
                     case basis.
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Faq;
