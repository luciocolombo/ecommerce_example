import React from "react";

function instructor(props) {
   const { title, text, avatarNum } = props;
   return (
      <div className="card col-md align-items-center mx-1 mb-2">
         <img
            src={`https://randomuser.me/api/portraits/men/${avatarNum || 56}.jpg`}
            alt="man"
            className="card-img-top rounded-circle w-25 mt-3"
         />
         <div className="card-body">
            <div className="card-title h3">{title || "asdada"}</div>
            <div className="card-text">
               {text || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe atque perspiciatis adipisci ex eos."}
            </div>
            <div className="pt-3">
               <a href="#2">
                  <i className="bi bi-facebook px-1"></i>
               </a>
               <a href="#3">
                  <i className="bi bi-instagram  px-1"></i>
               </a>
               <a href="#4">
                  <i className="bi bi-google  px-1"></i>
               </a>
               <a href="#54">
                  <i className="bi bi-align-middle  px-1"></i>
               </a>
            </div>
         </div>
      </div>
   );
}

export default instructor;
