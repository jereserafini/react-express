const { Router } = require("express");
const saveNotes = require("../controllers/notesController");

const routes = Router()

routes.post('/notes', saveNotes)

module.exports = routes