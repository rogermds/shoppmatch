var express = require("express");
var router = express.Router();
var principalController = require("../controllers/principalController.js");
var validator = require("../middlewares/express-validator");

router.get("/", principalController.index);
router.get("/login", principalController.getLogin);
router.post("/login", principalController.postLogin);
router.get("/cadastrar", principalController.telaCadastro);
router.post("/cadastrar", validator.validacoesCadastro,	principalController.cadastrar);
router.get("/contato", principalController.telaContato);
router.get("/recuperar", principalController.telaRecuperar);
router.post("/recuperar", principalController.telaRecuperar);
router.get("/logout", principalController.logout);

module.exports = router;
