// All SQL queries

// Gets all students
const getStudents = "SELECT * FROM students";

// Get student by ID
const getStudentById = "SELECT * FROM students WHERE id = $1";

// check if email exists
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";

// Add Student
const addStudent =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";

// Remove a student by id
const removeStudent = "DELETE FROM students WHERE id = $1";

// Update student by id
const updateStudent = "UPDATE students SET name = $1 WHERE id = $2";

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  removeStudent,
  updateStudent,
};
