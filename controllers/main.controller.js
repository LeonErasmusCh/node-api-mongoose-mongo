const { request } = require("http");

let tasks = [ {
    "id": 1,
    "task": "eat"
},
{
    "id": 2,
    "task": "sleep"
}
];

const getData = (request, response) => {
    return response.status(200).json({ tasks: tasks })
}

const getById = (request, response) =>{
    const id = request.params.id
    const taskById = tasks.find(x => x.id == parseInt(id))
    return response.status(200).json(taskById)
}

const postData = (request, response) => {
    const task = request.body
    tasks.push(task)
     return response.status(200).json({ "task received": task })
}

const updateData = (request, response) => {
    const task = request.body
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].id == task.id){
            tasks.splice(tasks[i], 1)
            tasks.push({id: request.body.id, task: request.body.task})
        }
    }
    return response.status(200).json({ 'Task updated with id': task.id})
}

const deleteData = (request, response) => {
    const id = request.params.id
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].id === parseInt(id)){
            tasks.splice(tasks[i].id -1 , 1)
        }
    }

    return response.status(200).json({ 'Task Deleted with id': id})
}




module.exports = {
    getData,
    getById,
    postData,
    updateData,
    deleteData
}