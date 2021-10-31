module.exports = (sequelize, DataTypes) => {
	const Produto = sequelize.define(
		"Produto",
		{
			id_produto: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			compra_venda: DataTypes.STRING,
			novo_usado: DataTypes.STRING,
			id_categoria: DataTypes.INTEGER /* VERIFICAR FK */,
			titulo: DataTypes.STRING,
			cor: DataTypes.STRING,
			tamanho: DataTypes.STRING,
			genero: DataTypes.STRING,
			preco_min: DataTypes.STRING,
			preco_max: DataTypes.STRING,
			descricao: DataTypes.STRING,
			foto_produto: DataTypes.STRING,
		},
		{
			tableName: "produto",
			timestamps: false,
		}
	);
};
