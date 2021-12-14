module.exports = (sequelize, datatypes) => {
    const Endereco = sequelize.define ( "endereco", {

        id_endereco: {
            type:Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: false,
          },

          cep: {
              type:Datatype.STRING,
              allowNull:false,
          },
          rua: {
              type:Datatype.STRING,
              allowNull: false,
          },
          numero: {
              type:Datatype.STRING,
              allowNull: false,
          },
          bairro:{
            type:Datatype.STRING,
            allowNull: false,
         },
         complemento: {
            type:Datatype.STRING,
            allowNull: false,
         },
         cidade: {
            type:Datatype.STRING,
            allowNull: false,
         },
         estado: {
            type:Datatype.STRING,
            allowNull: false,
         },
    },{
        tableName:'endereco',
        timestamps: false
    })

}