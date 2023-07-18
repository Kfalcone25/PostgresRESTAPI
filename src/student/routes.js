// ALl of our student routes

const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getStudents);
// Creating data to our database means use POST
router.post("/", controller.addStudent);
// Route to get students by Id
router.get("/:id", controller.getStudentById);
// Update Student
router.put("/:id", controller.updateStudent);
// Delete student by id Router
router.delete("/:id", controller.removeStudent);

module.exports = router;
