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

const montarItemCarrossel = (card, receita) => { 
	card.querySelector("img").classList.add("rounded")
    card.querySelector("img").src = receita.imagem  
	card.querySelector("h5").classList.add("bg-black", "bg-opacity-50", "rounded")
    card.querySelector("h5").innerText = receita.titulo

    return card
}

const carregaReceitas = async () => {
	// Busca elemento
	const elem = document.querySelector(".receitas-populares .carousel-inner")
	if (!elem) return

	// Busca receitas
	const receitasPopulares = buscaReceitasPopulares(C_QTD_RECEITAS_POPULARES)

	// Busca card modelo
	try {
		let response = await fetch("./componentes/item-carrossel.html");
		let html = await response.text();
		let wrapper = document.createElement('div');
		wrapper.innerHTML = html;
		let modelo = wrapper.firstChild;
		let primeiroAtivo = true;

		// Preenche card com receitas
		receitasPopulares.forEach((receita) => {
			const itemCard = montarItemCarrossel(modelo.cloneNode(true), receita)
			if (primeiroAtivo) {
				itemCard.classList.add("active")
				primeiroAtivo = false
			}
			elem.appendChild(itemCard)

		})
	} catch (error) {
		console.log(error)
	}
}

const carregaCategorias = () => {
	// Busca elemento
	const elem = document.querySelector(".buscar .lista-categorias")
	if (!elem) return

	listaCategorias.forEach((cat) => {
		const a = document.createElement("a")
		a.className = "btn btn-outline-dark mx-3 my-1"
		a.href = `./busca-receitas.html?categoria=${cat}`
		a.innerText = cat

		elem.appendChild(a)
	})
}

carregaReceitas() 
carregaCategorias()