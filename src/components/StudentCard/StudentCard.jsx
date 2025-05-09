import React from "react";
import "./StudentCard.css";

function StudentCard({ searchTerm, selectedCourse, students, onViewDetails }) {
  const filteredStudents = students.filter((student) => {
    const matchesSearch = `${student.name} ${student.email}` 
      .toLowerCase() 
      .includes(searchTerm.toLowerCase()); 

    const matchesCourse =
      selectedCourse === "All" || student.course === selectedCourse;

    return matchesSearch && matchesCourse;
  });

  return (
    <div className="student-container">
      <div className="student-card"> 
        {filteredStudents.map((student, index) => (
          <div className="card" key={index}>

          <span className="badge unknown">{student.name}</span>

            <div className="card-header"> 

              <div className="badge email">
                <span className="email-label">Email:</span>{student.email}
              </div>
 
              <div className="password">
                <span className="course-label">Course:</span>{student.course}
              </div>

            </div>
            <button className="details-button" onClick={() => onViewDetails(student)}>View Details</button> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentCard;
