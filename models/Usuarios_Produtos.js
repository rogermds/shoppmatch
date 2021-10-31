module.exports = (sequelize, DataTypes) => {
	const Usuarios_Produtos = sequelize.define(
		"Usuarios_Produtos",
		{
			id_usuario: DataTypes.INTEGER /* VERIFICAR FK */,
			id_produto: DataTypes.INTEGER /* VERIFICAR FK */,
		},
		{
			tableName: "usuarios_produtos",
			timestamps: false,
		}
	);
};
