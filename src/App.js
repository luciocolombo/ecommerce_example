import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { React } from "react";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import News from "./components/News";
import Boxes from "./components/Boxes";
import Learn from "./components/Learn";
import Bottom from "./components/Bottom";
import Faq from "./components/Faq";
import Instructors from "./components/Instructors";
import Contact from "./components/Contact";
import Toast from "./components/Toast";

function App() {
   return (
      <>
         <Toast text={`Email received`} />
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
