const express = require('express');
const router = express.Router();
const mealController = require('../../controllers/mealController');

router
  .route('/user')
  .get(mealController.findAllUsers)
  .post(mealController.createUser);

router
  .route('/user/:id')
  .get(mealController.findUserById)
  .delete(mealController.removeUser);

router
  .route('/user/saved/:id')
  .put(mealController.saveMeal)
  .get(mealController.findUserById)
  .delete(mealController.removeUser);

router
  .route('/user/name/:name')
  .get(mealController.findUserByName)

router
  .route('/user/email/:email')
  .get(mealController.findUserByEmail)

router
  .route('/meal/validate')
  .post(mealController.findMealByName)

router
  .route('/user/profile/:id')
  .get(mealController.getUserProfile)
  .put(mealController.addMealToProfile)

router
  .route('/meal')
  .get(mealController.findAllMeals)
  .post(mealController.createMeal);

router
  .route('/meal/:id')
  .get(mealController.findMealById)
  .put(mealController.updateMeal)
  .delete(mealController.removeMeal);

module.exports = router;