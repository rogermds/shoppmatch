module.exports = (sequelize, DataTypes) => {
	const Pedido = sequelize.define(
		"Pedido",
		{
			id_pedido: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			id_usuario: DataTypes.INTEGER /* VERIFICAR FK */,
			id_endereco: DataTypes.INTEGER /* VERIFICAR FK */,
			id_itens_pedido: DataTypes.INTEGER /* VERIFICAR FK */,
			id_pagamento: DataTypes.INTEGER /* VERIFICAR FK */,
			frete: DataTypes.STRING,
			status: DataTypes.STRING,
			parcelamento: DataTypes.STRING,
			valor_parcelado: DataTypes.STRING,
			valor_total: DataTypes.STRING,
		},
		{
			tableName: "pedido",
			timestamps: false,
		}
	);
};
