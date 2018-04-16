var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
employee = require('./employee-management/models/employeeModel'),
bodyParser = require('body-parser'),
cookieParser = require('cookie-parser'),
session = require('express-session'),
passport = require('passport'),
flash = require('connect-flash')
connectionString = require('./config/database');

mongoose.Promise = global.Promise;
var connection = mongoose.connect(connectionString.url, function(err, db) {
    if (err) {
        console.log('Unable to connect to the server. Please start the server. Error:', err);
    } else {
        console.log('Connected to Server successfully!');
    }
}); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cookieParser);
// app.use(session({secret:'mysecretkey'}));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash);



//var route = require('./employee-management/routes'); //importing route
//app.use('/',routes);

var routes = require('./employee-management/routes/mainRoute');
routes.init(app);
app.listen(port);
console.log('Node server started on PORT ' + port);