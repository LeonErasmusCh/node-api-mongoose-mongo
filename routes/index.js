const { getData, postData, getById ,updateData, deleteData } = require('../controllers/main.controller');

const router = require('express').Router();

// GET, POST, PUT, DELETE
router.get('/', getData)            // get all
router.get('/:id', getById)         // get by id
router.post('/', postData)          // post
router.put('/', updateData)         // update
router.delete('/:id', deleteData)   // delete

module.exports = router;