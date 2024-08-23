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

const removeElementos = () => {7
  imagemPesquisa.remove();
  fraseTexto1.remove();
  fraseTexto2.remove();
};

const buttonCopiar = ( ) => { 
const botaoCopiar = document.createElement("button");
botaoCopiar.innerText = "Copiar";
botaoCopiar.classList.add("botao-copiar");
campoTextoIncriptografado.appendChild(botaoCopiar);
}

const inserirDadosEncriptados = () => { 
  if(inputTextarea.value === ''){
    inputTextarea.placeholder =
      "Digite um texto sem acento e sem letra maiúscula para começar :)";
  }

  if(inputTextarea.value !== ''){    
     const textoEmbaralhado = document.createElement("p");
     textoEmbaralhado.classList.add("texto-embaralhado");
    textoEmbaralhado.innerText = incriptarTexto();  
    campoTextoIncriptografado.appendChild(textoEmbaralhado);

    removeElementos();
    buttonCopiar();
    avisoMinusculas.style.color = "green";
 }

 
btnCriptografar.addEventListener("click", () => {
  inserirDadosEncriptados();
});




   