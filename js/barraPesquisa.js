// função para criar a barra de pesquisa, que será exportada
function criarBarraPesquisa () {
  // seleciona o elemento #pesquisa-container
  let container = document.getElementById('pesquisa-container')

  // cria uma div com id #pesquisa (para usar no CSS e no pesquisar.js)
  let pesquisa = document.createElement('div')
  pesquisa.setAttribute('id', 'pesquisa')

  // cria o input da barra de pesquisa com o id #input-pesquisa
  let input = document.createElement('input')
  input.setAttribute('type', 'text')
  input.setAttribute('placeholder', 'Pesquisar')
  input.setAttribute('id', 'input-pesquisa')

  // coloca o input dentro da div #pesquisa (para usar no CSS e no pesquisar.js)
  pesquisa.append(input)

  // cria a div onde vão aparecer os resultados da pesquisa (para usar no CSS e no pesquisar.js)
  let resultados = document.createElement('div')
  resultados.setAttribute('id', 'resultado-pesquisa')

  // colaca as divs dentro do container
  container.append(pesquisa)
  container.append(resultados)
}

// exporta a função
export { criarBarraPesquisa }

// O que será criado no HTML dentro da #pesquisa-container

/*
  <div id="pesquisa">
    <input type="text" placeholder="Pesquisar" id="input-pesquisa">
  </div>
  <div id="resultado-pesquisa"></div>
*/
