const mongoose = require('mongoose');
const schema  = mongoose.Schema;


const CommentSchema = new schema({
    username:{type:String, required: true},
    description:{type:String, required: true},
    date:{type:String, required: true},
},{
    timestamps: true,
});
const Comments = mongoose.model('Comment', CommentSchema);
module.exports = Comments;
