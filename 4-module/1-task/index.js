function makeFriendsList(friends) {
  let list = document.createElement('ul')
  // document.body.insertAdjacentHTML('afterbegin', '<ul id = "list"></ul>')
  for (let i = 0; i < friends.length; i++) {
    list.insertAdjacentHTML('beforeEnd', `<li>${friends[i].firstName} ${friends[i].lastName}</li>`)
  }
  return list;
}

