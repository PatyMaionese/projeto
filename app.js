import {pesquisar} from "./js/pesquisar.js"


let inputPesquisa = document.getElementById("input-pesquisa")
inputPesquisa.addEventListener("input",function(){
    let texto = inputPesquisa.value
    pesquisar(texto)
}
) 