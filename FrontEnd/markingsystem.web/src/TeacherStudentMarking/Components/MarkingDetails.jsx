import React, { useEffect, useState } from "react";
import teacherStudentMarkingService from '../Services/teacherStudentMarking';

const StudentGroupedMarkingTable = () => {
  const [groupedData, setGroupedData] = useState([]);

  useEffect(() => {
    fetchGroupedMarkings();
  }, []);

  const fetchGroupedMarkings = async () => {
    try {
      const data = await teacherStudentMarkingService.getAllGroupedMarkings();
      setGroupedData(data);
    } catch (error) {
      console.error("Error fetching grouped markings:", error);
    }
  };

  const getUniqueRubrics = () => {
    const rubrics = new Set();
    groupedData.forEach((entry) => {
      entry.feedbackDetails.forEach((fd) => rubrics.add(fd.rubricName));
    });
    return Array.from(rubrics);
  };

  const uniqueRubrics = getUniqueRubrics();

  const calculateTotal = (feedbackDetails) => {
    return feedbackDetails.reduce((sum, fd) => sum + fd.score, 0);
  };

  return (
    <div className="container mt-4">
      {groupedData.length > 0 ? (
        groupedData.map((studentGroup, idx) => (
          <div key={idx} className="mb-5">
            <h4>Student Name: {studentGroup.studentId}</h4>
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>Marked By</th>
                  {uniqueRubrics.map((rubric, index) => (
                    <th key={index}>{rubric}</th>
                  ))}
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{studentGroup.markedBy}</td>
                  {uniqueRubrics.map((rubric, index) => {
                    const feedback = studentGroup.feedbackDetails.find(fd => fd.rubricName === rubric);
                    return <td key={index}>{feedback ? feedback.score : 0}</td>;
                  })}
                  <td>{calculateTotal(studentGroup.feedbackDetails)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <p>No Markings Found</p>
      )}
    </div>
  );
};

export default StudentGroupedMarkingTable;
