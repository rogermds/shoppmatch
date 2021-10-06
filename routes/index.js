var express = require("express");
var router = express.Router();
var principalController = require("../controllers/principalController.js");

router.get("/", principalController.index);
router.get("/login", principalController.telaLogin);
router.post("/login", principalController.login);
router.get("/cadastrar", principalController.telaCadastro);
router.post("/cadastrar", principalController.cadastrar);
router.get("/contato", principalController.telaContato);
router.get("/recuperar", principalController.recuperarSenha);

module.exports = router;
