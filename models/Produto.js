const config = require("../database/config");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(config);

module.exports = (sequelize, DataTypes) => {
	const Produto = sequelize.define(
		"Produto",
		{
			id_produto: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},

			compra_venda: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			novo_usado: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			titulo: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			cor: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			tamanho: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			genero: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			preco_min: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			preco_max: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			descricao: {
				type: DataTypes.STRING,
				allowNull: false,
			},

			foto_produto: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: "produto",
			timestamps: false,
		}
	);
   return Produto
};