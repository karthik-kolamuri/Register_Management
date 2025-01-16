const express = require('express');
const { registerUser, loginUser, getUserDetails, updateUserDetails, deactivateUser } = require('../controllers/userController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', verifyToken, getUserDetails);
router.put('/me', verifyToken, updateUserDetails);
router.delete('/me', verifyToken, deactivateUser);

module.exports = router;
