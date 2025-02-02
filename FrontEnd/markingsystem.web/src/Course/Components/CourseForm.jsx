import  { useState, useEffect } from "react";
import { createCourse, updateCourse } from "./Course/Services/courseService";
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
    <form onSubmit={handleSubmit}>
      <input type="text" name="courseName" placeholder="Course Name" value={course.courseName} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={course.description} onChange={handleChange} required />
      <input type="date" name="startDate" value={course.startDate} onChange={handleChange} required />
      <input type="date" name="endDate" value={course.endDate} onChange={handleChange} required />
      <button type="submit">{selectedCourse ? "Update" : "Create"}</button>
    </form>
  );
}

export default CourseForm;
