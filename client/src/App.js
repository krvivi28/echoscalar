// import Login from "./pages/login/login";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/home/home";
import Navbar from "./common/components/header/navbar";
// import ProductDetail from "./common/components/productdetail/prdetail";
import Upcoming from "./pages/upcoming/upcoming";
import Create from "./pages/create/create";
import Apply from "./pages/apply/apply";
import Schedule from "./pages/schedule";
import Edit from "./pages/edit";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
       <Route path="/" element={<Create/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/apply" element={<Apply/>}/>
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/schedule/:id" element={<Schedule/>} />
        <Route path="/edit/:id" element={<Edit/>} />
        
        {/* <Route path="/products/:productname/:productid" element={<ProductDetail/>} /> */}
        
      </Routes>
    </>
  );
};
export default App;
