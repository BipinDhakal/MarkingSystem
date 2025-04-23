import React from 'react';

const RubricList = ({ rubrics, onEdit, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Rubric Name</th>
          <th>Course ID</th>
          <th>Criteria</th>
          <th>Score</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {rubrics.map((rubric) => (
          <tr key={rubric.rubricId}>
            <td>{rubric.rubricName}</td>
            <td>{rubric.courseId}</td>
            <td>{rubric.criteria[0]?.description}</td>
            <td>{rubric.criteria[0]?.maxScore}</td>
            <td>
              <button onClick={() => onEdit(rubric)} className="btn btn-warning btn-sm me-2">Edit</button>
              <button onClick={() => onDelete(rubric.rubricId)} className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RubricList;