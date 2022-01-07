const TodoModel = require("../models/Todo");

exports.index = (req, res) => {
    TodoModel.find().then(task => {
        res.render("index", {
            title: "Todo ApP",
            tasks: task
        })
    })
}

exports.addTask = (req, res) => {
    TodoModel({
        task: req.body.task
    }).save().then(result => {
        console.log("Task Added Successfully...");
        res.redirect("/");
    }).catch(err => {
        console.log("Task Not Added...");
        res.redirect("/");
    })
}

exports.updateStatus = (req, res) => {
    TodoModel.findById(req.body.taskId, (err, data) => {
        if (!err) {
            if (data.isCompleted) {
                TodoModel.findByIdAndUpdate(req.body.taskId, {
                    isCompleted: false
                }).then(result => {
                    console.log("Data upadted true to false");
                    res.send("Done");
                }).catch(err => {
                    console.log("Data not upadted true to false");
                })
            } else {
                TodoModel.findByIdAndUpdate(req.body.taskId, {
                    isCompleted: true
                }).then(result => {
                    console.log("Data upadted false to true");
                    res.send("Done");
                }).catch(err => {
                    console.log("Data not upadted false to true");
                })
            }
        }
    })
}

exports.deleteTask = (req, res) => {
    TodoModel.findByIdAndRemove(req.body.taskId).then(result => {
        console.log("Task deleted...");
        res.send("Task Deleted")
    }).catch(err => {
        console.log("Task Not Deleted");
        res.send("Task Not Deleted")

    })
}

exports.fetchTask = (req, res) => {
    TodoModel.findById(req.body.taskId, (err, data) => {
        console.log(data);
        res.send(data)
    })
}

exports.updateTask = (req, res) => {
    TodoModel.findByIdAndUpdate(req.body.taskid, {
        task: req.body.task
    }).then(result => {
        console.log("Task Updated...");
        res.redirect("/");
    }).catch(err => {
        console.log(err, "Task Not Updated...");
        res.redirect("/");
    })
}