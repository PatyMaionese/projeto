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
    title: 'Alice No País Das Maravilhas',
    link: 'AliceNoPaisDasMaravilhas'
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
    title: 'As Viagens De Gulliver',
    link: 'AsViagensDeGulliver'
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
    title: 'Harry Potter E A Câmara Secreta',
    link: 'HarryPotterEACamaraSecreta'
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
  {
    title: 'Morte E A Vida De Charlie',
    link: 'MorteEAVidaDeCharlie'
  },
  {
    title: 'Mulher De Preto 2',
    link: 'MulherDePreto2'
  },
  {
    title: 'Na Própria Carne',
    link: 'NaPropriaCarne'
  },
  {
    title: 'No Coração Do Mar',
    link: 'NoCoracaoDoMar'
  },
  {
    title: 'O Cemitério Maldito',
    link: 'OCemiterioMaldito'
  },
  {
    title: 'O Homem De Giz',
    link: 'OHomemDeGiz'
  },
  {
    title: 'O Labirinto Do Fauno',
    link: 'OLabirintoDoFauno'
  },
  {
    title: 'O Livro Da Selva',
    link: 'OLivroDaSelva'
  },
  {
    title: 'O Mágico De Oz',
    link: 'OMagicoDeOz'
  },
  {
    title: 'O Menino Do Pijama Listrado',
    link: 'OMeninoDoPijamaListrado'
  },
  {
    title: 'O Pequeno Príncipe',
    link: 'OPequenoPrincipe'
  },
  {
    title: 'O Príncipe Coreano',
    link: 'OPrincipeCoreano'
  },
  {
    title: 'O Que Aconteceu Com Annie',
    link: 'OQueAconteceuComAnnie'
  },
  {
    title: 'Os Três Mosqueteiros',
    link: 'OsTresMosqueteiros'
  },
  {
    title: 'Os Treze Porquês',
    link: 'OsTrezePorques'
  },
  {
    title: 'Para Onde Ela Foi',
    link: 'ParaOndeElaFoi'
  },
  {
    title: 'Peter Pan',
    link: 'PeterPan'
  },
  {
    title: 'Quarto',
    link: 'Quarto'
  },
  {
    title: 'Quatro Vidas De Um Cachorro',
    link: 'QuatroVidasDeUmCachorro'
  },
  {
    title: 'Romeu E Julieta',
    link: 'RomeuEJulieta'
  },
  {
    title: 'Se Eu Ficar',
    link: 'SeEuFicar'
  },
  {
    title: 'Seja Líde De Você Mesmo',
    link: 'SejaLiderDeVoceMesmo'
  },
  {
    title: 'Tristão E Isolda',
    link: 'TristaoEIsolda'
  },
  {
    title: 'As Crônicas De Narnia A Cadeira De Prata',
    link: 'AsCronicasDeNarniaACadeiraDePrata'
  },
  {
    title: 'As Crônicas De Narnia A Última Batalha',
    link: 'AsCronicasDeNarniaAUltimaBatalha'
  },
  {
    title: 'As Crônicas De Narnia A Viagem Do Peregrino Da',
    link: 'AsCronicasDeNarniaAViagemDoPeregrinoDaAlvorada'
  },
  {
    title: 'As Crônicas De Narnia O Cavalo E Seu Menino',
    link: 'AsCronicasDeNarniaOCavaloESeuMenino'
  },
  {
    title: 'As Crônicas De Narnia O Leão, A Feiticeira E O Guarda Roupa',
    link: 'AsCronicasDeNarniaOLeaoAFeiticeiraEOGuardaRoupa'
  },
  {
    title: 'As Crônicas De Narnia O Príncipe Caspian',
    link: 'AsCronicasDeNarniaOPrincipeCaspian'
  },
  {
    title: 'As Crônicas De Narnia O Sobrinho Do Mago',
    link: 'AsCronicasDeNarniaOSobrinhoDoMago'
  },

]

// exporta o Array de livros
export { livros }

