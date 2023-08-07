const carregaIngredientes = (elem, ingredientes) => {
	// Modelo
	const modeloRow = document.createElement("div")
	modeloRow.className = "row"

	// Carrega ingredientes
	let row = modeloRow.cloneNode()
	ingredientes.forEach((ing) => {
		if (typeof ing === 'object') {
			// Título
			elem.appendChild(row)
			row = modeloRow.cloneNode()
			const col = document.createElement("div")
			col.className = "col-lg-12 mt-3"
			col.innerHTML = `<h4>${ing.titulo}</h4>`
			console.log(col)
			row.appendChild(col)
		} else {
			// Ingrediente
			const col = document.createElement("div")
			col.className = "col-lg-6"
			col.innerHTML = `<li>${ing}</li>`
			row.appendChild(col)
		}
	})
	elem.appendChild(row)
}

const carregaPreparo = (elem, preparo) => {
	// Modelo
	const modeloRow = document.createElement("div")
	modeloRow.className = "row"
	const ul = document.createElement("ul")

	// Carrega preparo
	let row = modeloRow.cloneNode()
	preparo.forEach((prep) => {
		if (typeof prep === 'object') {
			// Título
			ul.appendChild(row)
			row = modeloRow.cloneNode()
			const col = document.createElement("div")
			col.className = "col-lg-12 mt-3"
			col.innerHTML = `<h4>${prep.titulo}</h4>`
			console.log(col)
			row.appendChild(col)
		} else {
			// Passo
			const col = document.createElement("div")
			col.className = "col-lg-12"
			col.innerHTML = `<li><p>${prep}</p></li>`
			row.appendChild(col)
  		}
	})
	ul.appendChild(row)
	elem.appendChild(ul)
}

const carregarReceita = () => {
	// Busca parâmetros
	const params = new Proxy(new URLSearchParams(window.location.search), {
		get: (searchParams, prop) => searchParams.get(prop),
	});
	if (params.receitaId == null) return

	// Busca receita
	const receita = listaReceitas.find((r) => r.id == params.receitaId)
	if (receita == null) return

	// Carrega seções
	carregaIngredientes(document.querySelector(".receita .ingredientes"), receita.ingredientes)
	carregaPreparo(document.querySelector(".receita .preparo"), receita.preparo)
}

carregarReceita()