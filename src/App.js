import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";

const Shop = () => {
  return <div>Hi i am shop page</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='shop' element={<Shop />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
