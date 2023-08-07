const carregaHeader = async () => {
	// Busca elemento
	const elem = document.querySelector('header.default')
	if (!elem) return

	// Carrega HTML para elemento
	try {
		let response = await fetch("./componentes/header.html")
		let html = await response.text()
		elem.innerHTML = html

		// Marca link atual como ativo no navbar
		const links = elem.querySelectorAll("a.nav-link")
		let href = location.href
		if (!href.split("/").pop()) {
			href += "index.html"
		}
		href = href.toUpperCase()
		for (let i = 0; i < links.length; i++) {
			if (href.indexOf(links[i].href.toUpperCase()) >= 0) {
				links[i].classList.add("active")
				break
			}
		}
	} catch (error) {
		console.log(error)
	}
}

const carregaFooter = async () => {
	// Busca elemento
	const elem = document.querySelector('footer.default') 
	if (!elem) return 

	// Carrega HTML para elemento
	try {
		let response = await fetch("./componentes/footer.html");
		let html = await response.text();
		elem.innerHTML = html
	} catch (error) {
		console.log(error)
	}
}

// Inicialização
carregaHeader()
carregaFooter()