let listaElementosCategoria = []

const categoriaClick = (event) => {
	// Busca botão de filtro e clica nele
	for (let i = 0; i < listaElementosCategoria.length; i++) {
		if (listaElementosCategoria[i].label.innerText == event.target.innerText) {
			listaElementosCategoria[i].label.click()
			break
		}
	}
	event.preventDefault();
}

const carregarReceitas = async () => {
	// Busca elemento
	const elem = document.querySelector('.receitas .row')
	if (!elem) return

	// Busca card modelo
	try {
		let response = await fetch("./componentes/card-receita.html");
		let html = await response.text();
		let wrapper = document.createElement('div');
		wrapper.innerHTML = html;
		let modelo = wrapper.firstChild;

		// Preenche card para cada receita
		listaReceitas.forEach((receita) => {
			elem.appendChild(montarCardReceita(modelo.cloneNode(true), receita, categoriaClick))
		})
	} catch (error) {
		console.log(error)
	}
}

const buscarFiltroCategoria = () => {
	let filtro = []
	// Carrega filtro dos campos da tela
	listaElementosCategoria.forEach((item) => {
		if (item.check.checked) {
			filtro.push(item.label.innerText)
		}
	})

	return filtro
}

const filtrarCategoria = () => {
	// Busca filtro
	const filtroCategoria = buscarFiltroCategoria()

	// Percorre cards validando filtro
	document.querySelectorAll('.receitas .col').forEach((card) => {
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

	let categoriasMarcadas = []
	if (params.categoria != null) {
		categoriasMarcadas = params.categoria.split(",")
	}

	// Cria caregorias
	const elem = document.querySelector(".filtros .categorias")
	for (let i = 0; i < listaCategorias.length; i++) {
		const check = document.createElement("input")
		check.type = "checkbox"
		check.className = "btn-check btn-sm m-1"
		check.id = `categoria-${i+1}`
		check.autocomplete="off"
		check.checked = categoriasMarcadas.includes(listaCategorias[i]) ? "checked" : ""
		check.addEventListener('click', filtrarCategoria)

		const label = document.createElement("label")
		label.className = "btn btn-sm btn-outline-dark m-1 fw-bold"
		label.setAttribute("for", check.id)
		label.innerText = listaCategorias[i];

		listaElementosCategoria.push({ "check": check, "label": label })
		elem.appendChild(check)
		elem.appendChild(label)
	}

	// Carrega receitas
	await carregarReceitas()

	// Filtra receitas
	if (categoriasMarcadas.length > 0) {
		filtrarCategoria()
	}
}

carregarCategorias()