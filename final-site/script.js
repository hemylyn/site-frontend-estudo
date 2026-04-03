// Exemplo básico de JavaScript para manipulação da DOM
// Este script demonstra conceitos fundamentais para iniciantes

// 1. Selecionando elementos da DOM
const titulo = document.querySelector('h1');
const paragrafo = document.querySelector('p');
const botao = document.createElement('button');

// 2. Manipulando o conteúdo e estilo
botao.textContent = 'Clique aqui para mudar o título!';
botao.style.padding = '10px 20px';
botao.style.backgroundColor = '#4CAF50';
botao.style.color = 'white';
botao.style.border = 'none';
botao.style.borderRadius = '5px';
botao.style.cursor = 'pointer';

// 3. Adicionando evento de clique
botao.addEventListener('click', function() {
    // Mudando o texto do título
    titulo.textContent = 'Título alterado com JavaScript!';

    // Mudando a cor do parágrafo
    paragrafo.style.color = 'blue';

    // Mostrando uma mensagem no console
    console.log('Botão clicado! O título foi alterado.');
});

// 4. Inserindo o botão na página
// Vamos adicionar o botão após o parágrafo no header
const header = document.querySelector('header');
header.appendChild(botao);

// 5. Exemplo de função
function saudacao() {
    alert('Olá! Bem-vindo ao estudo de JavaScript!');
}

// Chamando a função quando a página carrega
window.addEventListener('load', function() {
    console.log('Página carregada! JavaScript está funcionando.');
    // Você pode chamar saudacao() aqui se quiser
});

// 6. Exemplo de manipulação de array (básico)
const tiposDeCha = ['Chá Verde', 'Chá Preto', 'Chá Branco', 'Chá Oolong'];
console.log('Tipos de chá disponíveis:', tiposDeCha);

// 7. Exemplo de loop
tiposDeCha.forEach(function(cha) {
    console.log('Tipo de chá:', cha);
});