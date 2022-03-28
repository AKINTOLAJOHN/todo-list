const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')

router.get('/',userController.getSigin);
router.post('/',userController.registerUser);
router.get('/todo',userController.getRegisterUser);
router.post('/user/delete',userController.deleteUser)
router.post('/user/edit',userController.editUser)
router.post('/update',userController.updateUser)



module.exports = router;