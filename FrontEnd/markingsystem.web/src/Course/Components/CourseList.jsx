import { deleteCourse } from "./Course/Services/courseService";
import { toast } from "react-toastify";

function CourseList({ courses, onEdit, refreshCourses }) {
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await deleteCourse(id);
        toast.success("Course deleted successfully");
        refreshCourses();
      } catch (err) {
        toast.error("Error deleting course");
      }
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <tr key={course.courseId}>
              <td>{index + 1}</td>
              <td>{course.courseName}</td>
              <td>{course.description}</td>
              <td>{new Date(course.startDate).toLocaleDateString()}</td>
              <td>{new Date(course.endDate).toLocaleDateString()}</td>
              <td>
                <button onClick={() => onEdit(course)}>Edit</button>
                <button onClick={() => handleDelete(course.courseId)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">No courses available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default CourseList;
