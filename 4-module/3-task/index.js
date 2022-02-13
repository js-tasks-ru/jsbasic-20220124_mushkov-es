function highlight(table) {
  let status, age, gender = 0;
  let rows = table.rows[0].cells
  for (let i = 0; i < table.rows[0].cells.length; i++) {
    switch(rows[i].innerHTML) {
      case 'Status':
        status = i; 
        break;
      case 'Gender':
        gender = i; 
        break;
      case 'Age':
        age = i; 
        break;
    }
  }

  for (let i = 1; i < table.rows.length; i++) {
    checkStatus(table.rows[i].cells[status], table.rows[i])
    checkMale(table.rows[i].cells[gender], table.rows[i])
    checkAge(table.rows[i].cells[age], table.rows[i])
  }
}

function checkStatus(elem, row) {
  switch(elem.getAttribute('data-available')) {
    case 'true':
      row.classList.add('available');
      break;
    case 'false':
      row.classList.add('unavailable');
      break;
    default: 
      row.setAttribute('hidden', '')
      break
  }
}


function checkMale(elem, row) {
  switch(elem.innerHTML) {
    case 'm':
    row.classList.add('male');
    break;
    case 'f':
    row.classList.add('female');
    break
  }
}


function checkAge(elem, row) {
  if (elem.innerHTML < 18) row.style.textDecoration = 'line-through'

}