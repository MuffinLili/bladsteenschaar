var bladButton = document.getElementById('blad')
var steenButton = document.getElementById('steen')
var schaarButton = document.getElementById('schaar')
var results = document.getElementById('results')
var end = document.getElementById('end')
var play = document.getElementById('play')
var instructions = document.getElementById('instructions')
var speler1 = document.getElementById('speler1')
var speler2 = document.getElementById('speler2')
var score1 = document.getElementById('score1')
var score2 = document.getElementById('score2')
var playerResult = document.getElementById('playerResult')
var computerResult = document.getElementById('computerResult')

var item = [bladButton, steenButton, schaarButton]




function robot() {
    var randomNumber = Math.floor(Math.random() * 3)
    return item[randomNumber]
}

var scoreRobot = 0
var scorePlayer = 0

function gameOver() {
    var anotherGame = document.createElement('button')
    anotherGame.innerHTML = 'Nog eens spelen?'
    anotherGame.onclick = function () {
        window.location.reload()
    }

    if (scorePlayer == 3) {
        end.innerHTML = 'Jij hebt dit spel gewonnen!'
        end.appendChild(anotherGame)

        play.style.display = 'none'
        instructions.style.display = 'none'
        speler1.style.display = 'none'
        speler2.style.display = 'none'

        end.style.fontSize = '30px'
        end.style.marginTop = '150px'
        
        document.body.style.backgroundImage = 'url(https://www.kindpng.com/picc/m/93-939629_transparent-background-confetti-png-png-download.png)'
        document.body.style.backgroundSize = '860px 650px'
        document.body.style.backgroundPositionX = 'center'
        document.body.style.backgroundPositionY = '230px'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundColor  = '#f7f7f7'

    }
    else if (scoreRobot == 3) {
        end.innerHTML = 'De robot heeft dit spel gewonnen.'
        end.appendChild(anotherGame)

        end.style.fontSize = '30px'
        end.style.marginTop = '150px'

        play.style.display = 'none'
        instructions.style.display = 'none'
        speler1.style.display = 'none'
        speler2.style.display = 'none'

        document.body.style.backgroundImage = 'url(./Middle_Finger_svg_finger.png), url(./Middle_Finger_right.png'
        document.body.style.backgroundSize = 'contain'
        document.body.style.backgroundPositionX = 'left, right'
        document.body.style.backgroundPositionY = '230px'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundColor  = '#f7f7f7'
    }

}

function onButtonClick(event) {
    var clickedButton = event.target
    var playerChoiceString = clickedButton.id
    console.log('player: ', playerChoiceString)

    playerResult.src = clickedButton.src

    var computerButton = robot()
    var computerChoiceString = computerButton.id
    console.log(computerButton)

    computerResult.src = computerButton.src

    if (playerChoiceString == computerChoiceString) {
        end.innerHTML = 'Het is gelijkspel'

    }
    else if (playerChoiceString == 'blad') {
        if (computerChoiceString == 'steen') {
            scorePlayer++
            end.innerHTML = 'Jij wint deze ronde'
        }
        else if (computerChoiceString == 'schaar') {
            scoreRobot++
            end.innerHTML = 'De robot wint deze ronde'
        }
    }

    else if (playerChoiceString == 'steen') {
        if (computerChoiceString == 'schaar') {
            scorePlayer++
            end.innerHTML = 'Jij wint deze ronde'
        }
        else if (computerChoiceString == 'blad') {
            scoreRobot++
            end.innerHTML = 'De robot wint deze ronde'
        }

    }

    else if (playerChoiceString == 'schaar') {
        if (computerChoiceString == 'blad') {
            scorePlayer++
            end.innerHTML = 'Jij wint deze ronde'
        }
        else if (computerChoiceString == 'steen') {
            scoreRobot++
            end.innerHTML = 'De robot wint deze ronde'
        }
    }

    score1.innerHTML = scorePlayer
    score2.innerHTML = scoreRobot

    gameOver()
    console.log(scorePlayer, scoreRobot)

}

bladButton.onclick = onButtonClick
steenButton.onclick = onButtonClick
schaarButton.onclick = onButtonClick
