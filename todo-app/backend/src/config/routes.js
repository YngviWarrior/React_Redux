const express = require('express') //Singleton

module.exports = function(server){
    //API Routers
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes
    const todoService = require('../api/todo/todoServices')
    todoService.register(router, '/todos') //Registra todas urls relativas a webserver p entidade
}