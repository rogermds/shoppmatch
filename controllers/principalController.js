const usuarios = [];

const principalController = {
	index: function (req, res) {
		res.render("home");
	},
	telaLogin: function (req, res) {
		res.render("login");
	},
	login: function (req, res) {
		const { email, senha } = req.body;
		const usuarioLogado = usuarios.find(
			(usuario) => usuario.email == email && usuario.senha == senha
		);
		if (usuarioLogado != null) {
			res.redirect("/usuario/comprar");
		} else {
			res.render("login");
		}
	},
	telaCadastro: function (req, res) {
		res.render("cadastro-usuario");
	},
	cadastrar: function (req, res) {
		var novoUsuario = req.body;
		usuarios.push(novoUsuario);
		res.render("cadastro-sucesso", { novoUsuario });
	},
	telaContato: function (req, res) {
	res.render("contato");
	},
	telaRecuperar: function (req, res) {
		res.render("solicitacaosenha");
	}
};

module.exports = principalController;
