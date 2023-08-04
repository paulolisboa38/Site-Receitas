const carregaHeader = async () => {
	// Busca elemento
	const elem = document.querySelector('header.default')
	if (!elem) return

	// Carrega HTML para elemento
	try {
		let response = await fetch("./componentes/header.html");
		let html = await response.text();
		elem.innerHTML = html
	} catch (error) {
		console.log(error);
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
		console.log(error);
	}
}

// Inicialização
carregaHeader();
carregaFooter();