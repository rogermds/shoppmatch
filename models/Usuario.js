module.exports = (sequelize, DataTypes) => {
	const Usuario = sequelize.define(
		"Usuario",
		{
			id_usuario: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			email: DataTypes.STRING,
			senha: DataTypes.STRING,
			id_perfil: DataTypes.INTEGER /* VERIFICAR FK */,
			id_endereco: DataTypes.INTEGER /* VERIFICAR FK */,
		},
		{
			tableName: "usuario",
			timestamps: false,
		}
	);
};
