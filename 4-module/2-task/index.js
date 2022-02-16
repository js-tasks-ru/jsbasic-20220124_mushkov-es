function makeDiagonalRed(table) {
  let td = document.getElementsByTagName('td')
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red'
  }
  console.log(table.rows[0].cells[0])
  console.log(td)
}
