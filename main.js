
'use strict';
function setUp() {

  function opacityButton (item) {
    return item.style.opacity = 0
  }

  function addImage(item) {
    item.classList.add('rosto')
  }
  var harmImage = document.getElementById("imagem-forca")
  var buttons = Array.from(document.querySelectorAll('button'))
  var letters = Array.from(document.querySelectorAll('#letters-container > div'))
  var targetWord = 'chuva'
  var erro = 0

  buttons.forEach(function(button){
    //1. ouvir o evento de click
    button.addEventListener('click', function(){
    //2. qual a letra clicada?
    var clickedLetter = button.innerText
    console.log(clickedLetter)
      
    //3. a letra clicada tem a ver com a palavra?
    var letterMatch = targetWord.includes(clickedLetter)
    console.log(letterMatch)

    //3.1 se sim em qual posição que a letra está?
    if (letterMatch === true) {
      var letterPosition = targetWord.indexOf(clickedLetter)
      console.log(letterPosition)
    //3.2 escreva a letra no lugar certo
      var targetLetter = letters[letterPosition]
      console.log(targetLetter)
      targetLetter.innerText= clickedLetter
    //4. se não, quais são as punições?
    } else {
    //4.1 aplica opacidade no button
      opacityButton(button)
    //4.2 inserir uma imagem
      // addImage(harmImage)
    //4.2.1 inserir um imagem para cada erro
      switch (erro){
      case 0:
          addImage(harmImage)
          console.log(erro)
          break
      case 1:
          console.log(erro)
          break
      case 2:
          console.log(erro)
          break
      case 3:
          console.log(erro)
          break
      case 4:
          console.log(erro)
          break
      case 5:
          console.log(erro)
          break
      case 6:
          console.log(erro)
          break
      default:
      }
      erro++;
    //4.2.3 se errar mais de 6x, perdeu o jogo
    } if (erro > 5) {
      alert('acabou o jogo, perdeu!!!!!!!!!1')
    }
    })
  }) 




  //Array.from transforma nodelist em array

  // function classLetraCerta (item) {
  //   return item.classList.contains('letra-certa')
  // }

  // function retirarButton (item) {
  //   return item.style.opacity = 0
  // }

  // function colocarRosto(item) {
  //   item.classList.add('rosto')
  // }

  // var procurarImagem = document.getElementById("imagem-forca")
  // var buttons = Array.from(document.querySelectorAll('button'))
  // var word = document.getElementById('word')

  // // -----------------------------


  // var letters = document.getElementById("letters")
  // var museu = "museu"
  // var letter; 
  

  // var lis = Array.from(document.querySelectorAll('li'))
  //  // console.log(buttons.value)

  // for (var i = 0; i < museu.length; i++) {
  //    letters.innerHTML += "<span>"+ museu.charAt(i) + "</span>" 
  //   // lis.innerText = museu.charAt(i)
  //   // letter = '<li class="letter' + 
  //   // museu.charAt(i) +
  //   // '">' + museu.charAt(i) + '</li>';
  //   // letters.insertAdjacentHTML('beforeend', letter);


  //   // var lis = Array.from(document.querySelectorAll('li'))
  //   // console.log(lis)

  //   // if (buttons[i].innerText === lis[i].innerText) {  
     
  //   // }


  // }

  // buttons.forEach(function (item){
  //   item.addEventListener('click', function(){
  //     for (var i = 0; i < museu.length; i++) {
  //       letters.innerHTML += "<span>"+ museu.charAt(i) + "</span>"
  //     }

      

  //     // } else {
  //     //   retirarButton(item)
  //     //   colocarRosto(procurarImagem)
  //     // }
  //   })   
  // })


  

  // // letraMuseu()
  // // var eachLetter = ['m', 'u', 's', 'e', 'u']
  // // var m = word.innerHTML = "<pre>" + "m" + "</pre>"
  // // console.log(m)
  // //-------------------------------


  
  // // buttons.forEach(function (item, index){
  // //   item.addEventListener('click', function(){

  // //     if (classLetraCerta(item) === true) {
  // //       var letter = item.getAttribute('data-letra')
  // //       word.innerHTML += "<span>"+ letter + "</span>" 

  // //     } else {
  // //       retirarButton(item)
  // //       colocarRosto(procurarImagem)
  // //     }
  // //   })   
  // // })
}

window.onload = setUp;





