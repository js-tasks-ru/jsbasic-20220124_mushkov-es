let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user2 = {
  "balance": "$1,490.15",
  "picture": "https://placehold.it/32x32",
  "age": 27,
  "name": "Duncan Randall",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user3 = {
  "balance": "$10,500.15",
  "picture": "https://placehold.it/32x32",
  "age": 27,
  "name": "Jason Pearson",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user4 = {
  "balance": "$7,750.15",
  "picture": "https://placehold.it/32x32",
  "age": 31,
  "name": "Bradly Cooper",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let users = [user1, user2, user3, user4]



function showSalary(users, age) {
  let str = '';
  for (i = 0; i <= users.length; i++) {
    for (key in users[i]) {
      if (key === 'age') {
        if (users[i][key] < age) {
          str += `${users[i]['name']}, ${users[i]['balance']} \n` 
        }
      }
    }
  }

 
  
  return str.trim();
}



showSalary(users, 40);



