'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Usuarios", {
			id_usuario: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			nome: {
				type: Sequelize.STRING,
			},
			apelido: {
				type: Sequelize.STRING,
			},
			genero: {
				type: Sequelize.STRING,
			},
			data_nascimento: {
				type: Sequelize.STRING,
			},
			cpf: {
				type: Sequelize.STRING,
			},
			celular: {
				type: Sequelize.STRING,
			},
			avatar: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			senha: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Usuarios');
  }
};