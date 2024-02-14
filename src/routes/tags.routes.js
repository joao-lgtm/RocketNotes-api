const { Router } = require("express");

const TagsController = require("../controllers/TagsController");
const ensureAutheticated = require("../middleware/ensureAutheticated")

const tagsRoutes = Router();


const tagsController = new TagsController();

tagsRoutes.get("/",ensureAutheticated ,tagsController.index);


module.exports = tagsRoutes;