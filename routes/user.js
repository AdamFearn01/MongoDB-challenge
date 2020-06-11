const Router = require('express');
const router = Router();

const userController = require('../controllers/userController');

router.get('/', userController.getToDo);

router.post('/', userController.createTask);

module.exports = router;