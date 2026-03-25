import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Rcba from "./pages/Rcba";
import Umuboyii from "./pages/Umuboyii";
import Powersound from "./pages/Powersound";
import Ministry from "./pages/Ministry";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
export default function App() {
  return (
    <>
     <Navbar/>
     <ScrollToTop/>

     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/rcba" element={<Rcba/>}/>
       <Route path="/umuboyii" element={<Umuboyii/>}/>
       <Route path="/powersound" element={<Powersound/>}/>
       <Route path="/ministry" element={<Ministry/>}/>
     </Routes>
    </>
);
}