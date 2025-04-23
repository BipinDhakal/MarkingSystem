import React from "react";
import { Button } from "react-bootstrap";
import { Home, Users, Settings, Book, ClipboardList, List, LogOut, Lock, TimerIcon, TimerReset  } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavMenu = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Call logout API
      //await fetch("/api/logout", { method: "POST", credentials: "include" });

      // Clear authentication data (modify as needed)
      localStorage.removeItem("authToken");
      sessionStorage.clear();
      // document.cookie =
      //   "authToken=; expires=Tue, 25 March 2025 00:00:00 UTC; path=/;";

      // Redirect to login page
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

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
          <Book size={18} /> Course
        </Button>
        <Button variant="link" className="text-white d-flex align-items-center gap-2" onClick={() => navigate("/rubric")}>
          <ClipboardList size={18} /> Rubric
        </Button>
        <Button variant="link" className="text-white d-flex align-items-center gap-2" onClick={() => navigate("/rubriccriteria")}>
          <List size={18} /> Rubric Criteria
        </Button>
        <Button variant="link" className="text-white d-flex align-items-center gap-2" onClick={() => navigate("/timeslot")}>
          <TimerReset size={18} /> Time Slot
        </Button>
        <Button variant="link" className="text-white d-flex align-items-center gap-2" onClick={() => navigate("/booking")}>
          <TimerIcon size={18} /> Booking
        </Button>

        <Button variant="link" className="text-white d-flex align-items-center gap-2" onClick={() => navigate("/slotbooking")}>
          <TimerIcon size={18} /> SlotBooking
        </Button>
        <Button variant="link" className="text-white d-flex align-items-center gap-2" onClick={() => navigate("/rubricmanagement")}>
          <TimerIcon size={18} /> Rubric Management
        </Button>

        <Button
          variant="link"
          className="text-white d-flex align-items-center gap-2"
          onClick={() => navigate("/change-password")}
        >
          <Lock size={18} /> Change Password
        </Button>

        {/* <Button variant="link" className="text-white d-flex align-items-center gap-2" onClick={() => navigate("/")}>
          <Settings size={18} /> LogOut
        </Button> */}

<Button
          variant="link"
          className="text-white d-flex align-items-center gap-2"
          onClick={handleLogout}
        >
          <LogOut size={18} /> Logout
        </Button>

      </nav>
    </aside>
  );
};

export default NavMenu;
