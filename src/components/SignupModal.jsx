import { React, useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignupModal() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   useEffect(() => {
      setUsername("");
      setPassword("");
      return;
   }, []);

   async function handleSignup() {
      const user = {
         user: {
            name: username,
            password,
         },
      };
      axios.post("http://localhost:4000/user", user).then(showToast);
   }

   function showToast(response) {
      response.data?.createdAt ? toast("Success") : toast(response.data);
   }

   return (
      <div className="modal fade text-dark" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
         <div className="modal-dialog">
            <div className="modal-content">
               <div className="modal-header">
                  <h1 className="modal-title fs-5" id="signuph1">
                     Sign up
                  </h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body">
                  <form>
                     <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label">
                           Username:
                        </label>
                        <input
                           type="text"
                           className="form-control"
                           id="recipient-name"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                        />
                     </div>
                     <div className="mb-3">
                        <label htmlFor="message-text" className="col-form-label">
                           Password:
                        </label>
                        <input
                           className="form-control"
                           id="message-text"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                        ></input>
                     </div>
                  </form>
               </div>
               <div className="modal-footer">
                  <button type="button" className="btn btn-primary" onClick={(username, password) => handleSignup(username, password)}>
                     Sign up
                  </button>
               </div>
            </div>
         </div>
         <ToastContainer autoClose={2000} />
      </div>
   );
}

export default SignupModal;
