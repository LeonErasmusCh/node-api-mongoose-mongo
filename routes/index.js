const { tasks, createTask, updateTask, deleteTask } = require('../controllers/main.controller');

const router = require('express').Router();

router.get('/', tasks)            
router.post('/create', createTask)            
router.put('/:id', updateTask)            
router.delete('/:id', deleteTask)            

module.exports = router;