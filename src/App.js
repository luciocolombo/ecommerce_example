import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { React } from "react";
import Navbar from "./components/navbar";
import Showcase from "./components/showcase";
import News from "./components/news";
import Boxes from "./components/boxes";
import Learn from "./components/learn";
import Bottom from "./components/bottom";
import Faq from "./components/faq";
import Instructors from "./components/instructors";
import Contact from "./components/contact";

function App() {
   return (
      <>
         <Navbar />
         <Showcase />
         <News />
         <Boxes />
         <Learn />
         <Bottom />
         <Faq />
         <Instructors />
         <Contact />
      </>
   );
}

export default App;
