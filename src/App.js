import "./style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Contact } from "./pages/contact/contact";
import { Product } from "./pages/product/product";
import { About } from "./pages/About/about";
import { Allscale } from "./pages/product/allscale";
import { Allequipment } from "./pages/product/allequipment";
import { Cansieuthi } from "./pages/product/scale/cansieuthi/cansieuthi";
import { Cancongnghiep } from "./pages/product/scale/cancongnghiep/cancongnghiep";
import { Cankythuat } from "./pages/product/scale/cankythuat/cankythuat";
import { Canphantich } from "./pages/product/scale/canphantich/canphantich";
import { Candodoam } from "./pages/product/scale/candodoam/candodoam";
let char = "/product/scale";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path={char + "/cancongnghiep/cancongnghiep"}
            element={<Cancongnghiep />}
          ></Route>
          <Route
            path={char + "/candodoam/candodoam"}
            element={<Candodoam />}
          ></Route>
          <Route
            path={char + "/cankythuat/cankythuat"}
            element={<Cankythuat />}
          ></Route>
          <Route
            path={char + "/canphantich/canphantich"}
            element={<Canphantich />}
          ></Route>
          <Route
            path={char + "/cansieuthi/cansieuthi"}
            element={<Cansieuthi />}
          ></Route>
          <Route path={"/product/allscale"} element={<Allscale />}></Route>
          <Route
            path="/product/allequipment/"
            element={<Allequipment />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
