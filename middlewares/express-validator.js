const { check } = require("express-validator");
const { Sequelize, Usuario } = require("../models");
const Op = Sequelize.Op;



let validacoesCadastro = [
	check("nome").notEmpty().withMessage("Preencha o seu nome completo").isLength({ min: 3 }).withMessage("O nome deve ter pelo menos 5 caracteres"),
	check("apelido").notEmpty().withMessage("Preencha o seu aplido corretamente").isLength({ min: 5 }).withMessage("O apelido deve ter pelo menos 5 caracteres"),
	check("genero").notEmpty().withMessage("Preencha o gênero corretamente"),
	check("data_nascimento").notEmpty().withMessage("Preencha a data de nascimento corretamente"),
	check("cpf").notEmpty().withMessage("Preencha o CPF corretamente").isLength({ min: 11, max: 11 }).withMessage("Preencha o CPF corretamente"),
	check("celular").notEmpty().withMessage("Preencha o celular corretamente").isLength({ min: 11, max: 11 }).withMessage("Preencha o celular corretamente"),
	check("email").custom( async emailBody => {
		const procuraEmail = await Usuario.findOne({
			where: {
					email: emailBody,
				},
			})
		if (!emailBody) {
			return Promise.reject("E-mail é obrigatório");
		}
		if (procuraEmail) {
			console.log(procuraEmail.email)
			return Promise.reject("E-mail já cadastrado");
		}
		if (!procuraEmail) {
			return emailBody;
		}
	}),
	check("senha").isLength({ min: 6, max: 10 }).withMessage("A senha deve ter entre 6 e 10 caracteres"),
	check("confirmarsenha").isLength({ min: 6, max: 10 }).withMessage("A senha deve ter entre 6 e 10 caracteres").custom((confirmarsenha, { req }) => {
			const senha = req.body.senha;
			if (senha !== confirmarsenha) {
				throw new Error("As senhas não coincidem");
			}
			return confirmarsenha;
		}),
];

module.exports = { validacoesCadastro };
