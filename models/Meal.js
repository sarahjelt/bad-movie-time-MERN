const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
  name: {
    type: String
  },
  recipeId: {
    type: String,
    required: true
  },
  url: {
    type: String
  },
  picture: {
    type: String
  }
},
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const Meal = mongoose.model('Meal', MealSchema);
module.exports = Meal;