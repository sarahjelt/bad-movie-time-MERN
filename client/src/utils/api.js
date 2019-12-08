import axios from 'axios';

export default {
  searchByQuery: function(query) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=6df7d06e1b9b586ab617bf9997934aaa&query=${query}&include_adult=false`)
      .then(res => res.json())
  },
  createNewUser: function(userData) {
    return axios.post('/api/authenticate/signup', userData)
  },
  authenticateUser: function(userData) {
    return axios.post('/api/authenticate/signin', userData)
  },
  addMealToDB: function(mealItem) {
    //console.log('this is the', JSON.stringify(mealItem))
    return axios.post('/api/mealApp/meal', mealItem)
  },
  getMealIdIfExists: function(mealItem) {
    //console.log('mealItem, finding the id', mealItem);
    return axios.post('/api/mealApp/meal/validate', mealItem)
  },
  getSavedMeals: function(id) {
    return axios.get(`/api/mealApp/user/profile/${id}`)
  },
  addMealToUserSaved: function(userId, mealItemId) {
    return axios.put(`/api/mealApp/user/saved/${userId}`, {mealItemId: mealItemId})
  }
};