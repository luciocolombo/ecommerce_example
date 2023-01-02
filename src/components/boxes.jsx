import React from "react";
import Box from "./box";

function boxes() {
   return (
      <div className="container mt-5 text-center px-5 ">
         <div className="row">
            <Box
               title="Lowest market price"
               text="Best value for your money"
               button="Contact us"
               icon={<i className="bi bi-basket2"></i>}
            />
            <Box
               title="Communication"
               text="Customer communication is our priority"
               button="Contact suppport"
               greyStyle={true}
               icon={<i className="bi bi-arrow-left-right"></i>}
            />
            <Box
               title="Build your future with us"
               text="Be the next unicorn company in our hands"
               button="Ask for a quotation"
               icon={<i className="bi bi-arrow-up-left-square"></i>}
            />
         </div>
      </div>
   );
}

export default boxes;
