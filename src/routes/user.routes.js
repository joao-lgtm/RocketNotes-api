const { Router, response } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload")
const UsersController = require("../controllers/UserController");
const UsersAvatar = require("../controllers/UserAvatarController");
const ensureAutheticated = require("../middleware/ensureAutheticated")

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER)


const usersController = new UsersController();
const userAvatarController = new UsersAvatar();

usersRoutes.post("/",usersController.create);
usersRoutes.put("/", ensureAutheticated, usersController.update);
usersRoutes.patch("/avatar", ensureAutheticated, upload.single("avatar"), userAvatarController.update)


module.exports = usersRoutes;