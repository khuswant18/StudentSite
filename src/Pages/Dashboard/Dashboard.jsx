import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import StudentCard from "../../components/StudentCard/StudentCard";
import { fetchStudents } from "../../mockStickApi";
import AddStudent from "../../components/AddStudent/AddStudent";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
 
function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("All");
  const [students, setStudents] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const auth = getAuth();  

  const handleViewDetails = (student) => {
    const user = auth.currentUser;
  
    if (user) {
      setSelectedStudent(student);
      setIsModalOpen(true);
    } else {
      navigate("/auth");
    }
  };
 
  useEffect(() => { 
    const savedStudents = JSON.parse(localStorage.getItem("students")); 
    

    if (savedStudents && savedStudents.length > 0) {
      setStudents(savedStudents);
      setLoading(false);
    } else {
      fetchStudents().then((data) => { 
        setStudents(data);
        localStorage.setItem("students", JSON.stringify(data));
        setLoading(false);
      });
    } 
  }, []);
 
  const handleAddStudent = (newStudent) => {

    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  return ( 
    <div className="dashboard-container">
      <div className="dashboard">
        <header className="explore-header">
          <div className="explore-header-container">
            <h1 className="college-heading">Welcome to StudySite</h1>

            <p className="college-heading-desc">
              Browse through our collection of Students across various fields.
            </p>

            <SearchBar
              placeholder="Search Students..."
              onSearch={(value) => setSearchTerm(value)}
              onFilterChange={(value) => setSelectedCourse(value)}
            /> 
          </div>
        </header>

        <div className="section-container"> 
          <AddStudent onAddStudent={handleAddStudent} />

          {Loading ? (
            <p>Loading students...</p>
          ) : (
            <StudentCard
              students={students}
              searchTerm={searchTerm}
              selectedCourse={selectedCourse}
              onViewDetails={handleViewDetails}
            />
          )} 

      {isModalOpen && selectedStudent && (
        <div className="modal-overlay"> 
          <div className="modal-card">
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
            <h2 className="modal-title">Student Profile</h2>
            <div className="modal-avatar">{selectedStudent.name[0]}</div>
            <div className="modal-info">
              <p><span>Name:</span> {selectedStudent.name}</p>
              <p><span>Email:</span> {selectedStudent.email}</p>
              <p><span>Course:</span> {selectedStudent.course}</p>
              <p><span>Student ID:</span>{Math.floor(100000 + Math.random() * 900000)}</p>
            </div>
          </div> 
        </div>
      )} 
 


        </div>
      </div>
    </div>
  );
}

export default Dashboard;
