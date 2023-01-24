const router = require("express").Router();
const myController = require("../controllers/Api");

router.route("/").get(myController.getApi);

module.exports = router;
