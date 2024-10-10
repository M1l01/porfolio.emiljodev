function copiar() {
    const email = document.getElementById("email").textContent
    const copyButton = document.getElementById('copy-button');
    const alertBox = document.getElementById('temporary-alert');

    const inputTemp = document.createElement("input")
    inputTemp.value = email
    document.body.appendChild(inputTemp)

    inputTemp.select()
    inputTemp.setSelectionRange(0,99999)
    document.execCommand("copy")

    document.body.removeChild(inputTemp)

    alertBox.classList.add('show')

    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 1000);
}

function expandCell(cellNumber){
    //Colapsar celdas Expandidas
    document.querySelectorAll('.grid-item').forEach(item => item.classList.remove("expanded"));
    //Expandir celda Actual
    document.getElementById(`proyecto${cellNumber}`).classList.add("expanded");
}