const { validationResult } = require("express-validator");
const usuariosModel = require("../models/usuariosModel");

const principalController = {
	index: function (req, res) {
		res.render("home");
	},
	telaLogin: function (req, res) {
		res.render("login");
	},
	login: function (req, res) {
		const { email, senha } = req.body;
		const usuarioLogado = usuariosModel.find(
			(usuario) => usuario.email == email && usuario.senha == senha
		);
		if (usuarioLogado) {
			req.session.email = usuarioLogado.email;
			req.session.apelido = usuarioLogado.apelido;
			res.render("comprar");
		} else {
			res.render("login");
		}
	},
	telaCadastro: function (req, res) {
		novoUsuario = undefined;
		res.render("cadastro-usuario", novoUsuario);
	},
	cadastrar: function (req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			res.render("cadastro-usuario", {
				errors: errors.mapped(),
				old: req.body,
			});
		} else {
			const novoUsuario = req.body;
			usuariosModel.push(novoUsuario);
			res.render("cadastro-usuario", { novoUsuario });
		}
	},
	telaContato: function (req, res) {
		res.render("contato");
	},
	recuperarSenha: function (req, res) {
		res.render("solicitacaosenha");
	},
	telaRecuperar: function (req, res) {
		res.render("solicitacaosenha");
	},
	logout: function (req, res) {
		req.session.destroy();
		res.redirect("/");
	},
};

module.exports = principalController;
