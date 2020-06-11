const Task = require('../models/userModel');

exports.getToDo = (req, res) => {
    res.render('index');
}

exports.createTask = async (req, res) => {
    if (!req.body.name || !req.body.description) {
        res.render("index", {err:"Please provide a name and description for your task"});
        return;
    }

    const task = new Task({
        name: req.body.name,
        description: req.body.description,
        deadline: req.body.deadline
    });

    let duplicateName = false;

    await task.save().catch((reason) => {
        
        res.render('index', {err: "A task with this name has already been created, finish this task first!"});

        duplicateName = true;
        return;
    });
    res.render('index', {task: task.toObject()})
    return
};