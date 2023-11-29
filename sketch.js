var tela = 1;
var fonte_pixel;
var fonte_normal;
var fundo_background;
var logo_OI;
var logo_Futuros;
var imagem_tel1;
var imagem_tel2;
var imagem_curiosidade_difícil;
var imagem_curiosidade_fácil;
var imagem_teclado;

let acertou = false;
let parabensImg;


//para o tutorial
var tutorial0;
var tutorial1;
var tutorial2;
var tutorial3;
var tutorial4;
let imagemAtual;
let primeiraVez = true;


//valores botões comuns
var x1 = 90
var x2 = 65
var y1 = 340
var y2 = 420
var alt = 50
var larg1 = 200
var larg2 = 245

//valores botão voltar
var x_vt = 15
var y_vt = 55
var alt_vt = 30
var larg_vt = 70

//botões teclado numérico
var botoesNum = [];
var imagensBot = [];

function preload(){
  fonte_pixel = loadFont('fonte_nokiafc22.ttf');
  fonte_normal = loadFont ('fonte_SpaceGrotesk-Bold.ttf')
  fundo_background = loadImage('fundo verde antigo.png');
  logo_OI = loadImage('logo_oi.png');
  logo_Futuros = loadImage('logo_futuros.gif')
  imagem_tel1 = loadImage('img_nokia3310.jpg');
  imagem_tel2 = loadImage('img_nokiac3.jpg');
  imagem_curiosidade_difícil = loadImage('img_curiosidades_dificil.png');
  imagem_curiosidade_fácil = loadImage('img_curiosidades_fácil.png');
  imagem_texto_modo_difícil = loadImage('img_texto_dificil.png');
  imagem_teclado = loadImage('img_teclado_antigo_fundoverde.png')
  parabensImg = loadImage('img_curiosidades_fácil.png');
   
  tutorial0 = loadImage('tutorial0.png');
  tutorial1 = loadImage('tutorial1.png');
  tutorial2 = loadImage('tutorial2.png');
  tutorial3 = loadImage('tutorial3.png');
  tutorial4 = loadImage('tutorial4.png');
  tutorial5 = loadImage('tutorial5.png');
  tutorial6 = loadImage('tutorial6.png');
  tutorial7 = loadImage('tutorial7.png');
  tutorial8 = loadImage('tutorial8.png');
  
  imagensBot[0] = loadImage('img_tecla0.png');
  imagensBot[1] = loadImage('img_tecla1.png');
  imagensBot[2] = loadImage('img_tecla2.png');
  imagensBot[3] = loadImage('img_tecla3.png');
  imagensBot[4] = loadImage('img_tecla4.png');
  imagensBot[5] = loadImage('img_tecla5.png');
  imagensBot[6] = loadImage('img_tecla6.png');
  imagensBot[7] = loadImage('img_tecla7.png');
  imagensBot[8] = loadImage('img_tecla8.png');
  imagensBot[9] = loadImage('img_tecla9.png');
  imagensBot[11] = loadImage('img_tecla_backspace.png');
  
}

function setup() {
  createCanvas(382, 680);
  background(fundo_background)
  
  
  //relacionado ao wordle na tela 4
  	altura = height / 20;
	largura = altura / 1;
	espaçamento = largura / 9;
  
  
   //relacionado ao surgimento da primeira imagem no tutorial
   setTimeout(() => {
    imagemAtual = tutorial1;
    primeiraVez = false;
  }, 2500);
  
  
  
  let letras0 = [];
  botoesNum[0] = new Botao(0,letras0,160,605, imagensBot[0], 0);
  
  let letras1 = [];
  botoesNum[1] = new Botao(1,letras1,85,410, imagensBot[1], 1);
  
  let letras2 = ['A', 'B', 'C'];
  botoesNum[2] = new Botao(2,letras2,160,410, imagensBot[2], 2);
  
  let letras3 = ['D', 'E', 'F'];
  botoesNum[3] = new Botao(3,letras3,235,410, imagensBot[3], 3);
  
  let letras4 = ['G', 'H', 'I'];
  botoesNum[4] = new Botao(4,letras4,85,475, imagensBot[4], 4);
  
  let letras5 = ['J', 'K', 'L'];
  botoesNum[5] = new Botao(5,letras5,160,475, imagensBot[5], 5);
  
  let letras6 = ['M', 'N', 'O'];
  botoesNum[6] = new Botao(6,letras6,235,475, imagensBot[6], 6);
  
  let letras7 = ['P', 'Q', 'R', 'S'];
  botoesNum[7] = new Botao(7,letras7,85,540, imagensBot[7], 7);
  
  let letras8 = ['T', 'U', 'V'];
  botoesNum[8] = new Botao(8,letras8,160,540, imagensBot[8], 8);
  
  let letras9 = ['W', 'X', 'Y', 'Z'];
  botoesNum[9] = new Botao(9,letras9,235,540, imagensBot[9], 9);
  
  let letras11 = [];
  botoesNum[11] = new Botao(BACKSPACE,letras11,235,605, imagensBot[11], 11);

  
}

function draw() {
  
  //inicializando a tela inicial
  if(tela === 1){
    tela1();
  }
  //inicializando a tela de níveis
  else if(tela=== 2){
    tela2();
}
  //inicializando a tela de tutorial
 else  if(tela=== 3){
    tela3();
  }
   //inicializando a tela de nível fácil
 else if(tela=== 4){
    tela4();
  }
   //inicializando a tela de nível difícil
  else if(tela=== 5){
    tela5();
}  
}