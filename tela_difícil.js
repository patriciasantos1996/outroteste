

function tela5(){  //primeira tela do nível difícil
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
  image (imagem_tel2,110,172,150,150);
  
  
  fill(0);
  textSize(16);
  text('Difícil', 335, 73);
  fill(0);
  textSize(14);
  text('Escreva usando o teclado QWERTY.', 190, 155);

  
   
}