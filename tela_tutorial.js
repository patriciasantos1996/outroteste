function tela3(){   // tela de tutorial
  background (tutorial0);
  
  // Se ainda for a primeira vez, não desenhe nada
  if (!primeiraVez) {
    image(imagemAtual, 0, 0, width, height);
  }
}
