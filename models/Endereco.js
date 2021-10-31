module.exports = (sequelize, DataTypes) => {
	const Endereco = sequelize.define(
		"Endereco",
		{
			id_endereco: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			cep: DataTypes.STRING,
			rua: DataTypes.STRING,
			numero: DataTypes.STRING,
			bairro: DataTypes.STRING,
			complemento: DataTypes.STRING,
			cidade: DataTypes.STRING,
			estado: DataTypes.STRING,
		},
		{
			tableName: "endereco",
			timestamps: false,
		}
	);
};
