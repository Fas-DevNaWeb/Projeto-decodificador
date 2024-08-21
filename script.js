let inputTextarea = document.getElementById("texto-incriptar");
let btnCriptografar = document.querySelector(".botao-criptogrfar");
let imagemPesquisa = document.querySelector(".img-pesquisa");
let fraseTexto1 = document.querySelector(".msg-nao-encontrada");
let fraseTexto2 = document.querySelector(".msg-texto-criptografar");
let campoTextoIncriptografado = document.querySelector(".teste");
let avisoMinusculas = document.querySelector(".aviso-minusculas");
let limparTexto = document.querySelector(".limpar-area-texto");
let btnDescripttografar = document.querySelector(".btn-descripttografar");

const chavesDeCriptografia = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
  enter: "e",
  imes: "i",
  ai: "a",
  ober: "o",
  ufat: "u",
};

const incriptarTexto = () => {
  let texto = inputTextarea.value;
  let e = "",
    i = "",
    a = "",
    o = "",
    u = "";

  for (let i = 0; i <= texto.length; i++) {
    e = texto.replace(/e/g, `${chavesDeCriptografia.e}`);
    i = e.replace(/i/g, `${chavesDeCriptografia.i}`);
    a = i.replace(/a/g, `${chavesDeCriptografia.a}`);
    o = a.replace(/o/g, `${chavesDeCriptografia.o}`);
    u = o.replace(/u/g, `${chavesDeCriptografia.u}`);
  }
  return u;
};

const desencriptarTexto = (textoEncriptado) => {
  let texto = textoEncriptado;
  let enter = "",
    imes = "",
    ai = "",
    ober = "",
    ufat = "";

  for (let i = 0; i <= texto.length; i++) {
    enter = texto.replace(/enter/g, `${chavesDeCriptografia.enter}`);
    imes = enter.replace(/imes/g, `${chavesDeCriptografia.imes}`);
    ai = imes.replace(/ai/g, `${chavesDeCriptografia.ai}`);
    ober = ai.replace(/ober/g, `${chavesDeCriptografia.ober}`);
    ufat = ober.replace(/ufat/g, `${chavesDeCriptografia.ufat}`);
  }
  return ufat;
};

const removeElementos = () => {
  imagemPesquisa.src = "";
  imagemPesquisa.alt = "";
  fraseTexto1.remove();
  fraseTexto2.remove();
};

const inserirDadosEncriptados = () => {
  const verificador = document.querySelector(".texto-embaralhado");
  if (verificador) {
    verificador.remove();
    imagemPesquisa.src = "img/High quality products 1 1.svg";
    campoTextoIncriptografado.appendChild(fraseTexto1);
    campoTextoIncriptografado.appendChild(fraseTexto2);

    const btnCopiar = document.querySelector(".botao-copiar");
    btnCopiar.remove();
  }

  const textoEmbaralhado = document.createElement("p");
  textoEmbaralhado.classList.add("texto-embaralhado");
  textoEmbaralhado.innerText = incriptarTexto();

  if (
    /[\u00C0-\u00FF]/.test(incriptarTexto()) ||
    /[A-Z]/.test(incriptarTexto())
  ) {
    avisoMinusculas.style.color = "red";

    if (avisoMinusculas.style.color === "red") {
      const txtEmbaralhado = document.querySelector(".texto-embaralhado");

      txtEmbaralhado.remove();

      imagemPesquisa.src = "img/High quality products 1 1.svg";
      campoTextoIncriptografado.appendChild(fraseTexto1);
      campoTextoIncriptografado.appendChild(fraseTexto2);

      const btnCopiar = document.querySelector(".botao-copiar");
      btnCopiar.remove();
    }
  } else if (inputTextarea.value == "") {
    inputTextarea.placeholder =
      "Digite um texto sem acento e sem letra maiúscula para começar :)";
  } else {
    removeElementos();

    campoTextoIncriptografado.appendChild(textoEmbaralhado);
    avisoMinusculas.style.color = "black";

    const botaoCopiar = document.createElement("button");
    botaoCopiar.innerText = "Copiar";
    botaoCopiar.classList.add("botao-copiar");
    campoTextoIncriptografado.appendChild(botaoCopiar);
  }
};

btnCriptografar.addEventListener("click", () => {
  inserirDadosEncriptados();
});

btnDescripttografar.addEventListener("click", () => {
  if (inputTextarea.value === "") {
    inputTextarea.placeholder =
      "Digite um texto encriptografado para podermos fazer a tradução (:0";
  }else{
    const textoEmbaralhado1 = document.querySelector(".texto-embaralhado");
    if (textoEmbaralhado1) {
      textoEmbaralhado1.remove();
    }
    const frase = inputTextarea.value;
    const fraseDesencriptada = desencriptarTexto(frase);

    const fraseDesencriptada2 = document.createElement("p");
    fraseDesencriptada2.className = "texto-embaralhado";
    fraseDesencriptada2.innerText = fraseDesencriptada;
    campoTextoIncriptografado.appendChild(fraseDesencriptada2);
    removeElementos();

    const botaoCopiar = document.createElement("button");
    botaoCopiar.innerText = "Copiar";
    botaoCopiar.classList.add("botao-copiar");
    campoTextoIncriptografado.appendChild(botaoCopiar);
  }

  if( !(inputTextarea.value.includes('ai')) ){
    inputTextarea.value ='';
    inputTextarea.placeholder = 'Digite um texto emcriptografado ):';

    imagemPesquisa.src = "img/High quality products 1 1.svg";
    campoTextoIncriptografado.appendChild(fraseTexto1);
    campoTextoIncriptografado.appendChild(fraseTexto2);

    const textoEmbaralhado3 = document.querySelector(".texto-embaralhado");
    textoEmbaralhado3.remove();
    
    
  }const btnCopiar = document.querySelector('.botao-copiar');
    btnCopiar.remove();
});
/*
limparTexto.addEventListener('click', () => {
  inputTextarea.value = '';
  inputTextarea.placeholder = 'Digite seu texto aqui !!'
  const verificador = document.querySelector(".texto-embaralhado");
  if (verificador) {
    verificador.remove();
  
    imagemPesquisa.src = "img/High quality products 1 1.svg";
    campoTextoIncriptografado.appendChild(fraseTexto1);
    campoTextoIncriptografado.appendChild(fraseTexto2);

    const teste =document.querySelector('.botao-copiar');
    teste.remove();
    console.log(teste);
}})*/
