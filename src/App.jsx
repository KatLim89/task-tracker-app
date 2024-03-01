import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Timer from "./components/Timer";
import ProtectedRoutes from "./services/ProtectedRoutes";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />

          {/* protected routes */}
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/timer" element={<Timer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
