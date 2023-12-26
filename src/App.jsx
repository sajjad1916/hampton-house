import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import DetailedOrder from "./pages/detailOrder/DetailedOrder";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/:orderId" Component={DetailedOrder} />
      </Routes>
    </>
  );
}

export default App;
