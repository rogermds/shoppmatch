const config = require("../database/config");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(config);

module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define(
			"Pedido",
			{
				id_pedido: {
					type: DataTypes.INTEGER,
					autoIncrement: true,
					primaryKey: true,
				},
				frete: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				status: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				parcelamneto: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				valor_parcelado: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				valor_total: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				forma_pagamento: {
					type: DataTypes.STRING,
					allowNull: false,
				},
			},
			{
				tableName: "pedido",
				timestamps: false,
			}
		);
    Pedido.associate = function (models) {
          // associations can be defined here
      };
    return Pedido;
  };