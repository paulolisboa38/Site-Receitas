const C_QTD_RECEITAS_POPULARES = 3

const buscaReceitasPopulares = (qtd) => {
	// Clona lista de receitas
	const receitas = [...listaReceitas]

	// Adiciona receitas aleatórias ao retorno
	let retorno = []
	do {
		let idx = Math.floor(Math.random() * receitas.length)

		retorno.push(receitas[idx])
		receitas.splice(idx, 1)
	} while ((--qtd > 0) && (receitas.length > 0))

	return retorno
}

const montaCardReceita = (card, receita) => {
	// Preenche "card" com informações de "receita"
	// card.querySelector("a").setAttribute('href', `./pagina-receita.html?receitaId=${receita.id}`) 
	
	card.querySelector(".titulo-card").innerHTML = receita.titulo 
	card.querySelector(".card-img").src = receita.imagem 
	card.querySelector(".descricao-card").innerHTML = receita.descricao

	return card
}

const carregaReceitas = async (local) => {
	// Busca elemento
	// const elem = document.querySelector('.receitas-populares') 
	const elem = document.querySelector(local)
	if (!elem) return

	// Busca receitas
	const receitasPopulares = buscaReceitasPopulares(C_QTD_RECEITAS_POPULARES)

	// Busca card modelo
	try {
		let response = await fetch("./componentes/card-receita.html");
		let html = await response.text();
		let wrapper = document.createElement('div');
		wrapper.innerHTML = html;
		let modelo = wrapper.firstChild;

		// Preenche card com receitas
		receitasPopulares.forEach((receita) => {
			elem.appendChild(montaCardReceita(modelo.cloneNode(true), receita))
		})
	} catch (error) {
		console.log(error)
	}
}

carregaReceitas(".card-group") 
 
// carregar as receitas para o carrossel
// const carrosselNext = document.querySelector(".carousel-control-next") 
// let contador = 0;
 
// carrosselNext.addEventListener("click", () => { 
//     if (contador == 0){ 
//         contador++ 
//         carregaReceitas(".c2")
//     } 
//     else if (contador == 1){ 
//         contador++   
//         carregaReceitas(".c3")
//     }
// }) 
//--------------------------------------------------------------------------------------//