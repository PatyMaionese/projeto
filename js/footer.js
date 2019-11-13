// função para criar a barra de pesquisa, que será exportada
function criarFooter () {
  // seleciona o elemento #rodape
  let rodape = document.getElementById('rodape')

  // cria um parágrafo e coloca dentro do #rodape
  let p1 = document.createElement('p')
  p1.textContent =
    'Site construído para fins de estudo de desenvolvimento na Web.'
  rodape.append(p1)

  // cria outro parágrafo e coloca dentro do #rodape
  let p2 = document.createElement('p')
  p2.textContent =
    'Todos DIREITOS dos livros pertencem aos seus devidos autores e editoras'
  rodape.append(p2)
}

// exporta a função
export { criarFooter }

// O que será criado no HTML dentro do #rodape

/*
  <p>Site construído para fins de estudo de desenvolvimento na Web.</p >
  <p>Todos DIREITOS dos livros pertencem aos seus devidos autores e editoras</p>
*/
