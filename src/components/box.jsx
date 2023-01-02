import React from "react";

function box(props) {
   const { title, text, button, greyStyle, icon } = props;
   return (
      <div className="col-md mb-3 mx-2 mx-sm-0">
         <div className={`card h-100 text-light ${greyStyle ? "bg-secondary" : "bg-dark"}`}>
            <div className="card-body p-2">
               <div className="h1">{icon}</div>
               <h5 className="card-title p-2">{title}</h5>
               <p className="card-text p-2">
                  {text || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut consectetur a natus laborum iusto!"}
               </p>
               <a href="#a" className={`btn p-2 mb-3 ${greyStyle ? "btn-dark" : "btn-primary"}`}>
                  {button}
               </a>
            </div>
         </div>
      </div>
   );
}

export default box;
