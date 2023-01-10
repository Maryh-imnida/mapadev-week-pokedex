


/*
Quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.

Para isso vamos precisar trabalhar com 2 elementos: 1 - listagem  
2 - cartão do pokemon

Precisamos criar 2 variáveis js para trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de click feio pelo usuário na listagem de pokemons.

- remover a classe aberto só do cartão que estiver aberto
- ao clicar em um pokemon da listagem, pegamos o id dele para saber qual cartão mostrar
- remover a classe ativo que marca o pokemon selecionado 
- adicionar a classe ativo no ítem da lista selecionado
*/ 

// precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela 
const listaSelecaoPokemons = document.querySelectorAll ('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon =>{
    //vamos precisar trabalhar com um evento de click feio pelo usuário na listagem de pokemons.
    pokemon.addEventListener('click', () => {
        console.log(pokemon)
        //remover a classe aberto só do cartão que estiver aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokemon da listagem, pegamos o id dele para saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado 
        const cartaoPokemonParaAbrir = document.getElementById('cartao-'+ idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no ítem da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')







    })
})