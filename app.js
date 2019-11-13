import { pesquisar } from './js/pesquisar.js'
import { criarMenu } from './js/nav.js'
import { criarBarraPesquisa } from './js/barraPesquisa.js'
import { criarFooter} from './js/footer.js'

// função que cria o menu
criarMenu()

// função que cria a barra de pesquisa
criarBarraPesquisa()

//função que cria o rodape
criarFooter()

// função que faz a barra de pesquisa funcionar
let inputPesquisa = document.getElementById('input-pesquisa')
inputPesquisa.addEventListener('input', function () {
  let texto = inputPesquisa.value
  pesquisar(texto)
})
