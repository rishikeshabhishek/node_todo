const router = require("express").Router();
const TodoController = require("../controllers/TodoController");

router.get("/", TodoController.index);
router.post("/addtask", TodoController.addTask);
router.post("/updatestatus", TodoController.updateStatus);
router.post("/deletetask", TodoController.deleteTask);
router.post("/fetchtask", TodoController.fetchTask);
router.post("/updatetask", TodoController.updateTask);

module.exports = router;