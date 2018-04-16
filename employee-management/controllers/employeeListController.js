'use strict';

var mongoose = require('mongoose');
var employee = mongoose.model('Employee');

exports.getAllEmployees = function (req, res) {
    employee.find({}, function (err, result) {
        if (err)
            res.send(500);
        res.json(result);
    });
};  

exports.postEmployee = function (req, res) {
    var newEmployee = new employee(req.body);
    newEmployee.save(function (err, employee) {
        if (err)
            res.send(err);
        res.json(employee);
    });
};

exports.getEmployeeById = function (req, res) {
    employee.findById(req.params.employeeId,function(err,res){
        if(err)
        res.send(err);
        res.json(employee);
    });
};
