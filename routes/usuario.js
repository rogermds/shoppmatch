var express = require("express");
var router = express.Router();

router.get("/produto/cadastrar", function (req, res, next) {
	res.render("cadastro-produto");
});

router.get("/perfil/editar", function (req, res, next) {
	res.render("edicao-perfil");
});

router.get("/pagamento", function (req, res, next) {
	res.render("pagamento");
});

router.get("/carrinho", function (req, res, next) {
	res.render("carrinho");
});

router.get("/chat", function (req, res, next) {
	res.render("chat");
});

module.exports = router;
