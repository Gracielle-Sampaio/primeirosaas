const lista = document.getElementById('lista')
const additem = document.getElementById('additem')
const quantidade = document.getElementById('quantidade')
const valortotal = document.getElementById('valortotal')
const valor = document.createElement('input')
//const valorItem = valor.value.trim()
//const valorSoma = Number(valorItem);
let total = 0
//let totalSoma = total + valorSoma


additem.addEventListener('keydown', function(event) {
	if (event.keyCode === 13) {
		const item = additem.value.trim()
		if (item !== "") {


			const valor = document.createElement('input')
            valor.type = 'number';
            valor.placeholder = 'Digite o valor';
            valor.addEventListener('keydown', function(event){
            	if (event.keyCode === 13) {
            		const valorItem = valor.value.trim()
            		if (valorItem === "") {
						  alert('não tem nada')
						} 
						else {  
						   const valorSoma = Number(valorItem);
						   total = total + valorSoma
						   valortotal.textContent = total;

						}
            	};
            })


			const qtd = document.createElement('input')
			qtd.type = 'number';
        	qtd.placeholder = 'Digite a quantidade';
        	qtd.addEventListener('keydown', function(event){
            	if (event.keyCode === 13) {
            		const qtdItem = qtd.value.trim()
            		if (qtdItem === "") {
						  alert('não tem nada')
						} 
						else {
						  console.log("Número válido digitado:", Number(qtdItem));
						}
            	};
            })
			const novoItem =document.createElement('p')
			const div = document.createElement('div')
			const deletar = document.createElement('button');
                    deletar.textContent = 'X';
                    deletar.addEventListener('click', function() {
                        lista.removeChild(div);
                        valorSoma= 0
                    });

			novoItem.textContent = item
			div.classList.add('novoitem')
			deletar.classList.add('botao')

			div.appendChild(qtd)
			div.appendChild(novoItem)
			div.appendChild(valor)
			div.appendChild(deletar)

			lista.appendChild(div)
			
			additem.value=''
		}else{
			
			alert('por favor diga um item')
		};
	}
});
	