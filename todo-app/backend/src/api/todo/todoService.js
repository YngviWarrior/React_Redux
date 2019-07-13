const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true, runValidators: true}) // Retorna registro atualizado. Aplicar as validações especificadas no Schema.

module.exports = Todo