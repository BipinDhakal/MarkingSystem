import React, { useEffect, useState } from 'react';
import teacherStudentMarkingService from '../Services/teacherStudentMarking';

const TeacherStudentMarking = () => {
  const [rubricData, setRubricData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [feedbackInputs, setFeedbackInputs] = useState({});

  const levels = ['Excellent', 'Good', 'Fair', 'Poor'];

  useEffect(() => {
    const fetchRubrics = async () => {
      try {
        const data = await teacherStudentMarkingService.getAllRubrics();
        setRubricData(data);
      } catch (error) {
        console.error('Failed to load rubrics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRubrics();
  }, []);


  //for savinf scores
  const handleInputChange = (rubricName, value) => {
    setFeedbackInputs(prev => ({
      ...prev,
      [rubricName]: value
    }));
  };
  const handleSubmit = async () => {
    const payload = Object.entries(feedbackInputs).map(([rubricName, score]) => ({
      rubricName,
      score
    }));

    try {
      // Replace with your actual POST API to save feedback/scores
      await teacherStudentMarkingService.submitMarks(payload);
      alert("Marks submitted successfully!");
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Submission failed. Please try again.");
    }
  };
//end saving score

  const groupByRubric = () => {
    const grouped = {};
    rubricData.forEach(({ rubricName, criteria }) => {
      if (!grouped[rubricName]) grouped[rubricName] = {};
      criteria.forEach(crit => {
        grouped[rubricName][crit.area] = crit.description;
      });
    });
    return grouped;
  };

  const groupedRubrics = groupByRubric();

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Marking</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
        <table className="table table-bordered rubric-table">
          <thead>
            <tr>
              <th>Area</th>
              {/* <th colSpan={levels.length} className="text-center">Level</th> */}
              {levels.map((level) => (
                <th key={level}>{level}</th>
              ))}
              <th>Total</th>
            </tr>
            {/* <tr>
              {levels.map((level) => (
                <th key={level}>{level}</th>
              ))}
            </tr> */}
          </thead>
          <tbody>
            {Object.entries(groupedRubrics).map(([rubricName, descriptions], idx) => (
              <tr key={idx}>
                <td><strong>{rubricName}</strong></td>
                {levels.map((level) => (
                  <td key={level}>{descriptions[level] || '-'}</td>
                ))}
                <td>
                    <input
                      type="text"
                      className="form-control"
                    //   placeholder="Enter score"
                      value={feedbackInputs[rubricName] || ''}
                      onChange={(e) => handleInputChange(rubricName, e.target.value)}
                    />
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-end mt-3">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit Marks
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TeacherStudentMarking;
