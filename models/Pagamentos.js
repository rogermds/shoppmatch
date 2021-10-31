module.exports = (sequelize, DataTypes) => {
	const Pagamentos = sequelize.define(
		"Pagamentos",
		{
			id_pagamento: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			forma_pagamento: DataTypes.STRING,
			parcelamento: DataTypes.STRING,
		},
		{
			tableName: "pagamentos",
			timestamps: false,
		}
	);
};
