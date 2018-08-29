
var button = document.querySelectorAll('button')


  // button.addEventListener('click' {
  //   console.log('clicou')
  // }
function setUp() {

    document.querySelectorAll('.letra').addEventListener('click', function(){
      console.log('yes')
    })

    document.getElementById('oi').addEventListener('click', function(){
    console.log('oi')
    })
 
 

  function existeEssaLetra (letra) {
    return letra.classList.contains('letra-certa')
  }

  function coloqueUmaImagem (letra) {
    letra.classList.add('imagem-errado')
  }

  function colocarALetra (letra) {
    if(existeEssaLetra(button === true)){
      //print a letra no programa
    }
  }


}


//  var palavras = {
//   palavras: "palco",
//   palavras: "Téspis",
//   palavras: "Auto da Compadecida",
//   palavras: "Vestido de Noiva",
//   palavras: "figurino",
//   palavras: "Peter Brook",
//   palavras: "PLinio Marcos",
//   palavras: "Antigona",
//   palavras: "cenario",
//   palavras: "improviso",
//   palavras: "Brecht",
//   palavras: "Medeia",
//   palavras: "Gero Camilo",
//   palavras: "Veronica FAbrini",
//   palavras: "comedia",
//   palavras: "Casa de bonecas",
//   palavras: "teatro de rua",
//   palavras: "máscara neutra",
//   palavras: "teatro epico",
//   palavras: "teatro do absurdo",
//   palavras: "a cantora careca",
//   palavras: "coxia",
//   palavras: "Zé Celso"


window.onload = setUp;





