import React from "react";
import { Button } from "react-bootstrap";
import { Home, Users, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavMenu = () => {
  const navigate = useNavigate();

  return (
    <aside
      className="bg-dark text-white p-4"
      style={{ width: "250px", position: "fixed", height: "100%" }}
    >
      <h2 className="h5">Admin Dashboard</h2>
      <nav className="mt-4">
        <Button variant="link" className="text-white d-flex align-items-center gap-2" onClick={() => navigate("/dashboard")}>
          <Home size={18} /> Dashboard
        </Button>
        <Button variant="link" className="text-white d-flex align-items-center gap-2" onClick={() => navigate("/users")}>
          <Users size={18} /> Users
        </Button>
        <Button variant="link" className="text-white d-flex align-items-center gap-2" onClick={() => navigate("/settings")}>
          <Settings size={18} /> Settings
        </Button>
        <Button variant="link" className="text-white d-flex align-items-center gap-2" onClick={() => navigate("/course")}>
          <Settings size={18} /> Course
        </Button>
        <Button variant="link" className="text-white d-flex align-items-center gap-2" onClick={() => navigate("/rubric")}>
          <Settings size={18} /> Rubric
        </Button>
        <Button variant="link" className="text-white d-flex align-items-center gap-2" onClick={() => navigate("/rubriccriteria")}>
          <Settings size={18} /> Rubric Criteria
        </Button>
      </nav>
    </aside>
  );
};

export default NavMenu;
