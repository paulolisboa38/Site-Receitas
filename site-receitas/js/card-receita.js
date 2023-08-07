const montarCardReceita = (card, receita, onCategoriaClick = undefined) => {
	// Preenche "card" com informações de "receita"
	card.querySelector("a").href = `./pagina-receita.html?receitaId=${receita.id}`
	card.querySelector(".card-img-top").src = receita.imagem
	card.querySelector(".card-title").innerHTML = receita.titulo
	card.querySelector(".card-text").innerHTML = receita.descricao

	// Cria "span" para cada categoria
	const categorias = card.querySelector(".categorias")
	let categoria
	receita.categorias.forEach((item) => {
		categoria = document.createElement('span')
		categoria.className = "badge bg-dark m-1"
		categoria.innerText = item
		if (onCategoriaClick) {
			categoria.addEventListener('click', onCategoriaClick)
		}

		categorias.appendChild(categoria)
	})

	return card
}