let filtroCategoria = []
let elementosFiltroCategoria = []

const categoriaClick = (event) => {
	// Busca botão de filtro e clica nele
	for (let i = 0; i < elementosFiltroCategoria.length; i++) {
		if (elementosFiltroCategoria[i].innerText == event.target.innerText) {
			elementosFiltroCategoria[i].click()
			break
		}
	}
	event.preventDefault();
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
	} catch (error) {
		console.log(error)
	}
}

const filtrarCategoria = (event) => {
	// Atualiza "filtroCategoria"
	if (event) {
		const idx = filtroCategoria.indexOf(event.target.innerText)
		if (idx >= 0) {
			filtroCategoria.splice(idx, 1)
		} else {
			filtroCategoria.push(event.target.innerText)
		}
	}

	// Percorre cards validando filtro
	document.querySelectorAll('.receitas .container .row .col').forEach((card) => {
		let esconde = true
		if (filtroCategoria.length == 0) {
			esconde = false
		} else {
			const categoria = card.querySelectorAll(".categorias span")
			for (let i = 0; i < categoria.length; i++) {
				if (filtroCategoria.includes(categoria[i].innerText)) {
					esconde = false
					break
				}
			}
		}

		// Aplica filtro
		if (esconde) {
			card.classList.add("d-none")
		} else {
			card.classList.remove("d-none")
		}
	})
}

const carregarCategorias = async () => {
	// Busca parâmetros
	const params = new Proxy(new URLSearchParams(window.location.search), {
		get: (searchParams, prop) => searchParams.get(prop),
	});
	if (params.categoria != null) {
		filtroCategoria = params.categoria.split(",")
	}

	// Cria caregorias
	const elem = document.querySelector(".filtros .categorias")
	for (let i = 0; i < listaCategorias.length; i++) {
		const check = document.createElement("input")
		check.type = "checkbox"
		check.className = "btn-check btn-sm m-1"
		check.id = `categoria-${i+1}`
		check.autocomplete="off"
		check.checked = filtroCategoria.includes(listaCategorias[i]) ? "checked" : ""

		const label = document.createElement("label")
		label.className = "btn btn-sm btn-outline-primary m-1"
		label.setAttribute("for", check.id)
		label.innerText = listaCategorias[i];
		label.addEventListener('click', filtrarCategoria)

		elementosFiltroCategoria.push(label)
		elem.appendChild(check)
		elem.appendChild(label)
	}

	// Carrega receitas
	await carregarReceitas()

	// Filtra receitas
	if (filtroCategoria.length > 0) {
		filtrarCategoria()
	}
}

carregarCategorias()