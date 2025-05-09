import React, { useState } from 'react';
import './AddStudent.css';

function AddStudent({ onAddStudent }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && course) {
      onAddStudent({ name, email, course }); 
      setName('');
      setEmail('');
      setCourse('');  
    } else { 
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="student-form-container">
    <form className="student-form" onSubmit={handleSubmit}>
      <label className="name">Name:</label> 

      <input 
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter student name"
      />
      
      <label className="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter student email"
      />

      <label className="course">Course:</label>
      <select
        id="course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      >
        <option value="">Select Course</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Mechanical Engineering">Mechanical Engineering</option>
        <option value="Civil Engineering">Civil Engineering</option>
        <option value="Information Technology">Information Technology</option>
        <option value="Biomedical Engineering">Biomedical Engineering</option>
      </select>

      <button type="submit">Add </button>
    </form>
    </div>
  );
}

export default AddStudent;
