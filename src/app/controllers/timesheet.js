var express = require('express'),
    router = express.Router(),
    TimeEntry = require('../models/timeentry'),
    timeEntries = [new TimeEntry({
        title: 'title1',
        startTime: '11/01/2017',
        endTime: '12/01/2017'
})]

module.exports = function (app) {
  
    app.use('/', router);
};

router.get('/timesheet', function (req, res, next) {
 
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(timeEntries));
});


router.post('/timesheet', function (req, res, next) {
console.log("title"+req.body.title);
  timeEntries.push(new TimeEntry({
        title:req.body.title
  }));
   
    res.setHeader('Content-Type', 'application/json');

    res.send(JSON.stringify(timeEntries));
});