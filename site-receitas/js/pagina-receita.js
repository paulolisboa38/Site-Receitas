const listaIngredientes = [
  {
    id: 1,
    ingredientes: [
      "2 xícaras de farinha de trigo",
      "2 xícaras de açúcar",
      "3/4 de xícara de cacau em pó",
      "1 1/2 colher de chá de fermento em pó",
      "1 1/2 colher de chá de bicarbonato de sódio",
      "1 colher de chá de sal",
      "2 ovos",
      "1 xícara de leite",
      "1/2 xícara de óleo vegetal",
      "2 colheres de chá de extrato de baunilha",
      "1 xícara de água fervente",
      "Morangos frescos para rechear e decorar",
    ],
  },
  {
    id: 2,
    ingredientes: [
      "4 peitos de frango",
      "Suco de 2 limões",
      "2 dentes de alho picados",
      "2 colheres de sopa de azeite",
      "Ervas frescas (manjericão, alecrim, tomilho) a gosto",
      "Sal e pimenta a gosto",
    ],
  },
  {
    id: 3,
    ingredientes: [
      "4 filés de salmão",
      "Suco de 3 maracujás",
      "3 colheres de sopa de açúcar",
      "Sal e pimenta a gosto",
      "Folhas de hortelã para decorar",
    ],
  },
  {
    id: 4,
    ingredientes: [
      "Tomates maduros",
      "Mussarela de búfala",
      "Folhas de manjericão",
      "Azeite de oliva extra virgem",
      "Vinagre balsâmico",
      "Sal e pimenta a gosto",
    ],
  },
  {
    id: 5,
    ingredientes: [
      "1 abóbora (cerca de 1,5 kg)",
      "1 cebola média",
      "2 dentes de alho",
      "4 xícaras de caldo de legumes",
      "1 colher de chá de cominho em pó",
      "1/2 colher de chá de noz-moscada",
      "Sal e pimenta a gosto",
      "Creme de leite para finalizar",
    ],
  },
  {
    id: 6,
    ingredientes: [
      "400g de espaguete",
      "150g de bacon",
      "3 gemas de ovo",
      "1 xícara de queijo parmesão ralado",
      "Pimenta-do-reino a gosto",
      "Salsinha picada para decorar",
    ],
  },
  {
    id: 7,
    ingredientes: [
      "1 manga madura",
      "1/2 abacaxi",
      "200ml de leite de coco",
      "Gelo a gosto",
    ],
  },
  {
    id: 8,
    ingredientes: [
      "1 lata de leite condensado",
      "2 colheres de sopa de manteiga",
      "4 colheres de sopa de paçoca esfarelada",
    ],
  },
  {
    id: 9,
    ingredientes: [
      "Peitos de frango grelhados (da receita anterior)",
      "Pesto de manjericão",
      "Tomates secos",
      "Rúcula",
      "Pão para sanduíche",
    ],
  },
  {
    id: 10,
    ingredientes: [
      "Massa de lasanha",
      "Legumes grelhados (abobrinha, berinjela, pimentão)",
      "Molho de tomate caseiro",
      "Queijo mussarela ralado",
      "Queijo parmesão ralado",
    ],
  },
];
function ColocarIngredientes (id) { 
    id = id-1 
    receita = listaIngredientes[id]; 
    ingredientes = receita.ingredientes 
    if (ingredientes.Length % 2 == 0) { 
        let numeroDivs = ingredientes.Length / 2 
        let numeroIngredientes = 0;
        for(let i = 0; i <= numeroDivs; i++){  
            let novaDiv = document.createElement("div") 
            novaDiv.classList.add("divisor") 
            let h2 = document.createElement("h2") 

        }
    }
}

