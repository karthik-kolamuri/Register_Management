const express = require('express');
const { registerAdmin, loginAdmin, getAllUsers } = require('../controllers/adminController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/users', verifyToken, getAllUsers);

module.exports = router;
