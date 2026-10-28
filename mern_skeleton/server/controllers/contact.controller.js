import Contact from "../models/contact.model.js"; 
import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";

// Create a new contact
const create = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    return res.status(201).json({
      message: "Contact successfully created!",
      contact
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// List all contacts
const list = async (req, res) => {
  try {
    let contacts = await Contact.find().select('firstname lastname email');
    res.json(contacts);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// Middleware to find contact by ID
const contactByID = async (req, res, next, id) => {
  try {
    let contact = await Contact.findById(id);
    if (!contact)
      return res.status(404).json({ error: "Contact not found" });
    req.profile = contact;
    next();
  } catch (err) {
    return res.status(400).json({ error: "Could not retrieve contact" });
  }
};

// Read a single contact
const read = (req, res) => {
  return res.json(req.profile);
};

// Update an existing contact
const update = async (req, res) => {
  try {
    let contact = req.profile;
    contact = extend(contact, req.body);
    await contact.save();
    res.json(contact);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// Remove a single contact by ID
const remove = async (req, res) => {
  try {
    let contact = req.profile;
    let deletedContact = await contact.deleteOne();
    res.json(deletedContact);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

// Remove all contacts
const removeAll = async (req, res) => {
  try {
    await Contact.deleteMany();
    res.json({ message: "All contacts successfully deleted" });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

export default {create, list, read, update, remove, removeAll, contactByID};