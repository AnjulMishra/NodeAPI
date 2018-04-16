'use strict';

const empRoute = require('./employee/employeeRoutes');

function init(app){
    app.all('*',function (req, res, next) {
        console.log('Request was made to: ' + req.originalUrl);
        return next();
    });

    app.get('/', function (req, res) {
        res.redirect('/home');
    });

    app.use('/employee', empRoute);    
}

module.exports = {
    init: init
};
