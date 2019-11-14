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
    title: 'Quem é você Alasca',
    link: 'QuemEVoceAlasca'
  },
  {
    title: '3096 Dias',
    link: '3096Dias'
  },
  {
    title: 'A Cabana',
    link: 'ACabana'
  },
  {
    title: 'A Caminho De Casa',
    link: 'ACaminhoDeCasa'
  },
  {
    title: 'A Cinco Passos De Você',
    link: 'ACincoPassosDeVoce'
  },
  {
    title: 'A Culpa É Das Estrelas',
    link: 'ACulpaEDasEstrelas'
  },
  {
    title: 'A Garota No Trem',
    link: 'AGarotaNoTrem'
  },
  {
    title: 'A Ilha Misteriosa',
    link: 'AIlhaMisteriosa'
  },
  {
    title: 'Ainda Sou Eu',
    link: 'AindaSouEu'
  },
  {
    title: '',
    link: ''
  },
  {
    title: 'Alita Anjo Do Combate',
    link: 'AlitaAnjoDoCombate'
  },
  {
    title: 'A Menina Que Roubava Livros',
    link: 'AMeninaQueRoubavaLivros'
  },
  {
    title: 'A Mulher De Preto',
    link: 'AMulherDePreto'
  },
  {
    title: 'Anne Frank',
    link: 'AnneFrank'
  },
  {
    title: 'As Vantagens De Ser Invisível',
    link: 'AsVantagensDeSerInvisivel'
  },
  {
    title: 'As Viagens De Gulliever',
    link: 'AsViagensDeGulliever'
  },
  {
    title: 'A Teoria De Tudo',
    link: 'ATeoriaDeTudo'
  },
  {
    title: 'Caçadores De Nazistas',
    link: 'CacadoresDeNazistas'
  },
  {
    title: 'Carrie',
    link: 'Carrie'
  },
  {
    title: 'Carta De Amor Aos Mortos',
    link: 'CartaDeAmorAosMortos'
  },
  {
    title: 'Christopher Robin Um Reencontro Inesquecível',
    link:'ChristopherRobinUmReencontroInesquecivel'
  },
  {
    title: 'Cidades De Papel',
    link: 'CidadesDePapel'
  },
  {
    title: 'Cinquenta Tons De Cinza',
    link: 'CinquentaTonsDeCinza'
  },
  {
    title: 'Cinquenta Tons De Liberdade',
    link: 'CinquentaTonsDeLiberdade'
  },
  {
    title: 'Cinquenta Tons Mais Escuro',
    link: 'CinquentaTonsMaisEscuro'
  },
  {
    title: 'Com Amor, Simon',
    link: 'ComAmorSimon'
  },
  {
    title: 'Como Eu Era Antes De Você',
    link: 'ComoEuEraAntesDeVoce'
  },
  {
    title: 'Deixe Á Neve Cair',
    link: 'DeixeANeveCair'
  },
  {
    title: 'Depois De Você',
    link: 'DepoisDeVoce'
  },
  {
    title: 'Garotas De Vidro',
    link: 'GarotasDeVidro'
  },
  {
    title: 'God Of War',
    link: 'GodOfWar'
  },
  {
    title: 'God Of War 2',
    link: 'GodOfWar2'
  },
  {
    title: 'Harry Potte E A Câmara Secreta',
    link: 'HarryPotteEACamaraSecreta'
  },
  {
    title: 'Harry Potter E A Ordem Da Fênix',
    link: 'HarryPotterEAOrdemDaFenix'
  },
  {
    title: 'Harry Potter E A Pedra Filosofal',
    link: 'HarryPotterEAPedraFilosofal'
  },
  {
    title: 'HarryPotter E As Reliquias Da Morte',
    link: 'HarryPotterEAsReliquiasDaMorte'
  },
  {
    title: 'Harry Potter E O Cálice De Fogo',
    link: 'HarryPotterEOCaliceDeFogo'
  },
  {
    title: 'Harry Potter E O Enigma Do Príncipe',
    link: 'HarryPotterEOEnigmaDoPrincipe'
  },
  {
    title:'Harry Potter E O Prisioneiro De Azkaban',
    link: 'HarryPotterEOPrisioneiroDeAzkaban'
  },
  {
    title: 'Hugo Cabret',
    link: 'HugoCabret'
  },
  {
    title: 'It A Coisa',
    link: 'ItACoisa'
  },
  {
    title: 'Me Chame Pelo Seu Nome',
    link: 'MeChamePeloSeuNome'
  },
  {
    title: 'Medicina Dos Horrores',
    link: 'MedicinaDosHorrores'
  },

]

// exporta o Array de livros
export { livros }
