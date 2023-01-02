import { React, useState } from "react";

function EnrollModal() {
   const [userName, setUserName] = useState("");
   const [userText, setUserText] = useState("");

   return (
      <>
         <div className="modal fade text-dark" id="enroll" tabIndex="-1" aria-labelledby="enrollModal" aria-hidden="true">
            <div className="modal-dialog ">
               <div className="modal-content ">
                  <div className="modal-header">
                     <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Enroll now
                     </h1>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                     <form>
                        <div className="mb-3">
                           <label htmlFor="recipient-name" className="col-form-label">
                              Email:
                           </label>
                           <input
                              type="text"
                              className="form-control"
                              id="recipient-name"
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)}
                           />
                        </div>
                        <div className="mb-3">
                           <label htmlFor="message-text" className="col-form-label">
                              Message:
                           </label>
                           <textarea
                              className="form-control"
                              id="message-text"
                              value={userText}
                              onChange={(e) => setUserText(e.target.value)}
                           ></textarea>
                        </div>
                     </form>
                  </div>
                  <div className="modal-footer">
                     {/*                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                     </button> */}
                     <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>
                        Send message
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
function handleSubmit() {
   alert("Sent");
}

export default EnrollModal;
