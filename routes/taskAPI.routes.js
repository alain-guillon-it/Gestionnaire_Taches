const router = require("express").Router();
const myController = require("../controllers/Api");

router.route("/").get(myController.getApi);
router.route("/tasks").get(myController.getApiTasks);
router.route("/task").get(myController.getApiTaskRedirect);
router.route("/task/:id").get(myController.getApiTaskID);
router.route("/task/delete").get(myController.getApiTaskRedirect);
router.route("/task/delete/:id").get(myController.getApiTaskDeleteID);
router.route("/task/add").get(myController.getApiTaskAdd);

router.route("/task/add").post(myController.postApiTaskAdd);

module.exports = router;
