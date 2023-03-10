import React from "react";

function News() {
   return (
      <section className="bg-primary" id="news">
         <div className="container d-md-flex justify-content-around p-4">
            <h2 className="text-light">Subscribe to get special discounts</h2>

            <div className="input-group news-input">
               <input
                  id="emailSubscribe"
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="button-addon2"
               />
               <button className="btn btn-dark btn-lg" type="button" id="button-addon2" onClick={handleSubmit}>
                  Subscribe
               </button>
            </div>
         </div>
      </section>
   );
}

function handleSubmit() {
   if (!document.getElementById("emailSubscribe").value) return;
   window.$(".toast").toast("show");
}
export default News;
