function tela2() {  //tela de escolha dos níveis
  
  background (fundo_background);
  
  noStroke();

  fill(120,120,120,100);
  rect(x1+4,y1+4,larg1,alt,5);
  rect(x2+4,y2+4,larg2,alt,5);
  fill(0);
  rect(x1,y1,larg1, alt ,5);
  rect(x2,y2,larg2,alt,5);
  fill(0);
  rect(x_vt,y_vt,larg_vt,alt_vt,5); //voltar
  
  textSize(26);
  textFont(fonte_pixel);
  textAlign(CENTER);
  fill(163,190,150);
  text('Fácil', 190, 375);
  text('Difícil', 190, 455);
  
  textSize(12);
  fill(163,190,150);
  text('Voltar', 50, 75); //botão voltar para a tela de escolha dos níveis
  
  textSize(30);
  fill(0);
  text('Escolha um nível \nde dificuldade:', 190, 210);
  
}
