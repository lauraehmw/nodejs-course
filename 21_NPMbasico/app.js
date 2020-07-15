const _ = require('underscore');

const list = [
    {'id': 1, 'name': 'Laura', 'age': 24},
    {'id': 2, 'name': 'Edith', 'age': 23},
    {'id': 3, 'name': 'Susana', 'age': 22},
]

const res = _.findWhere(list, {id: 2});
const res2 = _.findWhere(list, {'age': 22});

console.log(res);
console.log(res2);