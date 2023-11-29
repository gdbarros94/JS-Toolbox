// Funções de manipulação de elementos
function buscarPorElemento(selector) {
  return document.querySelector(selector);
}

function adicionarClasse(elemento, classe) {
  elemento.classList.add(classe);
}

function removerClasse(elemento, classe) {
  elemento.classList.remove(classe);
}

function alterarAtributo(elemento, atributo, valor) {
  elemento.setAttribute(atributo, valor);
}

function ocultarElemento(elemento) {
  elemento.style.display = 'none';
}

function mostrarElemento(elemento) {
  elemento.style.display = '';
}

function desabilitarElemento(elemento) {
  elemento.disabled = true;
}

function habilitarElemento(elemento) {
  elemento.disabled = false;
}

// Funções de manipulação de CSS
function alterarPropriedadeCSS(elemento, propriedade, valor) {
  elemento.style[propriedade] = valor;
}

function adicionarEstilo(elemento, estilo) {
  elemento.style.cssText += estilo;
}

function removerEstilo(elemento, estilo) {
  elemento.style.cssText = elemento.style.cssText.replace(estilo, '');
}

// Funções de eventos
function adicionarEvento(elemento, evento, callback) {
  elemento.addEventListener(evento, callback);
}

function removerEvento(elemento, evento) {
  elemento.removeEventListener(evento);
}

// Funções de manipulação de elementos (continuação)
function removerElemento(elemento) {
  elemento.parentNode.removeChild(elemento);
}

function criarElemento(tag) {
  return document.createElement(tag);
}

function definirConteudo(elemento, conteudo) {
  elemento.innerHTML = conteudo;
}

function obterValorElemento(elemento) {
  return elemento.value;
}

function definirValorElemento(elemento, valor) {
  elemento.value = valor;
}

function focarElemento(elemento) {
  elemento.focus();
}

function rolarParaCima() {
  window.scrollTo(0, 0);
}

function rolarParaElemento(elemento) {
  elemento.scrollIntoView({ behavior: 'smooth' });
}

// Funções de manipulação de CSS (continuação)
function obterEstiloComputado(elemento, propriedade) {
  return getComputedStyle(elemento).getPropertyValue(propriedade);
}

// Funções de eventos (continuação)
function impedirAcaoPadrao(evento) {
  evento.preventDefault();
}

function pararPropagacao(evento) {
  evento.stopPropagation();
}

// Funções de animações (continuação)
function pausarAnimacao(elemento) {
  elemento.style.animationPlayState = 'paused';
}

function retomarAnimacao(elemento) {
  elemento.style.animationPlayState = 'running';
}

// Funções de acessibilidade (continuação)
function marcarComoImportante(elemento) {
  elemento.setAttribute('aria-important', 'true');
}

// Funções de internacionalização (continuação)
function obterIdiomaDoNavegador() {
  return navigator.language || navigator.userLanguage;
}

function formatarNumero(numero, opcoes) {
  return new Intl.NumberFormat(undefined, opcoes).format(numero);
}

// Outras funções
function agendarFuncao(callback, tempo) {
  return setTimeout(callback, tempo);
}

function cancelarAgendamento(timeoutId) {
  clearTimeout(timeoutId);
}

// Funções de manipulação de elementos (continuação)
function inserirAntes(elementoNovo, elementoAlvo) {
  elementoAlvo.parentNode.insertBefore(elementoNovo, elementoAlvo);
}

function inserirDepois(elementoNovo, elementoAlvo) {
  elementoAlvo.parentNode.insertBefore(elementoNovo, elementoAlvo.nextSibling);
}

function obterFilhos(elemento) {
  return Array.from(elemento.children);
}

function substituirElemento(elementoNovo, elementoAntigo) {
  elementoAntigo.parentNode.replaceChild(elementoNovo, elementoAntigo);
}

// Funções de manipulação de CSS (continuação)
function obterAlturaViewport() {
  return window.innerHeight || document.documentElement.clientHeight;
}

function obterLarguraViewport() {
  return window.innerWidth || document.documentElement.clientWidth;
}

// Funções de eventos (continuação)
function adicionarEventoUmaVez(elemento, evento, callback) {
  const funcaoTemporaria = function (e) {
    callback(e);
    elemento.removeEventListener(evento, funcaoTemporaria);
  };
  elemento.addEventListener(evento, funcaoTemporaria);
}

// Funções de animações (continuação)
function alternarAnimacao(elemento) {
  if (elemento.style.animationPlayState === 'paused') {
    retomarAnimacao(elemento);
  } else {
    pausarAnimacao(elemento);
  }
}

// Funções de acessibilidade (continuação)
function definirAtributoAria(elemento, atributo, valor) {
  elemento.setAttribute(`aria-${atributo}`, valor);
}

// Funções de internacionalização (continuação)
function formatarData(data, opcoes) {
  return new Intl.DateTimeFormat(undefined, opcoes).format(data);
}
