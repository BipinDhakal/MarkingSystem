import { useState, useEffect } from "react";
import { getCourses } from "./Course/Services/courseService";
import CourseForm from "./CourseForm";
import CourseList from "./CourseList";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Course() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const data = await getCourses();
      setCourses(data);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  const handleEdit = (course) => {
    setSelectedCourse(course);
    setShow(true);
  };

  const handleAdd = () => {
    setSelectedCourse(null);
    setShow(true);
  };

  return (
    <div>
      <h2>Course Management</h2>
      <Button onClick={handleAdd}>Add Course</Button>
      <CourseList courses={courses} onEdit={handleEdit} refreshCourses={fetchCourses} />

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCourse ? "Edit Course" : "Add Course"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CourseForm selectedCourse={selectedCourse} refreshCourses={fetchCourses} closeModal={() => setShow(false)} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Course;
