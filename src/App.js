import "./css/stylesheet.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./component/Home";
import { Product } from "./Product";
import {Login} from "./login"
import {Dashboard} from "./dashboard"
import { NoMatch } from "./component/NoMatch";
import { CustomerList } from "./customerlist";
import { CustomerActions } from "./component/Dashboard/Customer/CustomerActions";

function App() {

 // return (
   // <div>Hello World Mike</div>
 // );
  return (
    <>
      <Routes>
        <Route index  path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customerlist" element={<CustomerList />} />
        <Route path="/customerActions" element={<CustomerActions />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
