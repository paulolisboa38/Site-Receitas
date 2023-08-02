const loadHTML = (elem, filePath) => {
	if (!elem) return

	fetch(filePath, { headers: { Accept: 'text/html' } })
	.then(response => response.text())
	.then((html) => {
		elem.innerHTML = html;
	})
	.catch(error => {
		console.log(error);
	});
}

const loadHeader = () => {
	loadHTML(document.querySelector('header.default'), "./componentes/header.html")
}

const loadFooter = () => {
	loadHTML(document.querySelector('footer.default'),"./componentes/footer.html")
}

loadHeader();
loadFooter();