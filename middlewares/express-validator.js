const { check } = require("express-validator");


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
		.isLength({ min: 11, max: 11 })
		.withMessage("Preencha o CPF corretamente"),
	check("telefone")
		.isLength({ min: 11, max: 11 })
		.withMessage("Preencha o telefone corretamente"),
	// check("email").custom((emailBody) => {
	// 	const procuraEmail = usuariosModel.find(
	// 		(email) => email.email == emailBody
	// 	);
	// 	if (!emailBody) {
	// 		return Promise.reject("E-mail é obrigatório");
	// 	}
	// 	if (!procuraEmail) {
	// 		return emailBody;
	// 	}
	// 	if (procuraEmail.email) {
	// 		return Promise.reject("E-mail já cadastrado");
	// 	}
	// }),
	check("senha")
		.isLength({ min: 6, max: 10 })
		.withMessage("A senha deve ter entre 6 e 10 caracteres"),
	// check("confirmarsenha")
	// 	.isLength({ min: 6, max: 10 })
	// 	.withMessage("A senha deve ter entre 6 e 10 caracteres")
	// 	.custom((confirmarsenha, { req }) => {
	// 		const senha = req.body.senha;
	// 		if (senha !== confirmarsenha) {
	// 			throw new Error("As senhas não coincidem");
	// 		}
	// 	}),
];

module.exports = { validacoesCadastro };
