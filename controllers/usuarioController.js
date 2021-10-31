

const usuarioController = {
	cadastroProduto: function (req, res) {
		res.render("cadastro-produto");
	},
	telaEditarPerfil: function (req, res) {
		res.render("perfil-editar");
	},
	pagamento: function (req, res) {
		res.render("pagamento");
	},
	carrinho: function (req, res) {
		res.render("carrinho");
	},
	chat: function (req, res) {
		res.render("chat");
	},
	comprar: function (req, res) {
		res.render("comprar");
	},
	editarPerfil: function (req, res) {
		const alterarUsuario = usuarios.map((usuario) => {
			if (!req.file) {
				usuario.avatar = req.session.user.avatar;
			} else {
				usuario.avatar = req.file.destination + "/" + req.file.filename;
			}
			usuario.nome = req.body.nome;
			usuario.apelido = req.body.apelido;
			usuario.cpf = req.body.cpf;
			usuario.nascimento = req.body.nascimento;
			usuario.telefone = req.body.telefone;
			usuario.genero = req.body.genero;
			usuario.cep = req.body.cep;
			usuario.endereco = req.body.endereco;
			usuario.numero = req.body.numero;
			usuario.estado = req.body.estado;
			usuario.cidade = req.body.cidade;
			usuario.email = req.body.email;
			usuario.senha = req.body.senha;
			return (req.session.user = usuario);
		});
		return res.render("perfil-editar");
	},
	trocarSenha: function (req, res) {
		res.render("trocarsenha");
	},
};

module.exports = usuarioController;
