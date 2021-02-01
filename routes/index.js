const restController = require('../controllers/restController.js')
module.exports = (app) => {

  app.get('/', (req, res) => {
    res.redirect('/restaurant')
  })

  app.get('/restaurant', restController.getRestaurants)
}
