let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [ vasya, petya, masha ];

function namify(users) {
  for(i = 0; i < users.length; i++) {
      users.splice(i, 1, users[i].name);
  }
  return users;
}

let names = namify(users);

