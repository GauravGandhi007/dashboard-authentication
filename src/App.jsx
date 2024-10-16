import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRoute><DashboardPage /></PrivateRoute>} /> {/* Private route for Dashboard */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} /> {/* Redirect to login if not authenticated */}
        <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} /> {/* Private route for Profile */}
      </Routes>
    </Router>
  );
}

export default App;
