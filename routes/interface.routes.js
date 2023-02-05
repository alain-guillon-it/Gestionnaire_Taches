const router = require("express").Router();
const myController = require("../controllers/Interface");

router.route("/").get(myController.getHome);

router
  .route("/task/new")
  .get(myController.getNewTask)
  .post(myController.postNewTask);

router.get("/task/delete/:id", myController.getDeleteTask);

module.exports = router;
