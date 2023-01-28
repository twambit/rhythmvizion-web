import "./css/stylesheet.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./component/Home";
import { Product } from "./Product";
import { NoMatch } from "./component/NoMatch";

function App() {

 // return (
   // <div>Hello World Mike</div>
 // );
  return (
    <>
      <Routes>
        <Route index  path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
