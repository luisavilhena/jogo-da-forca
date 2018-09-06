
'use strict';
function setUp() {

  function opacityButton (item) {
    return item.style.opacity = 0
  }

  function aditionClassFace(item) {
    item.classList.add('face')
  }

  function aditionClassHands(item) {
    item.classList.add('hands')
  }

  function getLetterOccurrencesPositions(wordLetters, letter) {
    var occurrencePositions = []

    wordLetters.forEach(function (letterAtPosition, position) {
      if (letterAtPosition === letter) {
        occurrencePositions.push(position)
      }
    })

    return occurrencePositions
  }

  var harmImageFace = document.getElementById("imagem-forca")
  var harmImageHands = document.getElementById("container-hands")
  var lettersContainer = document.getElementById("letters-container")
  var buttons = Array.from(document.querySelectorAll('.letra'))
  var box = document.getElementById('box')
  var buttonRefresh =  document.getElementById("refresh")



  var words = [
    'queimar'.split(''),
    // 'cultura'.split(''),
    // 'chama'.split(''),
    // 'luzia'.split(''),
    // 'museu'.split(''),
    // 'esquecimento'.split(''),
    // 'nacional'.split(''),
    // 'destruir'.split(''),
    // 'descaso'.split(''),
    // 'abandono'.split('')
  ]
  var erro = 0
  //0. sortear uma nova palavra 
  var targetWordLetters = words[Math.floor(Math.random() * words.length)];

  //0.1.aparece na tela o número de border-bottons de acordo com o tanto de letras 

  function renderBoxes(container, boxCount){
    while (boxCount > 0) {
      container.innerHTML += '<div></div>'
      boxCount = boxCount - 1
    }
  }
  renderBoxes(lettersContainer, targetWordLetters.length)


  buttons.forEach(function(button){
    //1. ouvir o evento de click
    button.addEventListener('click', function(){
      var boxes = Array.from(document.querySelectorAll('#letters-container > div'))
      //2. qual a letra clicada?
      var clickedLetter = button.innerText
      // console.log(clickedLetter)
        
      //3. a letra clicada tem a ver com a palavra?

      var letterMatch = targetWordLetters.includes(clickedLetter)

      
      if (letterMatch === true) {
        // 3.1 se sim em quais posições que a letra está?
        var occurrencePositions = getLetterOccurrencesPositions(
          targetWordLetters,
          clickedLetter
        )
        // 3.2 para cada posicao em que a letra se encontra, escrever na caixa correspondente
        occurrencePositions.forEach(function (position) {
          boxes[position].innerText = clickedLetter
        })
        //3.3 se acertar todas as letras compara todas as letras
        var congrat = targetWordLetters.every(function(item) {
             console.log(clickedLetter)
          return item === clickedLetter 
        })

        console.log(congrat)
        if (congrat === true) {
          console.log('parabéns')
        }
         
      } else {
        //4. se não, quais são as punições?
        //4.1 aplica opacidade no button
        opacityButton(button)
        //4.2 inserir uma imagem
        // aditionClassFace(harmImage)
        //4.2.1 inserir um imagem para cada erro
        switch (erro){
        case 0:
          aditionClassFace(harmImageFace)
          console.log(erro)
          box.innerText= "6"
          break
        case 1:
          aditionClassHands(harmImageHands)
          console.log(erro)
          box.innerText= "5"
          break
        case 2:
          box.innerText= "4"
          console.log(erro)
          break
        case 3:
          box.innerText= "3"
          console.log(erro)
          break
        case 4:
          box.innerText= "2"
          console.log(erro)
          break
        case 5:
          box.innerText= '1'
          console.log(erro)
          break
        case 6:
          box.innerText='last'
          console.log(erro)
          break
        default:
        }
        erro++;
        //4.2.3 se errar mais de 6x, perdeu o jogo
      } if (erro > 6) {
        alert('acabou o jogo, perdeu!!!!!!!!!1')
      }
    })
  }) 
  //quando recomeçar é clicado o jogo se inicia
  buttonRefresh.addEventListener('click', function() {
    location.reload();
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







// var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

// console.log('===for===')
// for (var i = 0; i < alphabet.length; i++) {
//   console.log(alphabet[i])
// }

// console.log('===while===')
// var loggedLetterCount = 0
// while (loggedLetterCount < alphabet.length) {
//   console.log(alphabet[loggedLetterCount])
//   loggedLetterCount++
// }

// console.log('===forEach===')
// alphabet.forEach(function (letter) {
//   console.log(letter)
// })
