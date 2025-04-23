import React, { useState } from 'react';
import rubricService from '../Services/rubricService';

const RubricUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    //await rubricService.uploadRubric(file);
    //onUpload();
    try {
        await rubricService.uploadRubric(file);
        alert('Upload successful!');
        onUpload();
      } catch (error) {
        console.error('Upload failed:', error);
        alert('Upload failed.');
      }
  
  };

  return (
    <div className="mb-4">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className="btn btn-primary ms-2">Upload</button>
    </div>
  );
};

export default RubricUpload;