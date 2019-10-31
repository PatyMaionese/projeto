import {livros} from "./livros.js"

function pesquisar(texto){
    
    let textoLowerCase = texto.toLowerCase()
    let livrosLowerCase = livros.map(function(item){
        return {
            title: item.title.toLowerCase(),
            link: item.link
        }
    })
    let livrosFiltrados = livrosLowerCase.filter(function(item){
        return item.title.indexOf(textoLowerCase)>=0
    })
    let resultadoPesquisa = document.getElementById("resultado-pesquisa")
    resultadoPesquisa.innerText = ''
    for(let i=0; i<livrosFiltrados.length; i++){
       let a = document.createElement("a")
       a.textContent = livrosFiltrados[i].title.toUpperCase()
       a.setAttribute("href", livrosFiltrados[i].link)
       resultadoPesquisa.append(a)
            
    }
    if(texto === ''){
        resultadoPesquisa.innerHTML = ''
        return
    }
}

export {pesquisar};