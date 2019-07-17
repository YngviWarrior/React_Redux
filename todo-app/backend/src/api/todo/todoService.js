const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true, runValidators: true}) //NEW(Retorna registro atualizado.).
//runValidators(Aplicar as validações especificadas no Schema.).

module.exports = Todo