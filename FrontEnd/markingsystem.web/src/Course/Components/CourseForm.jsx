import { useState, useEffect } from "react";
import { createCourse, updateCourse } from "../Services/courseService";
//import 'react-toastify/dist/ReactToastify.css';
import { Form, Button } from 'react-bootstrap';
import { toast } from "react-toastify";

function CourseForm({ selectedCourse, refreshCourses, closeModal }) {
  const [course, setCourse] = useState({
    courseName: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    if (selectedCourse) {
      setCourse(selectedCourse);
    } else {
      setCourse({ courseName: "", description: "", startDate: "", endDate: "" });
    }
  }, [selectedCourse]);

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedCourse) {
        await updateCourse(course);
        toast.success("Course updated successfully");
      } else {
        await createCourse(course);
        toast.success("Course created successfully");
      }
      refreshCourses();
      closeModal();
    } catch (err) {
      toast.error("Error saving course");
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input type="text" name="courseName" placeholder="Course Name" value={course.courseName} onChange={handleChange} required />
    //   <textarea name="description" placeholder="Description" value={course.description} onChange={handleChange} required />
    //   <input type="date" name="startDate" value={course.startDate} onChange={handleChange} required />
    //   <input type="date" name="endDate" value={course.endDate} onChange={handleChange} required />
    //   <button type="submit">{selectedCourse ? "Update" : "Create"}</button>
    // </form>

    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="courseNameInput">
        <Form.Label>Course Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Course Name"
          name="courseName"
          value={course.courseName}
          onChange={handleChange}
          required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="descriptionInput">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea" rows={3}
          name="description"
          value={course.description}
          onChange={handleChange}
          required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="startDateInput">
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="Start Date"
          name="startDate"
          value={course.startDate}
          onChange={handleChange}
          required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="endDateInput">
        <Form.Label>End Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="End Date"
          name="endDate"
          value={course.endDate}
          onChange={handleChange}
          required />
      </Form.Group>

      <Button
        variant={selectedCourse ? "success" : "primary"}
        type="submit">
        {selectedCourse ? "Update" : "Create"}
      </Button>
    </Form>

  );
}

export default CourseForm;
