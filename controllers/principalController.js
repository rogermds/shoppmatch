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
		// ALTERAR SESSION PARA CADA CATEGORIA
		if (usuarioLogado) {
			req.session.email = usuarioLogado.email;
			req.session.apelido = usuarioLogado.apelido;
			const sessao = req.session;
			res.render("comprar");
		} else {
			res.render("login");
		}
	},
	cadastrar: function (req, res) {
		const errors = validationResult(req);
		if (errors.isEmpty()) {
			const procuraEmail = usuariosModel.find(
				(email) => email.email === req.body.email
			);
			if (procuraEmail) {
				var novoUsuario = procuraEmail;
				res.render("cadastro-usuario");
			}
			if (!procuraEmail) {
				var novoUsuario = req.body;
				usuariosModel.push(novoUsuario);
				res.render("cadastro-usuario");
			}
		} else {
			console.log(errors.mapped());
			res.render("cadastro-usuario", {
				errors: errors.mapped(),
				old: req.body,
			});
		}
	},
	telaCadastro: function (req, res) {
		res.render("cadastro-usuario");
	},
	telaContato: function (req, res) {
		res.render("contato");
	},
	recuperarSenha: function (req, res) {
		res.render("solicitacaosenha");
	},
	telaRecuperar: function (req, res) {
		// req.body
		res.render("solicitacaosenha");
	},
};

module.exports = principalController
