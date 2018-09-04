function setUp() {
  var buttons = Array.from(document.querySelectorAll('button'))
  var letters = Array.from(document.querySelectorAll('#letters-container > div'))

  var targetWord = 'chuva'

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      // 1 - Qual a letra clicada?
      var clickedLetter = button.innerText

      // 2 - A letra clicada tem a ver com a palavra?
      var targetWordContainsClickedLetter = targetWord.includes(clickedLetter)

      if (targetWordContainsClickedLetter) {
        // 2.1 - Se sim, quais as posicoes?
        var firstPosition = targetWord.indexOf(clickedLetter)
        console.log(firstPosition)

        // 2.2 - Escrever as letras nas posicoes corretas
        var targetLetter = letters[firstPosition]
        console.log(targetLetter)
        targetLetter.innerText = clickedLetter
      } else {
        // 3 - Se não, remover uma vida
        console.log('do nothing')

      }

    })
  })

  console.log(letters)
}

window.onload = setUp
