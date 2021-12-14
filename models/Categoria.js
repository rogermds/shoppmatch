
module.exports = (sequelize, datatypes) => {
    const Categoria = sequelize.define ( "categorias", {

        id_categoria: {
            type:Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },

          nome_categoria: {
              type:Datatype.STRING,
              allowNull:false,
          }
        })
    }
