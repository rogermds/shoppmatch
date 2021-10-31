module.exports = (sequelize, DataTypes) => {
	const Categorias = sequelize.define(
		"Categorias",
		{
			id_categoria: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			nome_categoria: DataTypes.STRING,
		},
		{
			tableName: "categorias",
			timestamps: false,
		}
	);
};
