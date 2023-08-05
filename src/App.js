import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/User/Login";
import Signup from "./Components/User/Signup";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
