'use strict';
var router = require('express').Router();
var employeeController = require('../../controllers/employeeListController');
router.get('/getallemployee',employeeController.getAllEmployees)
.post('/createemployee',employeeController.postEmployee);
module.exports = router;
// routes('/employee').get(employeeController.getEmployees) 
// .post(employeeController.postEmployee);
// module.exports = routes;
// module.exports = function(app){
//         var employeeController = require('../controllers/employeeListController'),
//          emproute = require('express').Router();        
//         emproute.get('/employee',employeeController.getEmployees) 
//         .post('/employee',employeeController.postEmployee);
//         //app.route('/employee',emproute);
//         return emproute;
// };