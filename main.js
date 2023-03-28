var Medicamento = [];

function Cadastrar() {
    event.preventDefault();
    let newMed = {
        "medName": document.getElementById("fname").value,
        "medQtd": document.getElementById("fqty").value,
        "medPrice": document.getElementById("fprice").value,
        "medClass": document.getElementById("fclass").value,
    }
    
    resetForm();


    if(Validar(newMed) == true){
        Medicamento.push(newMed)
    }
      
    renderTable();
}

function Validar(newMed){
    let msg = '';

        if(newMed.medName == ''){
            msg += 'Por favor, insira corretamente o nome do Medicamento! \n'
        }

        if(newMed.medQtd == ''){
            msg += 'Por favor, insira corretamente a quantidade do Medicamento! \n'
        }

        if(newMed.medPrice == ''){
            msg += 'Por favor, insira corretamente o preço do Medicamento! \n'
        }

        if(newMed.medClass == ''){
            msg += 'Por favor, insira corretamente a Classe do Medicamento! \n'
        }
        if(msg != ''){
            alert(msg)
            return false
        }
        return true


    
}


function removeMed(index){
    Medicamento.splice(index,1);
    renderTable();
}

function renderTable(){
    let table = document.getElementById("dataTable");
    table.innerHTML =  `<th>ID</th>
    <th>Medicamento</th>
    <th>Quantidade</th>
    <th>Preço Unit.</th>
    <th>Classe de Medicamento</th>
    <th>Remover</th>`;


    for(let i = 1; i < Medicamento.length; i++)
    {

        
        table.innerHTML = table.innerHTML  +  `<tr>
        <td>${i}</td>
        <td>${Medicamento[i].medName}</td>
        <td>${Medicamento[i].medQtd}</td>
        <td>${Medicamento[i].medPrice}</td>
        <td>${Medicamento[i].medClass}</td>
        <td><img src="remove.png" width="25px" height="25px" onclick="removeMed(${i})"></td>
    </tr>`
    }

}

function resetForm(){
    document.getElementById("fname").value = "";
    document.getElementById("fqty").value = "";
    document.getElementById("fprice").value = "";
    document.getElementById("fclass").value = "";
}

renderTable()

