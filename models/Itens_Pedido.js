module.exports = (sequelize, DataTypes) => {
	const Itens_Pedido = sequelize.define(
		"Itens_Pedido",
		{
			id_itens_pedido: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			id_produto: DataTypes.INTEGER /* VERIFICAR FK */,
			quantidade: DataTypes.STRING,
			preco_unitario: DataTypes.STRING,
			preco_total: DataTypes.STRING,
		},
		{
			tableName: "itens_pedido",
			timestamps: false,
		}
	);
};
