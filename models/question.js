const mongoose = require('mongoose');
const dimension = require('./enumObj/dimension');

const QuestionSchema = new mongoose.Schema({
    _id:    {
        type: mongoose.Schema.Types.ObjectId,required:true
    },
    title:  {
        type:String,
        required:true
    },
    dimension: {
        type:dimension,
        required:true
    },
    isActive: {
        type:Boolean,
        required:true
    },
    grading: {
        type: Number,
        enum:[1,-1],
        required:true
    },
});

module.exports = mongoose.model('question', QuestionSchema);