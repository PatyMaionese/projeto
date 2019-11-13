/*

Este é o arquivo para criar a Grid que mostra os livros.
Criando uma imagem da capa e o nome, que quando clicados abrem a página do livro.
Esse arquivo só será usado na página livros.html portanto será incluido diretamente nela com uma tag script.

*/

// Importando a lista de livros, com o title, link e img de cada livro
import { livros } from './livros.js'

// função que cria a grid de livros, não vamos exportá-la, vamos executá-la nesse arquivo mesmo
function criarGridLivros () {
  // seleciona o elemento #grid-livros
  let gridLivros = document.getElementById('grid-livros')

  // Ordena o array de livros na ordem alfabética
  let livrosOrdemAlfabetica = livros.sort(function (livro1, livro2) {
    if (livro1.title.toLowerCase() < livro2.title.toLowerCase()) {
      return -1
    }
    return 1
  })

  // Um loop sobre o Array de livros
  for (let i = 0; i < livrosOrdemAlfabetica.length; i++) {
    // cria uma elemento "a", que vai ser o pai da img e do p
    let a = document.createElement('a')
    a.setAttribute('href', './' + livrosOrdemAlfabetica[i].link + '.html')
    a.setAttribute('target', '_self')
    a.setAttribute('title', livrosOrdemAlfabetica[i].title)
    a.classList.add('item-grid')

    // Cria a tag da img que vai conter a capa do livro
    let img = document.createElement('img')
    img.setAttribute('src', './img/renomeadas/' + livrosOrdemAlfabetica[i].link + '.jpg')
    img.setAttribute('alt', 'Capa do livro ' + livrosOrdemAlfabetica[i].title)

    // Cria o parágrafo p, que vai conter o título do livro
    let p = document.createElement('p')
    p.textContent = livrosOrdemAlfabetica[i].title

    // Coloca a img e o p dentro do a
    a.append(img)
    a.append(p)

    // Coloca o a dentro do container #grid-livros
    gridLivros.append(a)
  }
}

// Executamos a função para criar a grid de livros
criarGridLivros()

// <a href = "./Crepusculo.html" class="item-grid">
//   <img src="./img/Crepusculo.jpg" alt="">
//   <p>Crepúsculo</p>
// </a>
