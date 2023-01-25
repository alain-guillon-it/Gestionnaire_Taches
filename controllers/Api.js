const TaskModel = require("../models/TaskModel");

const getApi = (req, res) => {
  res.redirect("/api/tasks");
};

const getApiTasks = (req, res) => {
  TaskModel.find()
    .then((documents) => res.status(200).json(documents))
    .catch((err) => console.log(err));
};

const getApiTaskRedirect = (req, res) => {
  res.redirect("/api/tasks");
};

const getApiTaskID = (req, res) => {
  TaskModel.findById(req.params.id)
    .then((document) => {
      // console.log(document)
      res.status(200).json(document);
    })
    .catch((err) => console.log(err));
};

const getApiTaskDeleteID = (req, res) => {
  TaskModel.deleteOne({ _id: req.params.id })
    .exec()
    .then(() => res.redirect("/api/tasks"))
    .catch((err) => console.log(err));
};

const getApiTaskAdd = (req, res) => {
  res.redirect("/api/task/add");
};

const postApiTaskAdd = (req, res) => {
  const newTask = new TaskModel({
    label: "Label de l'élément",
    date: "2022-10-01",
    description: "Description de l'élément",
    status: false,
  });
  newTask
    .save()
    .then(() => res.redirect("/api/tasks"))
    .catch((err) => console.log(err));
  console.log("Data ajouté avec succès :\n\n");
  console.log(newTask);
};

module.exports = {
  getApi,
  getApiTasks,
  getApiTaskRedirect,
  getApiTaskID,
  getApiTaskDeleteID,
  getApiTaskAdd,
  postApiTaskAdd,
};
