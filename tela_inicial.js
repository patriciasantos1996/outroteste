function tela1() {  //tela inicial
  background (fundo_background);
  
  image(logo_OI,160,200,55,55)
  image(logo_Futuros,110, 630, 160,33)
  
  noStroke();
  
  fill(120,120,120,100);
  rect(x1+4,y1+4,larg1,alt,5);
  rect(x2+4,y2+4,larg2,alt,5);//botões inciar e tutorial (sombra)
  fill(0);
  rect(x1,y1,larg1,alt,5);
  rect(x2,y2,larg2,alt,5);//botões inciar e tutorial

  
  textSize(24);
  textFont(fonte_pixel)
  textAlign(CENTER);
  fill(163,190,150);
  text('Iniciar Jogo', 190, 375);
  text('Jogar Tutorial', 190, 455);
  
  textSize(48);
  fill(0);
  text('Se Liga!', 190, 180);
  }