import React from "react";

function Toast(props) {
   const text = props.text;
   return (
      <div className="toast align-items-center text-bg-primary border-0 m-5" role="alert" aria-live="assertive" aria-atomic="true">
         <div className="d-flex">
            <div className="toast-body">{text}</div>
            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
         </div>
      </div>
   );
}

export default Toast;
