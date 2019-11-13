/*

Esse arquivo cria um Array de livros.
Cada elemento do Array (cada livro) é um objeto com as propriedades:
title: É o título do livro, como será escrito na tela.
link: É o link, que por padrão será igual ao title, mas sem acento e sem espaços.

Observe que os links não tem caminho (./img/ por exemplo) nem extenssão (.html por exemplo).
Vamos adicionar o caminho e a extenssão usando JS, nos arquivos que usamos esse array de livros.
Dessa maneira não precisamos criar uma propriedade img para cada livro, deixando o código mais "limpo".

Porém precisamos lembrar de duas coisas importantes:

1 - O arquivo HTML e a imagem devem ter o mesmo nome, por exemplo:
    "HarryPotter.html" e "HarryPotter.jpg"
    LEMBRE-SE DISSO AO CRIAR OS ARQUIVOS!!!

2 - Todas imagens devem ter a mesma extenssão (.jpg)
    Verifique as imagens na pasta img!

*/

let livros = [
  {
    title: 'Atormentada',
    link: 'Atormentada'
  },
  {
    title: 'Amanhecer',
    link: 'Amanhecer'
  },
  {
    title: 'Crepúsculo',
    link: 'Crepusculo'
  },
  {
    title: 'Eclipse',
    link: 'Eclipse'
  },
  {
    title: 'Lua Nova',
    link: 'LuaNova'
  },
  {
    title: 'O Pequeno Príncipe',
    link: 'OPequenoPrincipe'
  },
  {
    title: 'Como Eu Era Antes De Você',
    link: 'ComoEuEraAntesDeVoce'
  },
  {
    title: 'Caixa De Passáros',
    link: 'CaixaDePassaros'
  },
]

// exporta o Array de livros
export { livros }
