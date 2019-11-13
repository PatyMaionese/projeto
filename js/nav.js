//função para criar o menu, que será exportada
function criarMenu () {
  //seleciona o elemento #nav
  let nav = document.getElementById('nav')

  //cria um input checkbox com o id #btn-menu
  let checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  checkbox.setAttribute('id', 'btn-menu')

  //cria uma div onde vamo colocar outros elementos dentro, mais tarde
  let div = document.createElement('div')

  //cria o label para a checkbox
  let label = document.createElement('label')
  label.setAttribute('for', 'btn-menu')

  //cria os spans que fazem o botão do menu "☰" e "X"
  let span1 = document.createElement('span')
  span1.classList.add('span')
  span1.classList.add('span1')
  label.append(span1)
  let span2 = document.createElement('span')
  span2.classList.add('span')
  span2.classList.add('span2')
  label.append(span2)
  let span3 = document.createElement('span')
  span3.classList.add('span')
  span3.classList.add('span3')
  label.append(span3)

  //cria a lista (ul) que recebrá os links
  let ul = document.createElement('ul')

  //Lista de links, caso queira adicionar outros é aqui que deve adicionar
  let itemMenu = [
    {
      texto: 'Home',
      link: './index.html'
    },
    {
      texto: 'Livros',
      link: './livros.html'
    },
    {
      texto: 'Adaptações de cinema',
      link: './adaptacoes.html'
    }
  ]

  //um loop (for) que cria cada link do menu e adiciona a lista (ul)
  for (let i = 0; i < itemMenu.length; i++) {
    let li = document.createElement('li')

    let a = document.createElement('a')
    a.setAttribute('href', itemMenu[i].link)
    a.textContent = itemMenu[i].texto

    li.append(a)
    ul.append(li)
  }

  //adicionando o label e a lista a nossa div
  div.append(label)
  div.append(ul)

  //adicionando o botão e a div com o conteudo do menu ao elemento que selecionamos no começo
  nav.append(checkbox)
  nav.append(div)
}

//exportando a função que cria o menu
export { criarMenu }


//O que será criado no HTML dentro da #nav:

/*
  <input type="checkbox" id="btn-menu">
  <div>
    <label for="btn-menu">
      <span class="span span1"></span>
      <span class="span span2"></span>
      <span class="span span3"></span>
    </label>
    <ul>

      <li><a href="./index.html">Home</a></li>
      <li><a href="./livros.html">Livros</a></li>
      <li><a href="./adaptacoes.html">Adaptações de cinema</a></li>

    </ul>
  </div>
*/
