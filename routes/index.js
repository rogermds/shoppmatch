var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home");
});

router.get("/cadastroproduto", function (req, res, next) {
  res.render("cadastro-produto");
});

router.get("/edicaoperfil", function (req, res, next) {
  res.render("edicao-perfil");
});

router.get("/cadastrousuario", function (req, res, next) {
  res.render("cadastro-usuario");
});

router.get("/contato", function (req, res, next) {
  res.render("contato");
});

router.get("/login", function (req, res, next) {
  res.render("login");
});

router.get("/pagamento", function (req, res, next) {
  res.render("pagamento", { title: "Express" });
});

router.get("/carrinho", function (req, res, next) {
  res.render("carrinho");
});

module.exports = router;
