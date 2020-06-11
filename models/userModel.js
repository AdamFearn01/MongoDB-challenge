const {Schema, model} = require('mongoose');

let task = new Schema({
    name: {type: String, required: true, unique: false},
    description: {type: String, required: true, unique: true},
    deadline: {type: String, required: false, unique: true}
}, {
    toObject: {virtuals: true}
});

module.exports = model('task', task);