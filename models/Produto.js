const config = require("../database/config");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(config);

module.exports = (sequelize, datatypes) => {
    const Produto = sequelize.define ( "produto", {

        id_produto: {
            type:Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },

          compra_venda: {
              type:Datatype.STRING,
              allowNull:false,
          },
          novo_usado: {
              type:Datatype.STRING,
              allowNull: false,
          },
          titulo: {
              type:Datatype.STRING,
              allowNull: false,
          },
          cor:{
            type:Datatype.STRING,
            allowNull: false,
         },
         tamanho: {
            type:Datatype.STRING,
            allowNull: false,
         },
         genero: {
            type:Datatype.STRING,
            allowNull: false,
         },
         preco_min: {
            type:Datatype.STRING,
            allowNull: false,
         },
         preco_max: {
            type:Datatype.STRING,
            allowNull: false,
         },
         descricao: {
            type:Datatype.STRING,
            allowNull: false,
         },
        
         foto_produto: {
            type:Datatype.STRING,
            allowNull: false,
         },
    },{
        tableName:'produto',
        timestamps: false
    })

}