import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { toast } from "react-toastify";

function ChangePassword() {
    const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
   const [loading, setLoading] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();
    // setError("");
    // setSuccess("");

    if (newPassword !== confirmNewPassword) {
      //setError("New password and confirmation do not match.");
      toast.error("New password and confirmation do not match.");
      return;
    }

     setLoading(true);

    try {
        const token = localStorage.getItem("authToken");
      const response = await fetch("https://localhost:7084/api/auth/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        credentials: "include",
        body: JSON.stringify({ currentPassword, newPassword })
      });

      const data = await response.json();

      if (response.ok) {
        //setSuccess("Password updated successfully.");
        toast.success("Password updated successfully.");
        // Optionally, clear the form fields
        setEmail("");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
      } else {
        //setError(data.message || "Failed to update password.");
        toast.error("Failed to update password.");
      }
    } catch (err) {
      //setError("An error occurred while updating the password.");
      toast.error("An error occurred while updating the password.");
    }

     setLoading(false);
  };

  return (
    <div className="container mt-5">
      <h2>Change Password</h2>
      {/* {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>} */}
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="currentPassword" className="mb-3">
          <Form.Label>Current Password</Form.Label>
          <Form.Control
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="newPassword" className="mb-3">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="confirmNewPassword" className="mb-3">
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Control
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Password"}
        </Button>
      </Form>
    </div>
  );
};

export default ChangePassword;
