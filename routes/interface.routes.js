const router = require("express").Router();
const myController = require("../controllers/Interface");

router.route("/").get(myController.getHome);

router
  .route("/task/new")
  .get(myController.getNewTask)
  .post(myController.postNewTask);

router.route("/task/delete/:id").get(myController.getDeleteTask);

module.exports = router;
