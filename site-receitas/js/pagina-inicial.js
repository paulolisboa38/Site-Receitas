const C_QTD_RECEITAS_POPULARES = 5

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
	card.querySelector("a").setAttribute('href', `./pagina-receita.html?receitaId=${receita.id}`)
	card.querySelector(".titulo-card").innerHTML = receita.titulo

	return card
}

const carregaReceitas = async () => {
	// Busca elemento
	const elem = document.querySelector('.receitas-populares')
	if (!elem) return

	// Busca receitas
	const receitasPopulares = buscaReceitasPopulares(C_QTD_RECEITAS_POPULARES)

	// Busca card modelo
	try {
		let response = await fetch("./componentes/card-receita.html");
		let html = await response.text();
		let modelo = new DOMParser().parseFromString(html, "text/xml").firstChild;

		// Preenche card com receitas
		receitasPopulares.forEach((receita) => {
			elem.appendChild(montaCardReceita(modelo.cloneNode(true), receita))
		})
	} catch (error) {
		console.log(error);
	}
}

carregaReceitas()