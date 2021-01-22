const mongoose = require('mongoose');
const QuestionSchema = require('../models/question');

/* [ POST ] /api/question - create a new question  */
const newQuestion = async (req, res) => {
    const data = req.body
    const question = new QuestionSchema({
        _id: mongoose.Types.ObjectId(),
        title: data.title,
        dimension: data.dimension,
        isActive: data.isActive,
        grading: data.grading
    })

    try{
        await question.save();
        return res.status(201).json(question);
    }catch(err){
        return res.status(500).json({ message:err.message });
    }
};

/* [ GET ] /api/question - get all question */
const getQuestionList = async (req, res) => {
    let query = { isActive:true };
    try{
        const result =  await QuestionSchema.find(query);
        return res.status(200).json(result);
    }catch(err){
        return res.status(500).json({ message:err.message });
    }
}

/* [ DELETE ] /api/question - delete all question */
const deleteAllQuestions = async (req, res) => {
    try{
        await QuestionSchema.remove();
        return res.status(200).json({ message: "All questions deleted." });
    }
    catch(err){
        return res.status(500).json({ message:err.message });
    }
}

/* [ GET ] /api/question/{id} - get a question by id */
const getQuestionById = async (req, res) => {
    try{
        const result = await QuestionSchema.findById(req.params.id);
        return res.status(201).json(result);
    }catch(err){
        return res.status(500).json({ message:err.message });
    }
}

/* [ PUT ] /api/question/{id} - update a question by id */
const updateQuestionById = async(req,res) => {
    try{
        const result = await QuestionSchema.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).json(result);
    }catch(err){
        return res.status(500).json({ message:err.message });
    }
}

/* [ DELETE ] /api/question/{id} - remove a question by id */
const deleteQuestionById = async (req,res) => {
    try{
        const result = await QuestionSchema.findByIdAndDelete(req.params.id);
        const response = {
            message: "question successfully deleted",
            id: result._id
        };
        return res.status(200).json(response);
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}

/* [ POST ] /api/question/template - create questions */
const newQuestionTemplate = async (req, res) => {
    let questionArray = req.body.data;
    try{
        for(let i = 0; i < questionArray.length; i++){
            const question = new QuestionSchema({
                _id: mongoose.Types.ObjectId(),
                title: questionArray[i].title,
                dimension: questionArray[i].dimension,
                isActive: questionArray[i].isActive,
                grading: questionArray[i].grading
            });
            question.save();
        }
        return res.status(200).json({ message: "All questions are inserted." });
    }
    catch(err){
        return res.status(500).json({ message: err.message });
    }
}

module.exports = { newQuestion, getQuestionList, deleteAllQuestions, getQuestionById, updateQuestionById, deleteQuestionById, newQuestionTemplate }