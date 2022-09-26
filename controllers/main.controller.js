const Task = require('../models/task')



const tasks = async (req, res) => {
    const tasks = await Task.find({})

    return res.status(200).json({
        status: 'Success',
        message: 'Tasks List',
        data: tasks
    })
}

const createTask = async (req, res) => {
    const { task, completed } = req.body;
    const newTask = await Task.create({ task, completed });
    const data = await newTask.save()
    return res.status(201).json({
        status: 'Success',
        message: 'Task Created',
        data: data
    })
}


const updateTask = async (req, res) => {
    const { id } = req.params;
    const { task, completed } = req.body;

    await Task.findByIdAndUpdate(id, { task, completed });

    // 204 will not return json data
    return res.status(204).json({
        status: 'Success',
        message: 'Task Updated',
        data: null
    })
}


const deleteTask = async (req, res) => {
    const { id } = req.params;

    await Task.findByIdAndDelete(id);

    return res.status(200).json({
        status: 'Success',
        message: `Task Deleted with id ${id}`,
        data: null
    })
}


module.exports = {
    tasks,
    createTask,
    updateTask,
    deleteTask
}