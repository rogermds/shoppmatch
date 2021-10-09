const usuarios = [
	{
		nome: "Rogério Martins",
		cpf: "40136061869",
		cep: "02860030",
		telefone: "11961615456",
		endereco: "R Spencer Vampre",
		genero: "M",
		numero: "691",
		nascimento: "07/03/96",
		complemento: "",
		email: "rmartins.economia@gmail.com",
		estado: "SP",
		senha: "123456",
		cidade: "São Paulo",
		confirmarsenha: "123456",
		path: "./public/images/user-image/1633666757695 - fotoProfissional.jpg",
	},
];

const usuarioController = {
	cadastroProduto: function (req, res) {
		res.render("cadastro-produto");
	},
	telaEditarPerfil: function (req, res) {
		res.render("perfil-editar", { usuarios });
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
		const infoUser = req.body;
		infoUser.path = req.file.destination + "/" + req.file.filename;
		usuarios.push(infoUser);
		console.log(usuarios[1].path);
		res.render("perfil-editar", { usuarios });
	},

	
	trocarSenha: function (req, res) {
		res.render("trocarsenha");
	}
};

module.exports = usuarioController;
