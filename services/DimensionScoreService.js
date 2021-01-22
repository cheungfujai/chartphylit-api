const dimension = require('../models/enumObj/dimension');

class DimensionScoreService{}

const calculateScoreByDimension = (data,dim) =>{
    return data.filter(title => title.question.dimension === dim)
                .map(title => title.question.grading * title.answer.marks)
                .reduce((acc,score) => acc + score, 0);
}


DimensionScoreService.calculateScore = (data) => {
    const keys = Object.values(dimension);
    const finalScore = {}
    keys.forEach(dim =>{
        finalScore[dim] = calculateScoreByDimension(data,dim);
    })
    return finalScore;
}

module.exports =  DimensionScoreService;