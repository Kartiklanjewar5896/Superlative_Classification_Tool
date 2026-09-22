import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import Dataset from "./pages/Dataset";
import Classification from "./pages/Classification";
import Results from "./pages/Results";
import ReportsHistory from "./pages/ReportsHistory";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Public Pages */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Application */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dataset" element={<Dataset />} />
          <Route path="/classification" element={<Classification />} />
          <Route path="/results" element={<Results />} />
          <Route path="/reports-history" element={<ReportsHistory />} />
        </Route>
      </Route>

    </Routes>
  );
}

export default App;