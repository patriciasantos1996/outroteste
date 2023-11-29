let palavra = ["n", "o", "k", "i", "a","3","3","1","0"];
let largura, altura, espaçamento;
let rodadaAtual = 0;
let letrasRodada = [];
let cores = [];
let mensagem = "";
let mostrarMensagem = false;
let tempoExibicao = 0.1; // Tempo em milissegundos (3 segundos)
let tempoInicioMensagem = 0;



function tela4(){  //primeira tela do nível fácil
  background (fundo_background);
  
  noStroke()
  fill(0);
  rect(x_vt,y_vt,larg_vt,alt_vt,5);//voltar
  textSize(12);
  textFont(fonte_pixel);
  textAlign(CENTER);
  fill(163,190,150);
  text('Voltar', 50, 73); //botão voltar para a tela de escolha dos níveis
  
  textSize(30);
  fill(0);
  text('Fase 1', 190, 125);
  
  
  fill(120,120,120,100);
  rect(40+4,172+4,300,150,5)
  fill(255);
  rect(40,172,300,150,5)
  image (imagem_tel1,110,172,150,150);
  
  
  fill(0);
  textSize(16);
  text('Fácil', 335, 73);
  fill(0);
  textSize(14);
  text('Escreva usando o teclado numérico.', 190, 155);
  
  
  fill(0);
  textSize(11);
  textFont(fonte_normal);
  text('66', 38, 385);
  text('666', 78, 385);
  text('55', 115, 385);
  text('444', 153, 385);
  text('2', 190, 385);
  text('3333', 229, 385);
  text('3333', 265, 385);
  text('1', 303, 385);
  text('0', 341, 385);
  
  
  //teclado
  
  for(let i = 0; i < 9; i++){
    botoesNum[0].mostrar();
    botoesNum[1].mostrar();
    botoesNum[2].mostrar();
    botoesNum[3].mostrar();
    botoesNum[4].mostrar();
    botoesNum[5].mostrar();
    botoesNum[6].mostrar();
    botoesNum[7].mostrar();
    botoesNum[8].mostrar();
    botoesNum[9].mostrar();
    botoesNum[11].mostrar();
  }
  

  //AQUI COMEÇA O CÓDIGO DO JOGO
  
  fill(255);
  textSize(28);
  textFont(fonte_pixel);
  textAlign(CENTER);
 
  if (acertou) {
    image(parabensImg, 0, 0); // Exibe a curiosidade ao acertar a palavra
  } else {
    mostrarRodada();
    exibirMensagem();
  }
  
}

function mostrarRodada() {
  for (let i = 0; i < palavra.length; i++) {
    noStroke();
    if (cores[i] === 2) {
      fill(0, 150, 0); // Verde para letras corretas
    } else if (cores[i] === 1) {
      fill(150, 150, 0); // Amarelo para letras corretas na posição errada
    } else {
      fill(0); // Cor padrão para letras erradas
    }
  
    rect(
      (width / 3) - (largura * 3.1) + ((largura + espaçamento) * i),
      335,
      largura,
      altura,
      6
    );
    fill(255);
    if (letrasRodada.length > i) {
      text(
        letrasRodada[i].toUpperCase(),
        (width / 2.9) - (largura * 2.8) + ((largura + espaçamento) * i) + espaçamento,
        357 + espaçamento * 2
      );
    }
  }
}

function exibirMensagem() {
  fill(255);
  textSize(20);
  text(mensagem, 190, 450); // Posição da mensagem na tela
  
  if (mostrarMensagem && millis() - tempoInicioMensagem >= tempoExibicao) {
      mostrarMensagem = false;
}
}

function verificarPalavra() {
  if (letrasRodada.length === palavra.length) {
    for (let i = 0; i < palavra.length; i++) {
      if (letrasRodada[i] === palavra[i]) {
        cores[i] = 2; // Define como verde para letras corretas no lugar certo
      } else if (palavra.includes(letrasRodada[i])) {
        cores[i] = 1; // Define como amarelo para letras corretas no lugar errado
      } else {
        cores[i] = 0; // Define como cor padrão para letras erradas
      }
    }
  if (cores.every(cor => cor === 2)) {
      acertou = true; // Define que acertou a palavra para exibir a imagem
    } else {
      mensagem = "Que pena! \nVocê errou a palavra. \nTente novamente.";
      mostrarMensagem = true; // Define para mostrar a mensagem
      tempoInicioMensagem = millis();
    }
    letrasRodada = [];
  } else {
    mensagem = "A palavra inserida não \npossui o tamanho correto!";
    mostrarMensagem = true; // Define para mostrar a mensagem
    tempoInicioMensagem = millis();
  }
}

	//check() {

		for (let i = 0; i < this.letras.length; i++) {
            if(this.letras[i] === palavra[i]) {
              this.estado[i] = 2;
            } else {
              this.estado[i] = 1;
            }
			// for (let j = 0; j < palavra.length; j++) {
			// 	print(this.letras[i] + "   " + palavra[j]);
			// 	if (this.letras[i] === palavra[j]) {
			// 		if (i == j) {
			// 			this.estado[i] = 2; // letra certa lugar certo
			// 			//console.log(this.letras[i] + " certo!");
			// 		} else {
			// 			this.estado[i] = 1; // letra certa lugar errado
			// 			//console.log(this.letras[i] + " quase lá");
			// 		}
			// 	}
			// }
	//	}
		//this.check = true;
    }

function keyPressed() {
  if (keyCode === BACKSPACE) {
    if (letrasRodada.length > 0) {
      letrasRodada.pop();
    }
  } else if (keyCode === ENTER) {
    verificarPalavra();
  } else {
    letrasRodada.push(key);
    cores.push(0); // Inicializa as cores como padrão para todas as letras inseridas
  }
}