// Categorias
const categoria_bolo_torta = 'Bolos e Tortas'
const categoria_carnes = 'Carnes'
const categoria_aves = 'Aves'
const categoria_peixes_frutos_mar = 'Peixes e frutos do mar'
const categoria_saladas_molhos = 'Saladas e molhos'
const categoria_sopas = 'Sopas'
const categoria_massas = 'Massas'
const categoria_bebidas = 'Bebidas'
const categoria_doces_sobremesas = 'Doces e sobremesas'
const categoria_lanches = 'Lanches'

// Lista de categorias
const listaCategorias = [
	categoria_bolo_torta,
	categoria_carnes,
	categoria_aves,
	categoria_peixes_frutos_mar,
	categoria_saladas_molhos,
	categoria_sopas,
	categoria_massas,
	categoria_bebidas,
	categoria_doces_sobremesas,
	categoria_lanches,
]

// Lista de receitas
const listaReceitas = [
	{
		id: 1,
		imagem: "img/cards/bolo_chocolate_morango.jpg",
		titulo: "Bolo de Chocolate com Morango", 
		descricao: "Um delicioso bolo de chocolate recheado com morangos frescos e coberto com ganache.",
		categorias: [categoria_bolo_torta],
		ingredientes: [
			"2 copos de açúcar",
			"3 colheres de margarina",
			"3 ovos",
			"2 copos de leite",
			"1/2 xícara (chá) de chocolate",
			"3 copos de farinha de trigo",
			"1 colher (sopa) de fermento",
			{ titulo: "Recheio" },
			"1 lata de leite condensado",
			"1 colher de manteiga ou margarina",
			"1 xícara (chá) de morango picado",
			{ titulo: "Cobertura" },
			"1 lata de leite condensado",
			"1 colher de manteiga ou margarina",
			"3 colheres de chocolate",
			"Morangos para enfeitar",
		],
		preparo: [
			{ titulo: "Massa" },
			"Bater a margarina com o açúcar, depois acrescentar os ovos até ficar uma massa homogênea.",
			"Acrescentar o leite, o chocolate e, aos poucos, a a farinha de trigo e por último o fermento, misturando levemente.",
			{ titulo: "Recheio" },
			"Levar o leite condensado e a margarina ao fogo, até dar uma leve engrossada, apagar o fogo e acrescentar o morango.",
			{ titulo: "Cobertura" },
			"Levar os ingredientes ao fogo até engrossar.",
			"Cortar o bolo ao meio, rechear, colocar a cobertura e enfeitar com os morangos.",
		],
		dicas: [
			"Antes de começar a preparar a massa, pré-aqueça o forno à temperatura indicada na receita. Assim, quando a massa estiver pronta, o forno estará na temperatura ideal para assar o bolo.",
			"Você pode personalizar a receita adicionando outros ingredientes, como raspas de chocolate na cobertura ou substituindo os morangos por outras frutas de sua preferência.",
			"Para verificar se o bolo está assado, faça o teste do palito. Insira um palito no centro do bolo; se sair limpo ou com algumas migalhas, estará pronto. Se o palito sair com massa crua, deixe o bolo assar um pouco mais.",
		],
	},
	{
		id: 2,
		imagem: "img/cards/frango_limao.jpg",
		titulo: "Frango Grelhado com Limão", 
		descricao: "Peitos de frango suculentos marinados em suco de limão e ervas, perfeitos para um churrasco leve",
		categorias: [categoria_aves],
		ingredientes: [
			"1 peito de frango cortado em 4 bifes",
			"1 limão",
			"1 colher (chá) de amaciante para carnes em pó",
			"1 pitada de sal",
			"1 colher de mostarda",
			"1 colher de manteiga",
			"1 pitada de pimenta-do-reino",
		],
		preparo: [
			"Coloque nos 2 lados dos bifes o suco de limão, mostarda, a pimenta-do-reino, o amaciante de carnes e sal.",
			"Passe os bifes nesse molho e reserve tampado na geladeira por 20 minutos.",
			"Após esse tempo, coloque a manteiga ou margarina em uma frigideira e cozinhe por 10 minutinhos até que dourem.",
			"Se preferir, pode colocar no finalzinho 1 colher do molho que restou para aproveitar o fundinho da frigideira, fica uma delícia!",
		],
		dicas: [
			"Ao final do cozimento, você pode adicionar uma colher do molho que restou da marinada na frigideira para obter um sabor extra e criar um delicioso molho para servir sobre os bifes. Isso adicionará um toque extra de limão e ervas ao prato.",
		],
	},
	{
		id: 3,
		imagem: "img/cards/salmao.jpg",
		titulo: "Salmão ao Molho de Maracujá", 
		descricao: "Filé de salmão grelhado regado com um molho agridoce de maracujá, uma combinação irresistível.",
		categorias: [categoria_peixes_frutos_mar],
		ingredientes: [
			"4 postas médias de salmão",
			"4 colheres (sopa) de manteiga",
			"Sal a gosto",
			"Suco de 2 limões",
			"Polpa de 4 maracujás",
			"1 xícara de suco de laranja",
			"8 colheres (sopa) maionese para o molho",
			"2 colheres (sopa) de suco de limão",
			"1 pitada de açúcar",
		],
		preparo: [
			"Tempere as postas de salmão com suco de um limão e sal a gosto.",
			"Grelhe-as por 10 minutos, em uma frigideira, com a manteiga até o peixe dourar dos dois lados.",
			"Retire do fogo e reserve.",
			"Bata no liquidificador a polpa dos maracujás e o suco de laranja.",
			"Coe o suco e acrescente a maionese, mexendo até obter uma mistura homogênea.",
			"Adicione 2 colheres (sopa) de suco de limão, o açúcar e o sal, misture bem.",
			"Arrume o peixe nos pratos e cubra com um pouco do molho.",
			"Decore com sementes de maracujá e fatias de laranjas.",
			"Sirva a seguir.",
		],
		dicas: [
			"A combinação do agridoce do maracujá e da maionese proporciona um sabor único. Certifique-se de coar o suco dos maracujás para remover as sementes, tornando o molho mais suave.",
			"A adição de açúcar ao molho pode variar dependendo da acidez dos maracujás e laranjas utilizados.",
		],
	},
	{
		id: 4,
		imagem: "img/cards/salada_caprese.jpg",
		titulo: "Salada Caprese", 
		descricao: "Uma clássica salada italiana com tomate, mussarela de búfala, manjericão e azeite de oliva.",
		categorias: [categoria_saladas_molhos],
		ingredientes: [
			{ titulo: "Molho" },
			"100 g (2/3 pote) de Cream Cheese Philadelphia",
			"3 colheres de sopa de queijo parmesão",
			"3 colheres de sopa de vinagre branco",
			"3 colheres de sopa de coentro picado",
			"1/4 xícara de nozes picadas (ou pinhões)",
			"1 xíc. de azeite de oliva",
			"Sal e pimenta a gosto",
			{ titulo: "Outros" },
			"4 tomates em fatias finas",
			"350 g de queijo minas em fatias",
			"1/2 xícara de nozes picadas (ou pinhões)",
		],
		preparo: [
			"Liquidificar os ingredientes do molho, adicionando o azeite no final, em velocidade média e deixar descansar.",
			"Colocar, intercaladamente, as fatias de tomate, do queijo minas e um pouco de Cream Cheese Philadelphia em um prato grande.",
			"Banhar com o molho e enfeitar com as nozes ou pinhões.",
		],
		dicas: [
			"Adicionar um pouco de alho picado ou alho em pó pode ser uma opção para dar um toque extra ao molho.",
			"Você pode adicionar algumas folhas de manjericão entre as camadas de tomate e queijo ou usá-las como enfeite.",
		],
	},
	{
		id: 5,
		imagem: "img/cards/sopa-de-abobora-cremosa.png",
		titulo: "Sopa de Abóbora Cremosa", 
		descricao: "Uma sopa aveludada de abóbora com um toque de especiarias, perfeita para os dias mais frios.",
		categorias: [categoria_sopas],
		ingredientes: [
			"500 g de abóbora descascada e picada",
			"4 linguiças calabresa (do tipo fininha) picadas em rodelas",
			"6 dentes de alho picadinhos",
			"1 cebola pequena picada",
			"1 colher sobremesa de sal",
			"2 pimentas malaguetas picadinhas (opcional)",
			"1 pitada de pimenta calabresa",
			"1 maço de salsinha picada",
			"1 maço de escarola rasgada",
			"2 colheres de sopa de azeite de oliva",
		],
		preparo: [
			"Pique os ingredientes;",
			"Frite em óleo de oliva as linguiças até dourarem;",
			"Frite o alho e em seguida a cebola, a pimenta malagueta ;",
			"Junte a abóbora e refogue; tempere com sal e pimenta calabresa;",
			"Junte 1/2 litro de água fervente e abaixe o fogo;",
			"Deixe cozinhar por aproximadamente 15 minutos ou até a abóbora desmanchar;",
			"Desligue o fogo;",
			"Amasse com ajuda de espremedor se por acaso houver ainda algum pedaço de abóbora inteiro;",
			"Se houve necessidade, adicione mais um pouco de água fervente e corrija o sal;",
			"Na hora de servir, coloque o cheiro verde e a escarola e deixe aquecer por 2 minutos.",
			"Se desejar, acompanhe com pão de queijo de araruta.",
			"Uma delícia!",
		],
	},
	{
		id: 6,
		imagem: "img/cards/espaguete-a-carbonara.jpg",
		titulo: "Espaguete à Carbonara", 
		descricao: "Massa de espaguete envolvida em um molho cremoso à base de ovos, queijo parmesão e bacon crocante.",
		categorias: [categoria_massas],
		ingredientes: [
			"500 g de espaguete",
			"1 colher de sopa de óleo",
			"Sal a gosto",
			"Cerca de 150 g de bacon picado",
			"1 linguiça blumenau (pode ser outra) cortada em rodelas",
			"1 dente de alho picado",
			"Salsa picada a gosto",
			"4 ovos batidos",
			"2 caixas de creme de leite",
		],
		preparo: [
			"Coloque aproximadamente 5 litros de água para ferver, quando estiver fervendo acrescente o espaguete, o azeite, o sal a gosto e cozinhe conforme as instruções da embalagem.",
			"Enquanto isso coloque o bacon em uma panela para fritar (sem óleo porque ele solta muita gordura).",
			"Quando o bacon estiver bem frito (ele começa a entortar levemente) coloque a linguiça e o alho até fritar.",
			"Junte os ovos e misture rapidamente, desligue o fogo, acrescente o creme de leite, por último a salsa e misture.",
			"Misture o espaguete com o molho e sirva.",
		],
	},
	{
		id: 7,
		imagem: "img/cards/smoothie.jpg",
		titulo: "Smoothie de Frutas Tropicais", 
		descricao: "Um smoothie refrescante feito com manga, abacaxi e coco, perfeito para os dias quentes.",
		categorias: [categoria_bebidas],
		ingredientes: [
			"1 banana-nanica madura média congelada em rodelas",
			"Meia xícara de chá de bebida vegetal 125 ml",
			"Meia xícara de chá de morango",
			"Meia xícara de chá de manga",
			"1 colher de chá de Chia",
			"1 colher de sopa de de Granola de Frutas Vermelhas (opcional para decoração)",
		],
		preparo: [
			"No liquidificador, coloque a banana e 1/3 bebida vegetal e use a função pulsar só até obter um creme. Separe.",
			"Repita o mesmo processo com o morango e depois com a manga.",
			"Disponha começando pelo cremo de banana, depois o de manga e por último adicione o creme de morango.",
			"Se desejar, decore com a Granola com Ingredientes Orgânicos Frutas Vermelhas.",
		],
	},
	{
		id: 8,
		imagem: "img/cards/brigadeiro_pacoca.jpg",
		titulo: "Brigadeiro de Paçoca", 
		descricao: "O clássico brigadeiro brasileiro com um toque especial de paçoca, uma explosão de sabor.",
		categorias: [categoria_doces_sobremesas],
		ingredientes: [
			"1 colher (sopa) de manteiga",
			"1 lata de leite condensado",
			"4 paçocas",
		],
		preparo: [
			"Misture o leite condensado e a manteiga na panela.",
			"Esfarele as paçocas e adicione à panela com o leite condensado e manteiga, misturando bem.",
			"Mexa em fogo baixo até engrossar.",
			"Deixe esfriar.",
			"Passe manteiga na mão, separe uma pequena quantidade do brigadeiro e faça bolinhas.",
			"Você pode passar as bolinhas de brigadeiro de paçoca no amendoim, em vez de granulado.",
		],
	},
	{
		id: 9,
		imagem: "img/cards/frango_com_pesto.png",
		titulo: "Sanduíche de Frango Grelhado com Pesto", 
		descricao: "Um sanduíche recheado com frango grelhado, pesto de manjericão, tomate seco e rúcula.",
		categorias: [categoria_lanches],
		ingredientes: [
			"Pão de Forma tradicional Wickbold",
			"Pesto de rúcula",
			"Frango assado e desfiado",
			"Fatias de abacate",
			"Fatias de tomate grelhadas na frigideira (cortadas grossas)",
			{ titulo: "Pesto" },
			"½ maço de rúcula (somente as folhas)",
			"¼ de xícara (chá) de castanha-de-caju torrada sem sal",
			"Suco de ½ limão",
			"½ xícara (chá) de azeite de oliva",
			"Sal a gosto",
			"Pimenta-do-reino moída a gosto",
		],
		preparo: [
			"Coloque todos os ingredientes no liquidificador e bata até obter um creme homogêneo.",
			"Ajuste os temperos a seu gosto.",
			"Conserve em geladeira em um recipiente com tampa.",
			{ titulo: "Frango assado" },
			"Tempere 2 filés (altos) de frango com sal e pimenta-do-reino.",
			"Em um fio de azeite e em panela bem quente, doure dois filés dos 2 lados (somente para ganhar cor).",
			"Transfira imediatamente os filés para uma assadeira forrada com papel alumínio, cobrindo os frangos de modo que fiquem bem fechados.",
			"Leve para assar em forno a 200°C por 20 minutos. Espere que esfriem e desfie em pedaços grandes.",
			{ titulo: "Montagem" },
			"Sobre uma fatia de pão, distribua uma quantidade generosa de pesto e sobre ela pedaços de frango assado e desfiado.",
			"Cubra com lâminas de abacate e tomates grelhados.",
			"Tempere os tomates com um pouco de sal.",
			"Cubra com outra fatia de pão.",
		],
	},
	{
		id: 10,
		imagem: "img/cards/lasanha_bacalhau_legumes.jpg",
		titulo: "Lasanha de Legumes", 
		descricao: "Camadas de massa de lasanha intercaladas com legumes grelhados e molho de tomate caseiro.",
		categorias: [categoria_massas],
		ingredientes: [
			"1 pepino em rodelas",
			"1 abobrinha em cubos",
			"1 cenoura em cubos",
			"1/2 cebola em lascas",
			"azeite a gosto",
			"sal a gosto",
			{ titulo: "Para o molho de tomate" },
			"2 latas de tomates sem pele (pelati)",
			"1/2 cebola",
			"Azeite para refogar",
			"Sal a gosto",
			"1/2 cenoura média picada",
			{ titulo: "Para o molho de queijo" },
			"1 colher (sopa) de requeijão ou cream cheese",
			"6 colheres (sopa) de farinha",
			"1 xícara de água",
			"1 xícara de leite",
			"40 g de queijo parmesão ralado",
			"40 g de queijo muzzarela ralado",
			"2 colheres (sopa) de manteiga",
			"sal a gosto",
			{ titulo: "Para montar" },
			"9 folhas de lasanha",
			"Azeite para untar",
			"Queijo parmesão ralado",
		],
		preparo: [
			"Misture os legumes picados em um refratário, tempere com sal e regue-os com azeite. Cubra o refratário com papel alumínio.",
			"Asse-os no forno pré-aquecido a 180°C por 30 minutos, retirando o papel alumínio na metade do tempo.",
			{ titulo: "Para o molho de tomate:" },
			"Refogue a cebola no azeite.",
			"Junte os tomates sem pele e a cenoura à cebola e ferva.",
			"Desligue o fogo e deixe a panela esfriar. Bata o molho no liquidificador ou com um mixer e reserve.",
			{ titulo: "Para o molho de queijo:" },
			"Misture o leite, a água e a farinha até formar uma pasta.",
			"Derreta manteiga numa panela e misture a pasta, até engrossar.",
			"Derreta os queijos na mistura, começando com o mais duro. Adicione o sal e o requeijão.",
			"Deixe esfriar e reserve.",
			{ titulo: "Agora monte:" },
			"Primeiro unte um refratário com azeite e pré-aqueça o forno a 200°C.",
			"Faça uma camada de molho de queijo.",
			"Uma de 3 folhas de lasanha.",
			"Uma de legumes.",
			"E uma de molho de queijo.",
			"Repita esse processo mais duas vezes, finalizando com molho de queijo e salpique o parmesão por cima.",
			"Asse a lasanha por 30 a 35 minutos.",
		],
	},
]; 
