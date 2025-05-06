import React from 'react';

function FileUploader({ onUploadComplete }) {
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const text = await file.text(); // read file content
    onUploadComplete(text); // pass it to parent
  };

  return (
    <div>
      <p>Select a code file to start typing:</p>
      <input type="file" accept=".js,.py,.txt,.ts,.java,.cpp" onChange={handleFileChange} />
    </div>
  );
}

export default FileUploader;