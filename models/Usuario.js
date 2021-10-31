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
			genero: DataTypes.STRING,
			id_perfil: DataTypes.STRING, /* VERIFICAR FK */
			id_endereco: DataTypes.STRING, /* VERIFICAR FK */
		},
		{
			tableName: "usuario",
			timestamps: false,
		}
	);
};
