const express = require('express');
const QuestionController = require('../controller/question');

// Router initialisation
const router = express.Router();


router.post('/', QuestionController.newQuestion);
router.get('/', QuestionController.getQuestionList);
router.delete('/', QuestionController.deleteAllQuestions);
router.get('/:id', QuestionController.getQuestionById);
router.put('/:id',QuestionController.updateQuestionById);
router.delete('/:id',QuestionController.deleteQuestionById);
router.post('/template', QuestionController.newQuestionTemplate);

module.exports = router;