let medicamentos = [];

function Cadastrar(){

    event.preventDefault();

    let medicamento = {
        "medName":document.getElementById('fname').value,
        "medQty":document.getElementById('fqty').value,
        "medPrice":document.getElementById('fprice').value,
        "medClass":document.getElementById('fclass').value,
    }

    document.getElementById("fname").value = "";
    document.getElementById("fqty").value = "";
    document.getElementById("fprice").value = "";
    document.getElementById("fclass").value = "";

    medicamentos.push(medicamento)

    function renderTable(){

        let card = document.getElementById("dataCard");
        card.innerHTML =  `<th>ID</th>
        <th>Medicamento</th>
        <th>Quantidade</th>
        <th>Classe de Medicamento</th>
        <th>Remover</th>`;
    
        card.innerHTML = card.innerHTML  +  `<tr>
            <td>${i}</td>
            <td>${meds[i].medName}</td>
            <td>${meds[i].medQtd}</td>
            <td>${meds[i].medClass}</td>
            <td><img src="remove.png" width="25px" height="25px" onclick="removeMed(${i})"></td>
        </tr>`
    } 
      


}