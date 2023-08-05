const categoriaClick = (event) => {
	// Filtra pela categoria
	filtrarReceitas(event.target.innerText)
}

const montarCard = (card, receita) => {
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
		categoria.className = "badge bg-secondary m-1"
		categoria.innerText = item
		categoria.addEventListener('click', categoriaClick)

		categorias.appendChild(categoria)
	})

	return card
}

let ultimoFiltro = null
const filtrarReceitas = (filtro) => {
	// Valida filtro
	if (filtro == ultimoFiltro) {
		if (filtro == null)	return
		filtro = null
	}
	ultimoFiltro = filtro

	// Aplica filtro
	document.querySelectorAll('.receitas .container .row .col').forEach((card) => {
		if ((!filtro) || (card.querySelector(".categorias").innerHTML.includes(filtro))) {
			card.classList.remove("d-none")
		} else {
			card.classList.add("d-none")
		}
	})
}

const filtrarReceitasURL = () => {
	const params = new Proxy(new URLSearchParams(window.location.search), {
		get: (searchParams, prop) => searchParams.get(prop),
	});
	filtrarReceitas(params.categoria)
}

const carregarReceitas = async () => {
	// Busca elemento
	const elem = document.querySelector('.receitas .container .row')
	if (!elem) return

	// Busca card modelo
	try {
		let response = await fetch("./componentes/card-busca-receita.html");
		let html = await response.text();
		let wrapper = document.createElement('div');
		wrapper.innerHTML = html;
		let modelo = wrapper.firstChild;

		// Preenche card para cada receita
		listaReceitas.forEach((receita) => {
			elem.appendChild(montarCard(modelo.cloneNode(true), receita))
		})
		filtrarReceitasURL()
	} catch (error) {
		console.log(error)
	}
}

carregarReceitas()