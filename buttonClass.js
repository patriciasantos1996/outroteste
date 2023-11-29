

class Botao {
  constructor(numb,letras,x1,y1, imagem, indice){
    this.n = numb;
    this.l = letras;
    this.x = x1;
    this.y = y1;
    this.img = imagem;
    this.i = 0; // indice da letra que está sendo criada
    this.b = indice; // indice deste botao
    
  }
  
  mostrar(){
    image(this.img, this.x, this.y)
    
  }
  
  clicar(){
    if(mouseX > this.x && mouseX < this.x + this.img.width && mouseY > this.y && mouseY < this.y + this.img.height){
     
      if(ultimoBotao == this.b){
         this.i = this.i+1;
        let tamanho = rodadas[rodadaAtual].letras.length;
        rodadas[rodadaAtual].letras[tamanho -1] = this.l[this.i];
      } else {
        append(rodadas[rodadaAtual].letras, this.l[this.i]);
      }
       if(Botao === imagensBot[11]){
      letrasRodada.pop();
    }
      }
      
    }
}