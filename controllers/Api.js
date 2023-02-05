const TaskModel = require("../models/TaskModel");

const getApiRedirect = (req, res) => {
  res.redirect("/api/tasks");
};

const getApiAllTasks = (req, res) => {
  TaskModel.find()
    .then((documents) => res.status(200).json(documents))
    .catch((err) => console.log(err));
};

const getApiOneTaskByID = (req, res) => {
  TaskModel.findById(req.params.id)
    .then((document) => {
      // console.log(document)
      res.status(200).json(document);
    })
    .catch((err) => console.log(err));
};

const postApiAddTask = (req, res) => {
  const newTask = new TaskModel({
    label: "Label de l'élément",
    date: "2022-10-01",
    description: "Description de l'élément",
    status: req.body.status == "on" ? true : false,
  });
  newTask
    .save()
    .then(() => res.redirect("/api/tasks"))
    .catch((err) => console.log(err));
  console.log("Data ajouté avec succès :\n\n");
  console.log(newTask);
};

const deleteApiOneTaskByID = (req, res) => {
  TaskModel.deleteOne({ _id: req.params.id })
    .exec()
    .then(() => res.redirect("/api/tasks"))
    .catch((err) => console.log(err));
};

module.exports = {
  getApiRedirect,
  getApiOneTaskByID,
  getApiAllTasks,
  postApiAddTask,
  deleteApiOneTaskByID,
};
