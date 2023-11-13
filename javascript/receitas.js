let Receitas = [
  {
    nome: "Arroz de Couve-Flor",
    imagem: "../assets/arroz.jpg",
    ingredientes: ["Arroz", "Couve-flor", "Cebola média", "Azeite"],
    receita:
      "Deixe a couve-flor picada, adicione os ingredientes e refogue " +
      "bem, adicione sal, tampe a panela e deixe cozinhar.",
  },
  {
    nome: "Bolo de Café Cremoso",
    imagem: "../assets/Bolo.png",
    ingredientes: [
      "Farinha de Trigo",
      "Açúcar",
      "Café Coado",
      "Chocolate em Pó",
      "Ovos",
    ],
    receita:
      "Bata o açúcar, as gemas e o café, adicione farinha e chocolate " +
      "e mexa bem, bata as claras e junte a mistura.",
  },
  {
    nome: "Coxinha de Brigadeiro",
    imagem: "../assets/coxinha.jpg",
    ingredientes: [
      "Leite Condensado",
      "Chocolate em Pó",
      "Manteiga",
      "Morango",
      "Chocolate Granulado",
    ],
    receita:
      "Junte o leite condensado, chocolate em pó e manteiga, aqueça " +
      "no fogo baixo, envolva os morangos e passe no granulado.",
  },
];


const  getListaIngredientes = (Receitas) => Receitas.ingredientes
  .map(ingredientes => `<li>${ingredientes}</li>`)
  .reduce((gerador, item) => gerador + item, '<ul class="ingredientes">') + '</ul>';


const  getCard = (Receitas) => 
  `<div class="card rounded-5 my-4" style="width: 300px; height: 600px;"'> 
     <img src='${Receitas.imagem}' class="card-img-top">
     <div class='card-body'>
       <h2 class="card-title fs-4 p-2 fw-bold">${Receitas.nome}</h2>
       <div class="mb-5 ingredientes">${getListaIngredientes(Receitas)}</div>
       <hr>
       <p class="card-text p-2">${Receitas.receita}</p>
     </div>
   </div>`;


const  preencheCatalogo= () => 
  document.getElementById('pnlCatalogo').innerHTML = Receitas
    .map(Receitas => getCard(Receitas))
    .reduce((gerador, item)=> gerador + item, '');

document.onload = preencheCatalogo();