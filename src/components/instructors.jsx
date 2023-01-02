import React from "react";
import Instructor from "./instructor";

function Instructors() {
   const randomNum = () => Math.floor(Math.random() * 100);
   return (
      <div className="bg-primary p-5 ">
         <div className="container text-center ">
            <h3 className="text-light">Our instructors</h3>
            <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, magni.</p>
            <div className="row ">
               <Instructor text="Frontend expert" avatarNum={randomNum()} title="Larry White" />
               <Instructor text="Backend master" avatarNum={randomNum()} title="Vonheim Chavez" />
               <Instructor text="CEO & CTO" avatarNum={randomNum()} title="Lucas Baturri" />
               <Instructor text="Fullstack wizard" avatarNum={randomNum()} title="Perozzi Lamer" />
            </div>
         </div>
      </div>
   );
}

export default Instructors;
