
  // button.addEventListener('click' {
  //   console.log('clicou')
  // }
'use strict';
function setUp() {
  //Array.from transforma nodelist em array

  function classLetraCerta (letra) {
    return letra.classList.contains('letra-certa')
  }

  function retirarButton (letra) {
    return letra.style.opacity = 0
  }

  var buttons = Array.from(document.querySelectorAll('button'))
  var word = document.getElementById('word')

  
  buttons.forEach(function (item, index){
    item.addEventListener('click', function(){

      if (classLetraCerta(item) === true) {
        var letter = item.getAttribute('data-letra')
        var letterPlus = word.innerHTML += "<span>"+ letter + "</span>" 

      } else {
        retirarButton(item)
        }
      })   
    })
  }









// var oneLetter =  buttons.forEach(function(item, index){
//     item.addEventListener('click', function(){
//       return item.getAttribute('data-letra')
//     })   
//   })
// console.log(oneLetter)



    // document.querySelectorAll('.letra').addEventListener('click', function(){
    //   console.log('yes')
    // })

    // document.getElementById('oi').addEventListener('click', function(){
    // console.log('oi')
    // })
 
 

//   function existeEssaLetra (letra) {
//     return letra.classList.contains('letra-certa')
//   }

//   function coloqueUmaImagem (letra) {
//     letra.classList.add('imagem-errado')
//   }

//   function colocarALetra (letra) {
//     if(existeEssaLetra(button === true)){
//       //print a letra no programa
//     }
//   }


// }


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





