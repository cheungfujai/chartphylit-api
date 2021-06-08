const mongoose = require('mongoose');

const genderEnum = require('./enumObj/gender');
const nationalityEnum = require('./enumObj/nationality');
const ethnicityEnum = require('./enumObj/ethnicity');
const maritalStatusEnum = require('./enumObj/martialStatus');
const educationEnum = require('./enumObj/education');
const activityEnum = require('./enumObj/activity');
const sportsLevelEnum = require('./enumObj/sportLevel');
const employmentEnum = require('./enumObj/employment');
const familyIncomeEnum = require('./enumObj/familyIncome');
const dimension = require('./enumObj/dimension');

const ProfileSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    gender: {
        type: genderEnum,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    measureUnit: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    nationality: {
        type: nationalityEnum,
        required: true
    },
    ethnicity: {
        type: ethnicityEnum,
        required: true
    },
    maritalStatus: {
        type: maritalStatusEnum,
        required: true
    },
    education: {
        type: educationEnum,
        required: true
    },
    activity: {
        type: activityEnum,
        required: true
    },
    otherActivity: {
        type: String,
        required: false
    },
    daysActivity: {
        type: Number,
        required: true
    },
    durationDaysActivity: {
        type: [String],
        required: false
    },
    sportLevel: {
        type: sportsLevelEnum,
        required: true
    },
    employment: {
        type: employmentEnum,
        required: true
    },
    yearlyFamilyIncome: {
        type: familyIncomeEnum,
        required: true
    },
    profile: {
        motivation: Number,
        confidence: Number,
        competence: Number,
        knowledge: Number,
    },
    title: [
        {
            question: {
                id: String,
                title: String,
                dimension: String,
                // isActivate: Boolean,
                grading: Number,
            },
            answer: {
                marks: Number
            }
        }
    ]

});

module.exports = mongoose.model('profile', ProfileSchema);