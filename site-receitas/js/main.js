const carregaHTML = (caminho, onSucesso) => {
	// Faz requisição do arquivo
	fetch(caminho, { headers: { Accept: 'text/html' } })
	.then(response => response.text())
	.then((html) => {
		// Sucesso: executa "onSucesso"
		onSucesso(html)
	})
	.catch(error => {
		console.log(error);
	});
}

const carregaHeader = () => {
	// Busca elemento
	const elem = document.querySelector('header.default')
	if (!elem) return

	// Carrega HTML para elemento
	carregaHTML("./componentes/header.html", (html) => { elem.innerHTML = html })
}

const carregaFooter = () => {
	// Busca elemento
	const elem = document.querySelector('footer.default')
	if (!elem) return

	// Carrega HTML para elemento
	carregaHTML("./componentes/footer.html", (html) => { elem.innerHTML = html })
}

// Inicialização
carregaHeader();
carregaFooter();