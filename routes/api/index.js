const router = require('express').Router();
const mealAppRoutes = require('./mealApp');
const authenticateRoutes = require('./authenticate')

router.use('/mealApp', mealAppRoutes);
router.use('/authenticate', authenticateRoutes)

module.exports = router;