import {BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Signup from './Components/User/Signup'
function App() {
  return (
    <Router>
   <div>
    <Signup/>
   </div>
    </Router>
  );
}

export default App;
