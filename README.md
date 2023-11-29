## JS-Toolbox
Conjunto de funções em javascript para ser usado durante as aulas de frontend

# Documentação das Funções JavaScript 🚀

## Funções de Manipulação de Elementos

### `buscarPorElemento(selector)`
Retorna o primeiro elemento HTML encontrado com o seletor especificado.

**Exemplo de Uso:**
```javascript
const elemento = buscarPorElemento('#minhaDiv');
```

### `adicionarClasse(elemento, classe)`
Adiciona uma classe ao elemento HTML.

**Exemplo de Uso:**
```javascript
const minhaDiv = document.getElementById('minhaDiv');
adicionarClasse(minhaDiv, 'destaque');
```

### `removerClasse(elemento, classe)`
Remove uma classe do elemento HTML.

**Exemplo de Uso:**
```javascript
const minhaDiv = document.getElementById('minhaDiv');
removerClasse(minhaDiv, 'destaque');
```

### `alterarAtributo(elemento, atributo, valor)`
Altera o valor de um atributo do elemento HTML.

**Exemplo de Uso:**
```javascript
const minhaImagem = document.getElementById('minhaImagem');
alterarAtributo(minhaImagem, 'src', 'nova-imagem.jpg');
```

### `ocultarElemento(elemento)`
Oculta o elemento HTML.

**Exemplo de Uso:**
```javascript
const minhaDiv = document.getElementById('minhaDiv');
ocultarElemento(minhaDiv);
```

### `mostrarElemento(elemento)`
Mostra o elemento HTML.

**Exemplo de Uso:**
```javascript
const minhaDiv = document.getElementById('minhaDiv');
mostrarElemento(minhaDiv);
```

### `desabilitarElemento(elemento)`
Desabilita o elemento HTML.

**Exemplo de Uso:**
```javascript
const meuBotao = document.getElementById('meuBotao');
desabilitarElemento(meuBotao);
```

### `habilitarElemento(elemento)`
Habilita o elemento HTML.

**Exemplo de Uso:**
```javascript
const meuBotao = document.getElementById('meuBotao');
habilitarElemento(meuBotao);
```

## Funções de Manipulação de CSS

### `alterarPropriedadeCSS(elemento, propriedade, valor)`
Altera o valor de uma propriedade CSS do elemento HTML.

**Exemplo de Uso:**
```javascript
const minhaDiv = document.getElementById('minhaDiv');
alterarPropriedadeCSS(minhaDiv, 'color', 'blue');
```

### `adicionarEstilo(elemento, estilo)`
Adiciona um estilo ao elemento HTML.

**Exemplo de Uso:**
```javascript
const minhaDiv = document.getElementById('minhaDiv');
adicionarEstilo(minhaDiv, 'font-size: 16px; color: red;');
```

### `removerEstilo(elemento, estilo)`
Remove um estilo do elemento HTML.

**Exemplo de Uso:**
```javascript
const minhaDiv = document.getElementById('minhaDiv');
removerEstilo(minhaDiv, 'font-size: 16px;');
```

## Funções de Eventos

### `adicionarEvento(elemento, evento, callback)`
Adiciona um evento ao elemento HTML.

**Exemplo de Uso:**
```javascript
const meuBotao = document.getElementById('meuBotao');
adicionarEvento(meuBotao, 'click', () => alert('Botão clicado!'));
```

### `removerEvento(elemento, evento)`
Remove um evento do elemento HTML.

**Exemplo de Uso:**
```javascript
const meuBotao = document.getElementById('meuBotao');
removerEvento(meuBotao, 'click');
```

## Funções de Manipulação de Elementos (Continuação)

### `removerElemento(elemento)`
Remove o elemento HTML do seu pai.

**Exemplo de Uso:**
```javascript
const minhaDiv = document.getElementById('minhaDiv');
removerElemento(minhaDiv);
```

### `criarElemento(tag)`
Cria um novo elemento HTML com a tag especificada.

**Exemplo de Uso:**
```javascript
const novoParagrafo = criarElemento('p');
```

### `definirConteudo(elemento, conteudo)`
Define o conteúdo interno do elemento HTML.

**Exemplo de Uso:**
```javascript
const meuParagrafo = document.getElementById('meuParagrafo');
definirConteudo(meuParagrafo, 'Novo conteúdo');
```

### `obterValorElemento(elemento)`
Obtém o valor de um elemento de formulário.

**Exemplo de Uso:**
```javascript
const meuInput = document.getElementById('meuInput');
const valor = obterValorElemento(meuInput);
```

### `definirValorElemento(elemento, valor)`
Define o valor de um elemento de formulário.

**Exemplo de Uso:**
```javascript
const meuInput = document.getElementById('meuInput');
definirValorElemento(meuInput, 'Novo valor');
```

### `focarElemento(elemento)`
Dá foco ao elemento HTML.

**Exemplo de Uso:**
```javascript
const meuInput = document.getElementById('meuInput');
focarElemento(meuInput);
```

### `rolarParaCima()`
Rola a página para o topo.

**Exemplo de Uso:**
```javascript
rolarParaCima();
```

### `rolarParaElemento(elemento)`
Rola a página até o elemento HTML especificado suavemente.

**Exemplo de Uso:**
```javascript
const minhaDiv = document.getElementById('minhaDiv');
rolarParaElemento(minhaDiv);
```

## Funções de Manipulação de CSS (Continuação)

### `obterEstiloComputado(elemento, propriedade)`
Obtém o valor computado de uma propriedade CSS para o elemento HTML.

**Exemplo de Uso:**
```javascript
const minhaDiv = document.getElementById('minhaDiv');
const corFundo = obterEstiloComputado(minhaDiv, 'background-color');
```

## Funções de Eventos (Continuação)

### `impedirAcaoPadrao(evento)`
Impede a ação padrão associada a um evento.

**Exemplo de Uso:**
```javascript
const meuLink = document.getElementById('meuLink');
adicionarEvento(meuLink, 'click', (event) => {
  impedirAcaoPadrao(event);
  // Outras ações personalizadas...
});
```

### `pararPropagacao(evento)`
Interrompe a propagação do evento, impedindo que alcance elementos pai ou descendentes.

**Exemplo de Uso:**
```javascript
const meuBotao = document.getElementById('meuBotao');
adicionarEvento(meuBotao, 'click', (event) => {
  alert('Botão clicado!');
  pararPropagacao(event);
});
```

## Funções de Animações (Continuação)

### `pausarAnimacao(elemento)`
Pausa a animação do elemento HTML.

**

Exemplo de Uso:**
```javascript
const minhaDiv = document.getElementById('minhaDiv');
pausarAnimacao(minhaDiv);
```

### `retomarAnimacao(elemento)`
Retoma a animação do elemento HTML.

**Exemplo de Uso:**
```javascript
const minhaDiv = document.getElementById('minhaDiv');
retomarAnimacao(minhaDiv);
```

## Funções de Acessibilidade (Continuação)

### `marcarComoImportante(elemento)`
Adiciona o atributo 'aria-important' ao elemento, indicando sua importância.

**Exemplo de Uso:**
```javascript
const meuElemento = document.getElementById('meuElemento');
marcarComoImportante(meuElemento);
```

## Funções de Internacionalização (Continuação)

### `obterIdiomaDoNavegador()`
Obtém o idioma definido no navegador.

**Exemplo de Uso:**
```javascript
const idioma = obterIdiomaDoNavegador();
console.log(`Idioma do navegador: ${idioma}`);
```

### `formatarNumero(numero, opcoes)`
Formata um número de acordo com as opções fornecidas.

**Exemplo de Uso:**
```javascript
const numero = 12345.6789;
const numeroFormatado = formatarNumero(numero, { style: 'currency', currency: 'BRL' });
console.log(numeroFormatado); // R$ 12.345,68
```

## Outras Funções

### `agendarFuncao(callback, tempo)`
Agenda a execução de uma função após um determinado intervalo de tempo.

**Exemplo de Uso:**
```javascript
const timeoutId = agendarFuncao(() => console.log('Função agendada executada!'), 2000);
```

### `cancelarAgendamento(timeoutId)`
Cancela o agendamento de uma função que seria executada após um intervalo de tempo.

**Exemplo de Uso:**
```javascript
const timeoutId = agendarFuncao(() => console.log('Função agendada executada!'), 2000);
// ... alguma lógica ...
cancelarAgendamento(timeoutId);
```
