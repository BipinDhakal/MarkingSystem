import React, { useState, useEffect } from 'react';
import RubricUpload from './RubricUpload';
import RubricList from './RubricList';
import RubricForm from './RubricForm';
import rubricService from '../Services/rubricService';
import { Modal, Button } from 'react-bootstrap';

const RubricManagement = () => {
  const [rubrics, setRubrics] = useState([]);
  const [selectedRubric, setSelectedRubric] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  

  const fetchRubrics = async () => {
    const response = await rubricService.getAllRubrics();
    setRubrics(response);
  };

  useEffect(() => {
    fetchRubrics();
  }, []);

  const handleEdit = (rubric) => {
    setSelectedRubric(rubric);
    setShowEditModal(true);
  };

  const handleDelete = async (id) => {
    // await rubricService.deleteRubric(id);
    // fetchRubrics();
    const confirm = window.confirm("Are you sure you want to delete this?");
    if (confirm) {
      await rubricService.deleteRubric(id);
      fetchRubrics();
    }
  };

  const handleUpdateComplete = () => {
    fetchRubrics();
    setShowEditModal(false);
    setSelectedRubric(null);
  };

  return (
    <div>
      {/* <RubricUpload onUpload={fetchRubrics} />
      <RubricList rubrics={rubrics} onEdit={handleEdit} onDelete={handleDelete} />
      {selectedRubric && <RubricForm rubric={selectedRubric} onUpdated={fetchRubrics} />} */}

<RubricUpload onUpload={fetchRubrics} />
      <RubricList rubrics={rubrics} onEdit={handleEdit} onDelete={handleDelete} />

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Rubric</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedRubric && (
            <RubricForm rubric={selectedRubric} onUpdated={handleUpdateComplete} />
          )}
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default RubricManagement;