const { Schema, model } = require('mongoose');

const valueSchema = new Schema({
    name: {
        type: String,
        required: true, 
        minlength: 1, 
        maxlength: 280,
        trim: true,
    }, 
    description: {
        type: String, 
        required: false, 
        minlength: 1, 
        maxlength: 280,
    }, 
    example: {
        type: String, 
        required: false, 
        minlength: 1, 
        maxlength: 280,
    }
});

// Value is the name of the model, the DB will add an S to this name. 
// valueSchema is the name of the schema we are using to create a new instance of the model
const Value = model('Value', valueSchema);
// this line is creating the Values collection and assigning it the “table headers” inside the schema.

module.exports = Value;