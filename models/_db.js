var Sequelize = require('sequelize'); 

var config = {
  "username": "gracehopper", 
  "password": "gh",
  "dialect": "postgres", 
  "database": "tripplanner", 
  "host": "127.0.0.1",
  "port": 5432
  "logging": false
}

var db = new Sequelize(config.database, config.username, config.password, config)

module.exports = db; 
