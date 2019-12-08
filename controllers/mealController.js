const db = require('../models');

module.exports = {
  findAllUsers: function(req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUserById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUserByName: function(req, res) {
    db.User
      .find({ name: {$in: req.params.name } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findUserByEmail: function(req, res) {
    db.User
      .findOne({ name: req.params.email })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  getUserProfile: function(req, res) {
    db.User
      .findOne({ _id: req.params.id})
      .populate('planner.item')
      .exec(function(err, data) {
        if (err) console.log(err)
        else res.json(data)
    })
  },
  createUser: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateUser: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addMealToProfile: function(req, res) {
    db.User
      .findOneAndUpdate({_id: req.params.id}, { $push: {planner: {item: req.body.mealItemId}}}, { new: true })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err))
  },
  removeUser: function(req, res) {
    db.User
      .findById({ _id: req.params.id})
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllMeals: function(req, res) {
    db.Meal
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findMealById: function(req, res) {
    db.Meal
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findMealByName: function(req, res) {
    db.Meal
      .find({name: req.body.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  createMeal: function(req, res) {
    db.Meal
      .create(req.body)
      .then(console.log(req.body))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateMeal: function(req, res) {
    db.Meal
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeMeal: function(req, res) {
    db.Meal
      .findById({ _id: req.params.id})
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveMeal: function(req, res) {
    db.User
      .findOneAndUpdate({_id: req.params.id}, { $push: {planner: {item: req.body.mealItemId}}}, { new: true} )
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err))
  }
}