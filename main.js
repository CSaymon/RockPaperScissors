let escolha
let random
let empate = 0
let win = 0
let lost = 0
let removeClassPlayer
let removeClassBot

function play(id) {
  document.querySelector('.escolhido').classList.remove(removeClassPlayer)
  document.querySelector('.bot').classList.remove(removeClassBot)
  random = Math.floor(Math.random() * 3 + 1)
  if (random == 1) {
    bot = 'rock'
  } else if (random == 2) {
    bot = 'paper'
  } else {
    bot = 'scissors'
  }
  document.querySelector('.bot').classList.add(bot)

  removeClassBot = bot
  removeClassPlayer = id
  document.querySelector('.escolhido').classList.add(id)

  if (id == 'rock' && bot == 'rock') {
    empate++
  } else if (id == 'rock' && bot == 'paper') {
    console.log('Perdeu')
    lost++
  } else if (id == 'rock' && bot == 'scissors') {
    console.log('Ganhou')
    win++
  } else if (id == 'paper' && bot == 'paper') {
    console.log('Empate')
    empate++
  } else if (id == 'paper' && bot == 'scissors') {
    console.log('Perdeu')
    lost++
  } else if (id == 'paper' && bot == 'rock') {
    console.log('Ganhou')
    win++
  } else if (id == 'scissors' && bot == 'scissors') {
    console.log('Empate')
    empate++
  } else if (id == 'scissors' && bot == 'rock') {
    console.log('Perdeu')
    lost++
  } else if (id == 'scissors' && bot == 'paper') {
    console.log('Ganhou')
    win++
  }
  document.querySelector('.win').innerHTML = `Vitórias = ${win}`
  document.querySelector('.lost').innerHTML = `Derrotas = ${lost}`
  document.querySelector('.empate').innerHTML = `Empates = ${empate}`
}
