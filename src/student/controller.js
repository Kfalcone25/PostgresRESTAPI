// Buisness logic of our routes
const pool = require("../../database");
const queries = require("./queries");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;

  // query to check if email exists
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email already exists");
    }

    // add student to database
    pool.query(
      queries.addStudent,
      [name, email, age, dob],
      (error, results) => {
        if (error) throw error;
        // 201 means its created successfully
        res.status(201).send("Student Created Seccessfully!");
        console.log("Student Created");
      }
    );
  });
};

// Look and remove by id through the params
const removeStudent = (req, res) => {
  // id comes as string so parseInt to make integer
  const id = parseInt(req.params.id);
  // check if id exists
  pool.query(queries.getStudentById, [id], (error, results) => {
    // checks for no results
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send("Student does not exist in the database");
    }

    pool.query(queries.removeStudent, [id], (error, results) => {
      if (error) throw error;
      // 200 means it went good and it worked
      res.status(200).send("Student removed successfully.");
    });
  });
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  // only update name so take name out of body
  const { name } = req.body;

  pool.query(queries.getStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    // check if student exists
    if (noStudentFound) {
      res.send("Student does not exist in the database");
    }

    // if student exists update name
    pool.query(queries.updateStudent, [name, id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Student updated successfully");
    });
  });
};

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  removeStudent,
  updateStudent,
};
