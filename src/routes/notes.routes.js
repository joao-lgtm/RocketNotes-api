const { Router } = require("express");

const NotesController = require("../controllers/NotesController");
const ensureAutheticated = require("../middleware/ensureAutheticated")

const notesRoutes = Router();

const notesController = new NotesController();


notesRoutes.use(ensureAutheticated);

notesRoutes.get("/", notesController.index);
notesRoutes.get("/:id", notesController.show);
notesRoutes.post("/", notesController.create);
notesRoutes.delete("/:id", notesController.delete);


module.exports = notesRoutes;