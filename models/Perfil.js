module.exports = (sequelize, DataTypes) => {
	const Perfil = sequelize.define(
		"Perfil",
		{
			id_perfil: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			nome: DataTypes.STRING,
			apelido: DataTypes.STRING,
			genero: DataTypes.STRING,
			data_nascimento: DataTypes.STRING,
			telefone: DataTypes.STRING,
			cpf: DataTypes.STRING,
			avatar: DataTypes.STRING,
		},
		{
			tableName: "perfil",
			timestamps: false,
		}
	);
};
