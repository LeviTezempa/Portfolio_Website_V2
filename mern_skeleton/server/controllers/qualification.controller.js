import Education from "../models/qualification.model.js"; 
import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";

const create = async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    return res.status(201).json({
      message: "Qualification successfully created!",
      education
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

const list = async (req, res) => {
  try {
    let educations = await Education.find().select('title firstname lastname email completion description');
    res.json(educations);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

const educationByID = async (req, res, next, id) => {
  try {
    // Make sure your model name matches your schema import (e.g., Qualification)
    let education = await Education.findById(id);
    if (!education) {
      return res.status(404).json({
        error: "Qualification not found"
      });
    }
    req.profile = education;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve qualification"
    });
  }
};


const read = (req, res) => {
  return res.json(req.profile);
};



const update = async (req, res) => {
  try {
    let education = req.profile;
    
    // Check if profile exists to prevent "Cannot convert undefined to object"
    if (!education) {
      return res.status(404).json({
        error: "Qualification profile not found. Verify your route parameter middleware is running."
      });
    }

    // Merges changes from req.body into your database document using lodash
    education = extend(education, req.body);
    education.updated = Date.now();
    
    await education.save();
    res.json(education);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};


const remove = async (req, res) => {
  try {
    let education = req.profile;
    let deletedEducation = await education.deleteOne();
    res.json(deletedEducation);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

const removeAll = async (req, res) => {
  try {
    await Education.deleteMany();
    res.json({ message: "All qualifications successfully deleted" });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

export default {create, list, read, update, remove, removeAll, educationByID};