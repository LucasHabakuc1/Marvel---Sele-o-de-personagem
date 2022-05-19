/* 
OBEJITVO 1 - qunado passar mouse em cima do personagem temos que:

 - colocar a classe slecionado no personagem que passamos o mouse em cima para adiciona a anaimação nele.

 - retirar a classe seleiconado do personagem que está selecionado


 OBJETIVO 2 - quando passar o mouse em cima do personagem, torcar a imagem e nomes do personagem grande.

  - alterar imagem do jogador 1
  -alterar o nome do jogador 1
*/

//---------------xxxx--------------


const personagens = document.querySelectorAll('.personagem');
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron') return;

        /*
        OBEJITVO 1 - qunado passar mouse em cima do personagem temos que:

        - colocar a classe slecionado no personagem que passamos o mouse em cima para adiciona a anaimação nele.
         - retirar a classe seleiconado do personagem que está selecionado
        */
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('seleiconado');

        personagem.classList.add('selecionado');

 /*
     OBJETIVO 2 - quando passar o mouse em cima do personagem da listagem, torcar a imagem e nomes do personagem grande.
        - alterar imagem do jogador 1
        - alterar o nome do jogador 1
 */


        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');

        nomeJogador1.innerHTML = nomeSelecionado; 
    });
});




