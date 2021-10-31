module.exports = (sequelize, DataTypes) => {
	const Usuarios_Produtos = sequelize.define(
		"Usuarios_Produtos",
		{
			id_produto: DataTypes.INTEGER /* VERIFICAR FK */,
			id_categoria: DataTypes.INTEGER /* VERIFICAR FK */,
		},
		{
			tableName: "produtos_categorias",
			timestamps: false,
		}
	);
};
