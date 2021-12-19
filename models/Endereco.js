
const config = require("../database/config");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(config);


module.exports = (sequelize, DataTypes) => {
	const Endereco = sequelize.define(
		"Endereco",
		{
			id_endereco: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: false,
			},

			cep: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			rua: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			numero: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			bairro: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			complemento: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			cidade: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			estado: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: "endereco",
			timestamps: false,
		}
	);
    return Endereco
};