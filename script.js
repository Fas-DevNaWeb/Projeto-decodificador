/*Boas vindas ao primeiro desafio!

Durante estas duas semanas, vamos trabalhar em uma aplicação que criptografa textos, assim você poderá trocar mensagens secretas com outras pessoas que saibam o segredo da criptografia utilizada.

As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"

Requisitos:
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

Por exemplo:
"gato" => "gaitober"
gaitober" => "gato"

A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções
O resultado deve ser exibido na tela.
Extras:
- Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos.

Temos um período de tempo de quatro semanas para desenvolver o projeto e vamos trabalhar com o sistema ágil de desenvolvimento, utilizando o Trello da seguinte forma:

A coluna Pronto pra iniciar apresenta os cartões com os elementos ainda não desenvolvidos.
Já na coluna Desenvolvendo ficarão os elementos que você estiver desenvolvendo no momento. Ao iniciar uma tarefa, você poderá mover o cartão que contém a tarefa para esta coluna.
No Pausado estarão os elementos que você começou a desenvolver, mas precisou parar por algum motivo.
Por fim, a coluna Concluído terá os elementos já concluídos.
O Trello é uma ferramenta de uso individual para você controlar o andamento das suas atividades, mas ela não será avaliada.

Bom projeto!
*/
/**
 *
 * Digite seu texto aqui, estamos muito felizes por você participar desse projeto testando e dando a sua opiniao muito obrigado...
 */
let inputTextarea = document.getElementById("texto-incriptar");
let btnCriptografar = document.querySelector(".botao-criptogrfar");
let imagemPesquisa = document.querySelector(".img-pesquisa");
let fraseTexto1 = document.querySelector(".msg-nao-encontrada");
let fraseTexto2 = document.querySelector(".msg-texto-criptografar");
let campoTextoIncriptografado = document.querySelector(".teste");
let avisoMinusculas = document.querySelector(".aviso-minusculas");
console.log(avisoMinusculas);

const chavesDeCriptografia = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
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

const removeElementos = () => {
  imagemPesquisa.src = "";
  imagemPesquisa.alt = "";
  fraseTexto1.remove();
  fraseTexto2.remove();
};
const inserirDadosEncriptados = () => {
  const textoEmbaralhado = document.createElement("p");
  textoEmbaralhado.classList.add("texto-embaralhado");
  textoEmbaralhado.innerText = incriptarTexto();

  if (
    /[\u00C0-\u00FF]/.test(incriptarTexto()) ||
    /[A-Z]/.test(incriptarTexto())
  ) {
    avisoMinusculas.style.color = "red";
  } else {
    removeElementos();
    campoTextoIncriptografado.appendChild(textoEmbaralhado);
  }
};

btnCriptografar.addEventListener("click", () => {
  inserirDadosEncriptados();
});
console.log(incriptarTexto());
