const carregarReceita = () => {
	// Busca parâmetros
	const params = new Proxy(new URLSearchParams(window.location.search), {
		get: (searchParams, prop) => searchParams.get(prop),
	});
	if (params.receitaId == null) return

	// Busca receita
	const receita = listaReceitas.find((r) => r.id == params.receitaId)
	if (receita == null) return

	// Ingredientes
	const moldeRow = document.createElement("div")
	moldeRow.className = "row"
	let row = moldeRow.cloneNode()
	const elem = document.querySelector(".receita .ingredientes")
	receita.ingredientes.forEach((ing) => {
		if (typeof ing === 'object') {
			// Título
			elem.appendChild(row)
			row = moldeRow.cloneNode()
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

carregarReceita()