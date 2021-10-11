const { check } = require("express-validator");
const usuariosModel = require("../models/usuariosModel");

let validacoesCadastro = [
	check("nome")
		.notEmpty()
		.withMessage("Preencha o seu nome completo")
		.isLength({ min: 5 })
		.withMessage("O nome deve ter pelo menos 5 caracteres"),
	check("apelido")
		.isLength({ min: 5 })
		.withMessage("O apelido deve ter pelo menos 5 caracteres"),
	check("cpf")
		.isLength({ min: 11 })
		.withMessage("O cpf deve ter pelo menos 11 caracteres"),
	check("telefone")
		.isLength({ min: 11 })
		.withMessage("O telefone deve ter pelo menos 11 caracteres"),
	check("email")
		.isEmail()
		.withMessage("Digite um email válido")
		.custom((email) => {
			const jaExiste = usuariosModel.usuarios.find(
				(email) => email.email === req.body.email
			);
			return jaExiste.email == email;
		})
		.withMessage("Usuário já existe"),
	check("senha")
		.isLength({ min: 6 })
		.withMessage("A senha deve ter pelo menos 6 caracteres"),
	check("confirmarsenha")
		.isLength({ min: 6 })
		.withMessage("A senha deve ter pelo menos 6 caracteres"),
];

module.exports = { validacoesCadastro };
