var router = require('express').Router()
var Promise = require('bluebird'); 

var Hotel = require('../models/hotel')
var Restaurant = require('../models/restaurant')
var Activity = require('../models/activity')

router.get('/', function (req, res, next){

  Promise.all([
    Hotel.findAll(), 
    Restaurant.findAll(), 
    Activity.findAll()
  ])
  .spread(function(hotels, restaurants, activities ){
    if (!hotels) {
      res.sendStatus(500)
      res.status(500).end()
      return ; 
    }

    else {
    console.log('happy')    
      res.render('index', {
        hotels: hotels, 
        restaurants: restaurants, 
        activities: activities
      })
      
    }
    

  })


})