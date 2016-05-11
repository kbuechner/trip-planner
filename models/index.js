var db = require('./_db');
var Hotel = require('./hotel')(db);
var Place = require('./place')(db);
var Restaraunt = require('./restaraunt')(db);
var Activity = require('./activity')(db);

// Place
// Restaraunt
// Activity 


Hotel.belongsTo(Place);
Restaraunt.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = db; 