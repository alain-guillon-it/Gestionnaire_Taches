const TaskModel = require("../models/TaskModel");

const getHome = (req, res) => {
  TaskModel.find()
    .then((documents) => {
      console.log(documents);
      res.status(200).render("home", {
        tasks: documents,
      });
    })
    .catch((err) => console.log(err));
};
const getNewTask = (req, res) => {
  res.status(200).render("new-task-form", {
    error: {
      status: false,
    },
  });
};

const postNewTask = (req, res) => {
  const body = {
    label: req.body.label,
    description: req.body.description,
    date: req.body.dateTask,
    status: false,
  };

  let errorMessage = [];

  if (body.label == "") {
    errorMessage[0] = "Le label est obligatoire";
  }
  if (body.description == "") {
    errorMessage[1] = "La description est obligatoire";
  }
  if (body.date == "") {
    errorMessage[2] = "La date est obligatoire";
  }

  if (errorMessage.length > 0) {
    res.render("new-task-form", {
      error: {
        status: true,
        message: errorMessage,
      },
    });
  } else {
    // console.log(body);
    const newTask = new TaskModel(body);
    newTask
      .save()
      .then(() => res.redirect("/"))
      .catch((err) => console.log(err));
    console.log("Data ajouté avec succès :\n\n");
    console.log(newTask);
  }
};

const getDeleteTask = (req, res) => {
  console.log(req.params.id);

  TaskModel.deleteOne({
    _id: req.params.id,
  })
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
};

module.exports = {
  getHome,
  getNewTask,
  getDeleteTask,
  postNewTask,
};
