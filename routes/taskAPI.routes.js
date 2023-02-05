const router = require("express").Router();
const myController = require("../controllers/Api");

router.get(["/", "/task", "/task/delete"], myController.getApiRedirect);
router.get("/task/:id", myController.getApiOneTaskByID);
router.get("/tasks", myController.getApiAllTasks);
router.post("/task/add", myController.postApiAddTask);
router.delete("/task/delete/:id", myController.deleteApiOneTaskByID);

module.exports = router;
