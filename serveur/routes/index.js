const crew = require('../controllers/crew');

module.exports = (app) => {
  app.use('/crew', crew);
};
