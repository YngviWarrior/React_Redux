module.exports = function(req, res, next){ //CORS para requisições de varias aplicações(FrontEnd,BackEnd)
    //Resposta para o navegador.
    res.header('Access-Control-Allow-Origin', '*') //Permite qualquer origem
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}