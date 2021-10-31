module.exports = (sequelize, DataTypes) => {
	const Pedido = sequelize.define(
		"Pedido",
		{
			id_pedido: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			id_perfil: DataTypes.STRING /* VERIFICAR FK */,
			apelido: DataTypes.STRING,
			genero: DataTypes.STRING,
			data_nascimento: DataTypes.STRING,
			telefone: DataTypes.STRING,
			cpf: DataTypes.STRING,
			avatar: DataTypes.STRING,
		},
		{
			tableName: "pedido",
			timestamps: false,
		}
	);
};
