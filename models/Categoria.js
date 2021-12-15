const config = require("../database/config");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(config);

module.exports = (sequelize, datatypes) => {
    const Categoria = sequelize.define ( "categorias", {

        id_categoria: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },

          nome_categoria: {
              type:DataTypes.STRING,
              allowNull:false,
          }
        },{
            tablename:'categorias'
        })
    }
