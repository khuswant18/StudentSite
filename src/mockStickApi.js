
export const mockStudentData = [
    { name: "Rajat Srivastav", email: "rajat.srivastav@gmail.com", course: "Civil Engineering" },
    { name: "Kevish Sewliya", email: "kevish.sewliya@gmail.com", course: "Electrical Engineering" },
    { name: "Ananya Sharma", email: "ananya.sharma@gmail.com", course: "Electrical Engineering" },
    { name: "Mohit Verma", email: "mohit.verma@gmail.com", course: "Information Technology" },
    { name: "Sneha Rao", email: "sneha.rao@gmail.com", course: "Biomedical Engineering" },
    { name: "Aman Kapoor", email: "aman.kapoor@gmail.com", course: "Chemical Engineering" },
    { name: "Tanvi Desai", email: "tanvi.desai@gmail.com", course: "Computer Science" },
    { name: "Yash Mehta", email: "yash.mehta@gmail.com", course: "Civil Engineering" },
    { name: "Yash Mehta", email: "yash.mehta@gmail.com", course: "Civil Engineering" },
    
  ];
  
  
  export const fetchStudents = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{ 
            resolve(mockStudentData)
        },2000)
    })
  } 
  