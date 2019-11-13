import { livros } from './livros.js'

// funçao de pesquisar livros, "texto" é o que o usuário digitou na barra de pesquisa
function pesquisar (texto) {
  // deixa o texto do usuario em letra minuscula, para comparação
  let textoLowerCase = texto.toLowerCase()

  // deixa o nome dos livros em letra minuscula, para comparação
  let livrosLowerCase = livros.map(function (item) {
    return {
      title: item.title.toLowerCase(),
      link: item.link
    }
  })

  // Filtra os livros que posuem o texto digitado no nome
  let livrosFiltrados = livrosLowerCase.filter(function (item) {
    return item.title.indexOf(textoLowerCase) >= 0
  })

  // seleciona o elemento #resultado-pesquisa
  let resultadoPesquisa = document.getElementById('resultado-pesquisa')

  // limpa os resultados anteriores (a cada letra digitada)
  resultadoPesquisa.innerText = ''

  // cria um link para cada livro que satisfaz a pesquisa e coloca o link dentro da div #resultado-pesquisa
  for (let i = 0; i < livrosFiltrados.length; i++) {
    let a = document.createElement('a')
    a.textContent = livrosFiltrados[i].title.toUpperCase()
    a.setAttribute('href', './' + livrosFiltrados[i].link + '.html')
    resultadoPesquisa.append(a)
  }

  // verifica se o texto está vazio, ou seja, se o usuário apagou tudo da barra de pesquisa
  // se sim então remove tods resultados
  if (texto === '') {
    resultadoPesquisa.innerHTML = ''
  }
}

// exporta a função de pesquisar
export { pesquisar }
