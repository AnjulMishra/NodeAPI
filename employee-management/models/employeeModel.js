'use strict';

var mongoose = require('mongoose'),
autoIncrement = require('mongoose-auto-increment');
var schema = mongoose.Schema;
var employeeSchema = new schema({
    employee_Id:{
        type:Number,
        unique:true        
    },
    employee_Name : {
        salutation:String,
        firstName :{
            type : String,
            required : 'Please enter the first name'
        },
        lastName:{
            type:String,
            required : 'Please enter the last name'            
        }       
    },
    employee_Address : {
        permenant_Address:{
            type:String,
            required : 'Please enter your address'
        },
        temporary_Address:{
            type:String            
        }
    },
    employee_Age:{
        type:Date,        
    },
    status: {
        type: [{
          type: String,
          enum: ['temporary', 'permenant', 'contract']
        }],
        default: ['temporary']
      }
}); 
module.exports = mongoose.model('Employee',employeeSchema);
autoIncrement.initialize(mongoose.connection);
employeeSchema.plugin(autoIncrement.plugin,{model:'Employee',field:'employee_Id',startAt:1,incrementby:1})