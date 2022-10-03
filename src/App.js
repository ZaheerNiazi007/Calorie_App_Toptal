import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Foods from "./pages/Foods";
import Login from "./pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import "./App.css";
import Calories from "./pages/Calories.jsx";
import Header from "./components/header/Navbar";
import RefreshToken from "./components/RefreshToken";

function App() {
  return (
    <div>
      <BrowserRouter>
        {localStorage.getItem("userInfo") ? <Header /> : null}
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/list" element={<Foods />} />
            <Route path="/calories" element={<Calories />} />
            <Route path="/refresh_token" element={<RefreshToken />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
