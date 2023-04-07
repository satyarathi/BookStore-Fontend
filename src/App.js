import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./route/protectedRoute";
import AuthRoute from "./route/authRoute";
import Bookpage from "./bookpage/Bookpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRoute>
                <SignUp />
              </AuthRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/bookpage/:id" element={<Bookpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
