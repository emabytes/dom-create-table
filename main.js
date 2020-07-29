// lev_2_5
// Schreibe eine Funktion, die beim Anklicken des Buttons die Tabelle erstellt.

function generateTable() {
    const result = document.querySelector('#result')
    let inputZeilen = document.getElementById("zeilenFeld")
    let inputSpalten = document.getElementById("spaltenFeld")

let table = document.createElement("table")
    result.appendChild(table)

    for (let i = 0; i < inputZeilen.value; i++) {
        let tr = table.insertRow()
        table.appendChild(tr)

        for (let j = 0; j < inputSpalten.value; j++) {
            let td = tr.insertCell()
            tr.appendChild(td)
            td.innerHTML = `${i + 1}.${j + 1}`
        }
    }
}