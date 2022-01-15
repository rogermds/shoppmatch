const { validationResult } = require("express-validator");
const { Sequelize, Usuario } = require("../models");
const bcrypt = require("bcryptjs");
const Op = Sequelize.Op;


const principalController = {
	index: function (req, res) {
		res.render("home");
	},
	getLogin: function (req, res) {
		req.session.destroy();
		res.render("login");
	},
	postLogin: function (req, res) {
		const { email, senha } = req.body;
		const usuarioLogado = usuarios.find(
			(usuario) => usuario.email == email && usuario.senha == senha
		);
		if (usuarioLogado) {
			req.session.user = {};
			req.session.user.avatar = usuarioLogado.avatar;
			req.session.user.nome = usuarioLogado.nome;
			req.session.user.apelido = usuarioLogado.apelido;
			req.session.user.cpf = usuarioLogado.cpf;
			req.session.user.nascimento = usuarioLogado.nascimento;
			req.session.user.telefone = usuarioLogado.telefone;
			req.session.user.genero = usuarioLogado.genero;
			req.session.user.cep = usuarioLogado.cep;
			req.session.user.endereco = usuarioLogado.endereco;
			req.session.user.numero = usuarioLogado.numero;
			req.session.user.estado = usuarioLogado.estado;
			req.session.user.cidade = usuarioLogado.cidade;
			req.session.user.email = usuarioLogado.email;
			res.redirect("/");
		} else {
			res.render("login");
		}
	},
	telaCadastro: function (req, res) {
		const novoUsuario = '';
		res.render("cadastro-usuario", { novoUsuario });
	},
	cadastrar: async function (req, res) {
		const errors = validationResult(req);
		console.log(errors)
		if (!errors.isEmpty()) {
			res.render("cadastro-usuario", {
				errors: errors.mapped(),
				old: req.body,
			});
		} else {
			const novoUsuario = req.body;
			novoUsuario.senha = bcrypt.hashSync(novoUsuario.senha, 10);
			let usuarioCadastrado = await Usuario.create(novoUsuario);
			return res.render("login");
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
