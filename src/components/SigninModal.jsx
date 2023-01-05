import { React, useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SigninModal() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   useEffect(() => {
      setUsername("");
      setPassword("");
      return;
   }, []);

   async function handleSignin() {
      const user = {
         user: {
            name: username,
            password,
         },
      };
      axios.post("http://localhost:4000/signin", user).then(showToast);
   }
   function saveSession(token) {
      localStorage.setItem("auth", token);
      localStorage.setItem("username", username);
      toast("Signed in");
      window.location.reload();
   }

   function showToast(response) {
      response.data === "User does not exist" ? toast(response.data) : saveSession(response.data);
   }
   return (
      <div className="modal fade text-dark" id="signinModal" tabIndex="-1" aria-labelledby="signinModalLabel" aria-hidden="true">
         <div className="modal-dialog">
            <div className="modal-content">
               <div className="modal-header">
                  <h1 className="modal-title fs-5" id="signinh1">
                     Sign in
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
                  <button type="button" className="btn btn-primary" onClick={(username, password) => handleSignin(username, password)}>
                     Sign in
                  </button>
               </div>
            </div>
         </div>
         <ToastContainer autoClose={2000} />
      </div>
   );
}

export default SigninModal;
