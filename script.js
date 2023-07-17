
function registro(){
const dados = {
        nome : prompt("Digite seu nome:"),
        sobrenome : prompt("Digite seu sobrenome:"),
        edade : Number (prompt("Digite sua Edade:")),
        telefone : Number (prompt("Digite seu telefone:")),
        
    }
    
console.table(dados);
}
registro();



function novoRegistro() {
    let opcion = prompt('Quer fazer um novo Registo:\n 1- Si\n 2- No');
        if (opcion == 1){
            registro();
        }
        else if (opcion == 2){
            alert('Até logo')
        }
        else {
            alert('Insira uma opção válida')
            novoRegistro();
        }

}
    

novoRegistro();