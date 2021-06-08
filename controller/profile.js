const mongoose = require('mongoose');
const profileSchema = require('../models/profile');
const dimensionResultCalculation = require('../services/DimensionScoreService');

/* [ GET ] /api/profile - get all profile */
const getAllProfile = async (req, res) => {
    try{
        const allProfile = await profileSchema.find();
        return res.status(200).json({ message: allProfile });
    }
    catch(err) {
        return res.status(500).json({ message: err.message });
    }
}

/* [ DELETE ] /api/profile - delete all profiles */
const deleteAllProfile = async (req, res) => {
    try{
        await profileSchema.remove();
        return res.status(200).json({ message: "all profiles deleted" });
    }
    catch(err){
        return res.status(500).json({ message: err.message });
    }
}

/* [ GET ] /api/profile/{id} - get profile by id */
const getProfileById = async (req, res) => {
    try{
        const profile = await profileSchema.findById(req.params.id);;
        return res.status(201).json(profile);
    }
    catch(err) {
        return res.status(500).json({ message: err.message });
    }
}

/* [ POST ] /api/profile/{id} - create a new profile */
const createProfile = async (req, res) => {
    const newProfile = req.body;
    try{
        const qnatitleArray = dimensionResultCalculation.calculateScore(req.body.title);
        const profile = new profileSchema({
            _id: new mongoose.Types.ObjectId(),
            gender: newProfile.gender,
            age: newProfile.age,
            measureUnit: newProfile.measureUnit,
            height: newProfile.height,
            weight: newProfile.weight,
            nationality: newProfile.nationality,
            ethnicity: newProfile.ethnicity,
            maritalStatus: newProfile.maritalStatus,
            education: newProfile.education,
            activity: newProfile.activity,
            otherActivity: newProfile.otherActivity,
            daysActivity: newProfile.daysActivity,
            durationDaysActivity: newProfile.durationDaysActivity,
            sportLevel: newProfile.sportLevel,
            employment: newProfile.employment,
            yearlyFamilyIncome: newProfile.yearlyFamilyIncome,
            profile: qnatitleArray,
            title: newProfile.title
        });
        await profile.save();
        return res.status(201).json(profile.profile);
    }
    catch(err){
        return res.status(500).json({ message: err.message });
    }
};

module.exports = { createProfile, deleteAllProfile, getProfileById, getAllProfile}