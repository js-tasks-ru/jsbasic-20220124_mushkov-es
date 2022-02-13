function makeDiagonalRed(table) {
  // let table = document.getElementsByTagName('table')
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red'
  }

}
