var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    createdBy: {type: String},
    createdAt: {type: Date, default:Date.now()},
}); 


module.exports = mongoose.model('Blog', blogSchema);