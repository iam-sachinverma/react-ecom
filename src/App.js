import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navbar from "./routes/navbar/navbar.component";

const Shop = () => {
  return <div>Hi i am shop page</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        {/* when parent comp empty / index attribut will excute */}
        <Route index element={<Home />}></Route>
        <Route path='shop' element={<Shop />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
