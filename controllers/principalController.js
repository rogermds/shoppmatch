const { validationResult } = require("express-validator");
const usuarios = require("../models/usuariosModel");

const principalController = {
	index: function (req, res) {
		res.render("home");
	},
	telaLogin: function (req, res) {
		req.session.destroy();
		res.render("login");
	},
	login: function (req, res) {
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
	cadastrar: function (req, res) {
		const errors = validationResult(req);
		const novoUsuario = undefined;
		if (!errors.isEmpty()) {
			res.render("cadastro-usuario", {
				errors: errors.mapped(),
				old: req.body,
				novoUsuario
			});
		} else {
			const novoUsuario = req.body;
			usuarios.push(novoUsuario);
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
