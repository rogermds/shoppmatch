var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController.js");

router.get("/produto/cadastrar", usuarioController.cadastroProduto);
router.get("/perfil/editar", usuarioController.perfilEditar);
router.get("/pagamento", usuarioController.pagamento);
router.get("/carrinho", usuarioController.carrinho);
router.get("/chat", usuarioController.chat);
router.get("/comprar", usuarioController.comprar);

module.exports = router;
