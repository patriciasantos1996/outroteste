function mouseReleased() { //ligação das telas
  
  if (tela ===1) {
    if (
      mouseX >= x1 &&
      mouseX <= x1 + larg1 &&
      mouseY >= y1 &&
      mouseY <= y1 + alt
    ) {
      tela = 2; //iniciar o jogo e escolher nível
      console.log('tela1 > tela2')
      
      
    } if (
      mouseX >= x2 &&
      mouseX <= x2 + larg2 &&
      mouseY >= y2 &&
      mouseY <= y2 + alt
    ) {
      tela = 3; //abrir tutorial
      console.log('tela1 > tela3')
    }
  }
   else if (tela === 2) {
    if (
      mouseX >= x_vt &&
      mouseX <= x_vt + larg_vt &&
      mouseY >= y_vt &&
      mouseY <= y_vt + alt_vt
    ) {
      tela = 1; // voltar da tela níveis para a tela inicial
      console.log('tela2 > tela1')
      
    }
    if (
      mouseX >= x2 &&
      mouseX <= x2 + larg2 &&
      mouseY >= y2 &&
      mouseY <= y2 + alt
    ) {
      tela = 5; // iniciar o modo difícil
      console.log('tela2 > tela5')
      
    }
   if (
      mouseX >= x1 &&
      mouseX <= x1 + larg1 &&
      mouseY >= y1 &&
      mouseY <= y1 + alt
    ) {
      tela = 4; // iniciar o modo fácil
      console.log('tela2 > tela4')
     

    }
 }  
  else if (tela === 4) {
    if (
      mouseX >= x_vt &&
      mouseX <= x_vt + larg_vt &&
      mouseY >= y_vt &&
      mouseY <= y_vt + alt_vt
    ) {
      tela = 2; // voltar de fácil para tela de níveis
      console.log('tela4 > tela2') 
    }
    
  }
else if (tela === 5) {
    if (
      mouseX >= x_vt &&
      mouseX <= x_vt + larg_vt &&
      mouseY >= y_vt &&
      mouseY <= y_vt + alt_vt
    ) {
      tela = 2; // voltar de difícil para tela níveis
      console.log('tela5 > tela2')
      
      }
    }
  
   else if (tela === 3){
  if (!primeiraVez) {
    if (imagemAtual === tutorial1) {
      console.log("tutorial 1 > 2");
      imagemAtual = tutorial2;
    } else if (imagemAtual === tutorial2) {
      imagemAtual = tutorial3;
      console.log("tutorial 2 > 3");
    } else if (imagemAtual === tutorial3) {
      imagemAtual = tutorial4;
      console.log("tutorial 3 > 4");
    } else if (imagemAtual === tutorial4) {
      imagemAtual = tutorial5;
      console.log("tutorial 4 > 5");
   } else if (imagemAtual === tutorial5) {
      imagemAtual = tutorial6;
      console.log("tutorial 5 > 6");   
  } else if (imagemAtual === tutorial6) {
      imagemAtual = tutorial7;
      console.log("tutorial 6 > 7");    
  } else if (imagemAtual === tutorial7) {
      imagemAtual = tutorial8;
      console.log("tutorial 7 > 8");    
  } else if (imagemAtual === tutorial8) {
      tela = 2;
      console.log("tutorial 8 > tela2");
      // Ao clicar na última imagem, redireciona para a tela 2 (escolha de níveis de jogo)
      
    }
  }
   }
  
  
}