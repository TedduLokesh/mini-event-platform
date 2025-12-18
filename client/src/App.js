import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CreateEvent from "./pages/CreateEvent";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
