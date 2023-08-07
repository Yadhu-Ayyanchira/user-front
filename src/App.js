import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/User/Login";
import Signup from "./Components/User/Signup";
import Home from "./Components/User/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
