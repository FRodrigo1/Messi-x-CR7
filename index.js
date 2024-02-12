const perguntas = [

    {
      pergunta: "Qual é a nacionalidade de Lionel Messi?",
      respostas: [
        "Brasileiro",
        "Argentino",
        "Português",
      ],
      correta: 1
    },
    {
      pergunta: "Em qual clube Lionel Messi começou sua carreira profissional?",
      respostas: [
        "Barcelona",
        "Manchester United",
        "Newell's Old Boys",
      ],
      correta: 2
    },
    {
      pergunta: "Quantas vezes Lionel Messi ganhou o prêmio de Melhor Jogador do Mundo da FIFA?",
      respostas: [
        "5",
        "7",
        "4",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a posição principal de Lionel Messi em campo?",
      respostas: [
        "Atacante",
        "Meio-campista",
        "Zagueiro",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o recorde de gols marcados por Lionel Messi em uma única temporada da La Liga?",
      respostas: [
        "40",
        "50",
        "60",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a nacionalidade de Cristiano Ronaldo?",
      respostas: [
        "Brasileiro",
        "Argentino",
        "Português",
      ],
      correta: 2
    },
    {
      pergunta: "Em qual clube Cristiano Ronaldo começou sua carreira profissional?",
      respostas: [
        "Sporting",
        "Real Madrid",
        "Manchester United",
      ],
      correta: 0
    },
    {
      pergunta: "Quantas vezes Cristiano Ronaldo ganhou o prêmio de Melhor Jogador do Mundo da FIFA?",
      respostas: [
        "4",
        "7",
        "5",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a posição principal de Cristiano Ronaldo em campo?",
      respostas: [
        "Atacante",
        "Meio-campista",
        "Zagueiro",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o recorde de gols marcados por Cristiano Ronaldo em uma única temporada da La Liga?",
      respostas: [
        "30",
        "40",
        "50",
      ],
      correta: 2
    },
  ];
  
    
  
  const quiz = document.querySelector('#quiz')
  const templete = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + "de" + totalDePerguntas
  
  for(const item of perguntas) {
  const quizItem = templete.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
  const estaCorreta = event.target.value == item.correta
  corretas.delete(item)
  if(estaCorreta) {
    corretas.add(item)
    }
  mostrarTotal.textContent = corretas.size + "de" + totalDePerguntas
  }
  
  
  quizItem.querySelector('dl').appendChild(dt)
  }
  quizItem.querySelector('dl dt').remove()
  
  quiz.appendChild(quizItem)
  
  } 
