const usuarioController = {
    cadastroProduto: function (req, res) {
        res.render("cadastro-produto");
    },
    perfilEditar: function (req, res) {
        res.render("edicao-perfil");
    },
    pagamento: function (req, res) {
        res.render("pagamento");
    },
    carrinho: function (req, res) {
        res.render("carrinho");
    },
    chat: function (req, res) {
        res.render("chat");
    },
    comprar: function (req, res) {
        res.render("comprar");
    }
}




module.exports = usuarioController