let inputTextarea = document.querySelector(".texto-incriptar");
let btnCriptografar = document.querySelector(".botao-criptogrfar");
let imagemPesquisa = document.querySelector(".img-pesquisa");
let fraseTexto1 = document.querySelector(".msg-nao-encontrada");
let fraseTexto2 = document.querySelector(".msg-texto-criptografar");
let campoTextoIncriptografado = document.querySelector(".teste");
let avisoMinusculas = document.querySelector(".aviso-minusculas");
let limparTexto = document.querySelector(".limpar-area-texto");
let btnDescripttografar = document.querySelector(".btn-descripttografar");
let btnlimpar = document.querySelector(".btn-limpar");
let botaoCopiar = document.querySelector(".tst");
let campoTeste = document.querySelector(".teste");
let verificador = document.querySelector(".texto-embaralhado");

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
  7;
  imagemPesquisa.remove();
  fraseTexto1.remove();
  fraseTexto2.remove();
};

const inserirDadosEncriptados = () => {
  if (inputTextarea.value === "") {
    inputTextarea.placeholder =
      "Digite um texto sem acento e sem letra maiúscula para começar :)";
    avisoMinusculas.innerText = "Apenas letras minusculas e sem acento";
  } else {
    if (
      /[\u00C0-\u00FF]/.test(incriptarTexto()) ||
      /[A-Z]/.test(incriptarTexto())
    ) {
      avisoMinusculas.style.color = "red";
      const txtEmbaralhado = document.querySelector(".texto-embaralhado");
      txtEmbaralhado.remove();

      imagemPesquisa.src = "img/High quality products 1 1.svg";
      campoTextoIncriptografado.appendChild(imagemPesquisa);
      campoTextoIncriptografado.appendChild(fraseTexto1);
      campoTextoIncriptografado.appendChild(fraseTexto2);

      botaoCopiar.style.display = "none";
      avisoMinusculas.innerText = "Apenas letras minusculas e sem acento";
    } else {
      const textoEmbaralhado = document.createElement("p");
      textoEmbaralhado.classList.add("texto-embaralhado");
      textoEmbaralhado.innerText = incriptarTexto();
      campoTextoIncriptografado.appendChild(textoEmbaralhado);
      removeElementos();
      botaoCopiar.style.display = "block";
      avisoMinusculas.innerText = "Texto digitado corretamente !!!";
      avisoMinusculas.style.color = "green";
    }

    if (avisoMinusculas.style.color === "red") {
      const txtEmbaralhado = document.querySelector(".texto-embaralhado");
      txtEmbaralhado.remove();

      imagemPesquisa.src = "img/High quality products 1 1.svg";
      campoTextoIncriptografado.appendChild(imagemPesquisa);
      campoTextoIncriptografado.appendChild(fraseTexto1);
      campoTextoIncriptografado.appendChild(fraseTexto2);

      botaoCopiar.style.display = "none";
      avisoMinusculas.innerText = "Apenas letras minusculas e sem acento";
    }
  }
};

btnlimpar.addEventListener("click", () => {
  if (inputTextarea.value === "") {
    inputTextarea.placeholder = "Nenhum texto para apagar!";
  } else {
    inputTextarea.value = "";
    inputTextarea.focus();
  }
});

btnCriptografar.addEventListener("click", () => {
  inserirDadosEncriptados.innerHTML = '';
  inserirDadosEncriptados();
});

btnDescripttografar.addEventListener("click", () => {
  if (inputTextarea.value === "") {
    inputTextarea.placeholder =
      "Digite um texto encriptografado para podermos fazer a tradução (:0";
    avisoMinusculas.innerText = "Apenas letras minusculas e sem acento";
  } else {
    let fraseRecebida = inputTextarea.value;
    if (
      !fraseRecebida.includes("ai") ||
      !fraseRecebida.includes("enter") ||
      !fraseRecebida.includes("imes") ||
      !fraseRecebida.includes("ober") ||
      !fraseRecebida.includes("ufat")
    ) {
      inputTextarea.value = "";
      inputTextarea.placeholder = "Digite um texto emcriptografado ):";
      avisoMinusculas.innerText = "Apenas letras minusculas e sem acento";
      avisoMinusculas.style.color = "red";

      imagemPesquisa.src = "img/High quality products 1 1.svg";
      campoTextoIncriptografado.appendChild(imagemPesquisa);
      campoTextoIncriptografado.appendChild(fraseTexto1);
      campoTextoIncriptografado.appendChild(fraseTexto2);

      const textoEmbaralhado3 = document.querySelector(".texto-embaralhado");
      textoEmbaralhado3.remove();

      botaoCopiar.style.display = "none";
    }

    if (
      fraseRecebida.includes("ai") ||
      fraseRecebida.includes("enter") ||
      fraseRecebida.includes("imes") ||
      fraseRecebida.includes("ober") ||
      fraseRecebida.includes("ufat")
    ) {
      const fraseDesencriptada = desencriptarTexto(fraseRecebida);

      const fraseDesencriptada2 = document.createElement("p");
      fraseDesencriptada2.className = "texto-embaralhado";
      fraseDesencriptada2.innerText = fraseDesencriptada;
      campoTextoIncriptografado.appendChild(fraseDesencriptada2);
      removeElementos();
      botaoCopiar.style.display = "block";
    }
  }
});

async function clipboardCopy() {
  let text = document.querySelector(".texto-embaralhado").innerText;
  await navigator.clipboard.writeText(text);
}
botaoCopiar.addEventListener("click", clipboardCopy);
