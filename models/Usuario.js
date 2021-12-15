'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
		"Usuario",
		{
			id_usuario: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			nome: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			apelido: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			genero: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			data_nascimento: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			cpf: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			celular: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			avatar: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			senha: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: 'usuario',
			modelName: "Usuario",
		}
	);
  Usuario.associate = function (models) {
		// associations can be defined here
	};
  return Usuario;
};