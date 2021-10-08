var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController.js");
var upload = require("../middlewares/multer.js");

router.get("/produto/cadastrar", usuarioController.cadastroProduto);
router.get("/perfil/editar", usuarioController.telaEditarPerfil);
router.post("/perfil/editar", upload.single("avatar"), usuarioController.editarPerfil);
router.get("/pagamento", usuarioController.pagamento);
router.get("/carrinho", usuarioController.carrinho);
router.get("/chat", usuarioController.chat);
router.get("/comprar", usuarioController.comprar);

module.exports = router;
