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
	cadastrar: function (req, res) {
		console.log(novoUsuario);
		var novoUsuario = req.body;
		novoUsuario.cadastrado = true;
		usuarios.push(novoUsuario);
		console.log(req.body);
		res.render("cadastro-usuario", { novoUsuario });
	},
	telaCadastro: function (req, res) {
		var novoUsuario = {};
		novoUsuario.cadastrado = false;
		res.render("cadastro-usuario", { novoUsuario });
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

module.exports = principalController;
