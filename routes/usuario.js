var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController.js");
// var uploadAvatar = require("../middlewares/multer.js");
var authenticator = require('../middlewares/authenticator')

router.get("/produto/cadastrar", authenticator, usuarioController.cadastroProduto);
router.get("/perfil/editar", authenticator, usuarioController.telaEditarPerfil);
router.put("/perfil/editar", authenticator, usuarioController.editarPerfil); //uploadAvatar
router.get("/pagamento", authenticator, usuarioController.pagamento);
router.get("/carrinho", authenticator, usuarioController.carrinho);
router.get("/chat", authenticator, usuarioController.chat);
router.get("/comprar", authenticator, usuarioController.comprar);
router.get("/trocarsenha", authenticator, usuarioController.trocarSenha);
router.get("/endereco",usuarioController.endereco);
router.get("/pedidos",usuarioController.pedidos);
module.exports = router;
