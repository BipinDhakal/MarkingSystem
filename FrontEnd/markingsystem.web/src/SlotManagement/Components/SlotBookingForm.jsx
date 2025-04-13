import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { getStudents } from "../services/slotManagementService";
import { toast } from "react-toastify";

function SlotBookingForm({ selectedSlot, onSave }) {
  const [slot, setSlot] = useState(
    selectedSlot || {
      timeSlotId: 0,
      startTime: "",
      endTime: "",
      isClosed: false,
      maxStudents: 1,
      bookings: [
        {
          bookingId: 0,
          studentId: "",
          slotId: 0,
          studentName: "",
          startTime: "",
          endTime: ""
        }
      ]
    }
  );

    const [students, setStudents] = useState([]);
  
  useEffect(() => {
    async function fetchStudents() {
      try {
        const data = await getStudents();
        setStudents(data); 
      } catch (err) {
        //console.error("Error fetching students:", err);
        toast.error("Failed to load students");
      }
    }
    fetchStudents();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSlot((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setSlot((prev) => ({
      ...prev,
      bookings: [{ ...prev.bookings[0], [name]: value }]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(slot);  // This calls the passed onSave function
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Start Time</Form.Label>
        <Form.Control
          type="datetime-local"
          name="startTime"
          value={slot.startTime}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>End Time</Form.Label>
        <Form.Control
          type="datetime-local"
          name="endTime"
          value={slot.endTime}
          onChange={handleChange}
          required
        />
      </Form.Group>

      {/* <Form.Group className="mb-3">
        <Form.Label>Max Students</Form.Label>
        <Form.Control
          type="number"
          name="maxStudents"
          value={slot.maxStudents}
          onChange={handleChange}
          required
        />
      </Form.Group> */}

      {/* <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          label="Is Closed"
          name="isClosed"
          checked={slot.isClosed}
          onChange={handleChange}
        />
      </Form.Group> */}

      {/* <hr />
      <h5>Booking Info</h5> */}

      {/* <Form.Group className="mb-3">
        <Form.Label>Student ID</Form.Label>
        <Form.Control
          type="text"
          name="studentId"
          value={slot.bookings[0]?.studentId || ""}
          onChange={handleBookingChange}
        />
      </Form.Group> */}

<Form.Group className="mb-3" controlId="studentDropdown">
        <Form.Label>Select Student</Form.Label>
        <Form.Select 
          name="studentId" 
          value={slot.bookings[0]?.studentId || ""} 
          onChange={handleBookingChange} 
          required
        >
          <option value="">-- Select a Student --</option>
          {students.map((student) => (
            <option key={student.value} value={student.value}>
              {student.text}
            </option>
          ))}
        </Form.Select>
      </Form.Group>


      {/* <Form.Group className="mb-3">
        <Form.Label>Student Name</Form.Label>
        <Form.Control
          type="text"
          name="studentName"
          value={slot.bookings[0]?.studentName || ""}
          onChange={handleBookingChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Booking Start Time</Form.Label>
        <Form.Control
          type="text"
          name="startTime"
          value={slot.bookings[0]?.startTime || ""}
          onChange={handleBookingChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Booking End Time</Form.Label>
        <Form.Control
          type="text"
          name="endTime"
          value={slot.bookings[0]?.endTime || ""}
          onChange={handleBookingChange}
        />
      </Form.Group> */}

      <Button type="submit">Save Slot</Button>
    </Form>
  );
}

export default SlotBookingForm;
