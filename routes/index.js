var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
	res.render("home");
});

router.get("/login", function (req, res, next) {
	res.render("login");
});

router.get("/cadastro", function (req, res, next) {
	res.render("cadastro-usuario");
});

router.get("/contato", function (req, res, next) {
	res.render("contato");
});

module.exports = router;
