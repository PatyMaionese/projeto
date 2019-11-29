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
    title: 'Seja Líder De Si Mesmo',
    link: 'SejaLiderDeSiMesmo'
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
  {
    title: 'A Fúria E A Aurora',
    link: 'AFuriaEAAurora'
  },
  {
    title: 'A Garota Que Lia As Estrelas',
    link: 'AGarotaQueLiaAsEstrelas'
  },
  {
    title: 'Agora E Para Sempre Lara Jean',
    link: 'AgoraEParaSempreLaraJean'
  },
  {
    title: 'Antes De Partir',
    link: 'AntesDePartir'
  },
  {
    title: 'A Pequena Livraria Dos Corações Solitários',
    link: 'APequenaLivrariaDosCoracoesSolitarios'
  },
  {
    title: 'A Rosa E A Adaga',
    link: 'ARosaEAAdaga'
  },
  {
    title: 'A Sereia',
    link: 'ASereia'
  },
  {
    title: 'As Regras Do Amor E Da Magia',
    link: 'AsRegrasDoAmorEDaMagia'
  },
  { 
    title: 'Contos De A Fúria E A Aurora',
    link: 'ContosDeAFuriaEAAurora'
  },
  {
    title: 'Corte De Asas E Ruína',
    link: 'CorteDeAsasERuina'
  },

  {
    title: 'Corte De Espinhos E Rosas',
    link: 'CorteDeEspinhosERosas'
  },
  {
    title: 'Corte De Gelo E Estrelas',
    link: 'CorteDeGeloEEstrelas'
  },
  {
    title: 'Corte De Névoa E Fúria',
    link: 'CorteDeNevoaEFuria'
  },
  {
    title: 'Crônicas De Amor E Ódio The Beauty Of Darkness',
    link: 'CronicasDeAmorEOdioTheBeautyOfDarkness'
  },
  {
    title: 'Crônicas De Amor E ódio The Heart Of Betrayal',
    link: 'CronicasDeAmorEOdioTheHeartOfBetrayal'
  },

  {
    title: 'Crônicas De Amor E Ódio The Kiss Of Deception',
    link: 'CronicasDeAmorEOdioTheKissOfDeception'
  },
  {
    title: 'Diário Do Vampiro A Fúria',
    link: 'DiarioDoVampiroAFuria'
  },
  {
    title: 'Diário Do Vampiro Anoitecer',
    link: 'DiarioDoVampiroAnoitecer'
  },
  {
    title: 'Diário Do Vampiro Meia Noite',
    link: 'DiarioDoVampiroMeiaNoite'
  },
  {
    title: 'Diário Do Vampiro O Confronto',
    link: 'DiarioDoVampiroOConfronto'
  },

  {
    title: 'Diário Do Vampiro O Despertar',
    link: 'DiarioDoVampiroODespertar'
  },
  {
    title: 'Diário Do Vampiro Reunião Sombria',
    link: 'DiarioDoVampiroReuniaoSombria'
  },
  {
    title: 'Gaia A Roda Da Vida',
    link: 'GaiaARodaDaVida'
  },
  {
    title: 'Laço Eterno',
    link: 'LacoEterno'
  },
  {
    title: 'Minha Vida Não Tão Perfeita',
    link: 'MinhaVidaNaoTaoPerfeita'
  },

  {
    title: 'Muitas Águas',
    link: 'MuitasAguas'
  },
  {
    title: 'Mulher Com Branquias',
    link: 'MulherComBranquias'
  },
  {
    title: 'Para Sempre Alice',
    link: 'ParaSempreAlice'
  },
  {
    title: 'Para Todos Garotos Que Já Amei',
    link: 'ParaTodosGarotosQueJaAmei'
  },
  {
    title: 'Perigosa Amizade - O Começo',
    link: 'PerigosaAmizadeOComeco'
  },
  {
    title: 'Perto O Bastante Para Tocar',
    link: 'PertoOBastanteParaTocar'
  },

  {
    title: 'Por Trás Das Flores Murchas',
    link: 'PorTrasDasFloresMurchas'
  },
  {
    title: 'P.S Ainda Amo Você',
    link: 'PSAindaAmoVoce'
  },
  {
    title: 'P.S Eu Te Amo',
    link: 'PSEuTeAmo'
  },
  {
    title: 'Quando A Noite Cai',
    link: 'QUandoANoiteCai'
  },
  {
    title: 'Tartarugas Até Lá Em Baixo',
    link: 'TartarugasAteLaEmBaixo'
  },

  {
    title: 'Uma Curva No Tempo',
    link: 'UmaCurvaNoTempo'
  },
  {
    title: 'Uma Dobra No Tempo',
    link: 'UmaDobraNoTempo'
  },
  {
    title: 'Um Planeta Em Seu Giro Veloz',
    link: 'UmPlanetaEmSeuGiroVeloz'
  },
  {
    title: 'Um Tempo Aceitável',
    link: 'UmTempoAceitavel'
  },
  {
    title: 'Vento À Porta',
    link: 'VentoAPorta'
  },

  {
    title: '500 Dias Sem Voçê',
    link: '500DiasSemVoce'
  },

  {
    title: 'A Princesa Salva A Si Mesma Neste Livro',
    link: 'APrincesaSalvaASiMesmaNesteLivro'
  },
  {
    title: 'Diário De Um Banana 1: Toque Do Queijo',
    link: '1DiarioDeUmBananaToqueDoQueijo'
  },
  {
    title: 'Diário De Um Banana 2: Rodrick É O Cara',
    link: '2DiarioDeUmBananaRodrickEOCara'
  },
  {
    title: "Diário De Um Banana 3: A Gota D' Água",
    link: '3DiarioDeUmBananaAGotaDAgua'
  },
  {
    title: 'Diário De Um Banana 4: Dias De Cão',
    link: '4DiarioDeUmBananaDiasDeCao'
  },

  {
    title: 'Diário De Um Banana 5: A Verdade Nua E Crua',
    link: '5DiarioDeUmBananaAVerdadeNuaECrua'
  },
  {
    title: 'Diário De Um Banana  6: Casa Dos Horrores',
    link: '6DiarioDeUmBananaACasaDosHorrores'
  },
  {
    title: 'Diário De Um Banana 7: Segurando Vela',
    link: '7DiarioDeUmBananaSegurandoVela'
  },
  {
    title: 'Diário De Um Banana 8: Maré De Azar ',
    link: '8DiarioDeUmBananaMareDeAzar'
  },
  {
    title: 'Diário De Um Banana 9: Caindo Na Estrada',
    link: '9DiarioDeUmBananaCaindoNaEstrada'
  },

  {
    title: 'Diário De Um Banana 10: Bons Tempos',
    link: '10DiarioDeUmBananaBonsTempos'
  },

  {
    title: 'Diário De Um Banana 11: Vai Ou Racha ',
    link: '11DiarioDeUmBananaVaiOuRacha'
  },
  {
    title: 'Diário De Um Banana 12: Apertem Os Cintos',
    link: '12DiarioDeUmBananaApertemOsCintos'
  },
  {
    title: 'Diário De Um Banana 13: Batalha Neval',
    link: '13DiarioDeUmBananaBatalhaNeval'
  },
  {
    title: 'Diário De Um Banana 14: Quebra Tudo',
    link: '14DiarioDeUmBananaQuebraTudo'
  },
  {
    title: 'Acampamento Shadow Falls Desperta Ao Amanhecer',
    link: 'AcampamentoShadowFallsDespertaAoAmanhecer'
  },

  {
    title: 'Acampamento Shadow Falls Escolhida Ao Anoitecer',
    link: 'AcampamentoShadowFallsEscolhidaAoAnoitecer'
  },
  {
    title: 'Acampamento Shadow Falls Levada Ao Entardecer',
    link: 'AcampamentoShadowFallsLevadaAoEntardecer'
  },
  {
    title: 'Acampamento Shadow Falls Nascida Á Meia-Noite',
    link: 'AcampamentoShadowFallsNascidaAMeiaNoite'
  },
  {
    title: 'Acampamento Shadow Falls Sussurros Ao Luar',
    link: 'AcampamentoShadowFallsSussurrosAoLuar'
  },
  {
    title: 'A Coroa',
    link: 'ACoroa'
  },
  {
    title: 'A Elite',
    link: 'AElite'
  },
  {
    title: 'A Escolha',
    link: 'AEscolha'
  },
  {
    title: 'A Garota Do Lago',
    link: 'AGarotaDoLago'
  },
  {
    title: 'A Herdeira',
    link: 'AHerdeira'
  },
  {
    title: 'Animais Fantásticos E Onde Habitam',
    link: 'AnimaisFantasticosEOndeHabitam'
  },
  {
    title: 'Animais Fantásticos Os Crimes De Grindelwald',
    link: 'AnimaisFantasticosOsCrimesDeGrindelwald'
  },
  {
    title: 'Antes Que Eu Vá',
    link: 'AntesQueEuVa'
  },
  {
    title: 'Apaixonados',
    link: 'Apaixonados'
  },
  {
    title: 'A Pequena Livraria Dos Sonhos',
    link: 'APequenaLivrariaDosSonhos'
  },
  {
    title: 'A Seleção',
    link: 'ASelecao'
  },

  {
    title: 'Deixada Para Trás',
    link: 'DeixadaParaTras'
  },

  {
    title: 'Dezenove Luas',
    link: 'DezenoveLuas'
  },

  {
    title: 'Dezesseis Luas',
    link: 'DezesseisLuas'
  },

  {
    title: 'Dezessete Luas',
    link: 'DezesseteLuas'
  },

  {
    title: 'Dezoito Luas',
    link: 'DezoitoLuas'
  },

  {
    title: 'Eu Estive Aqui',
    link: 'EuEstiveAqui'
  },

  {
    title: 'Eu Perdi O Rumo',
    link: 'EuPerdiORumo'
  },

  {
    title: 'Êxtase',
    link: 'Extase'
  },

  {
    title: 'Fallen',
    link: 'Fallen'
  },

  {
    title: 'Felizes Para Sempre',
    link: 'FelizesParaSempre'
  },

  {
    title: 'Não Confie Em Ninguém',
    link: 'NaoConfieEmNinguem'
  },

  {
    title: 'O Maravilhoso Agora',
    link: 'OMaravilhosoAgora'
  },
  {
    title: 'O Mau Exemplo De Cameron',
    link: 'OMauExemploDeCameronPost'
  },

  {
    title: 'O Que Há De Estranho Em Mim',
    link: 'OQueHaDeEstranhoEmMim'
  },

  {
    title: 'Os Irmãos Karamázov',
    link: 'OsIrmaosKaramazov'
  },
  {
    title: 'Os Miseráveis',
    link: 'OsMiseraveis'
  },

  {
    title: 'O Sol Também É Uma Estrela',
    link: 'OSolTambemEUmaEstrela'
  },

  {
    title: 'Paixão',
    link: 'Paixao'
  },
  {
    title: 'Para Onde Vou',
    link: 'ParaOndeVou'
  },

  {
    title: 'Quase Cinderela',
    link: 'QuaseCinderela'
  },

  {
    title: 'Simplesmente Acontece',
    link: 'SimplesmenteAcontece'
  },
  {
    title: 'Todo Dia',
    link: 'TodoDia'
  },

  {
    title: 'Tormenta',
    link: 'Tormenta'
  },

  {
    title: 'Tudo E Todas As Coisas',
    link: 'TudoETodasAsCoisas'
  },
  {
    title: 'A Garota Da Capa Vermelha',
    link: 'AGarotaDaCapaVermelha'
  },

  {
    title: '',
    link: ''
  },

  {
    title: '',
    link: ''
  },
  

]

// exporta o Array de livros
export { livros }

