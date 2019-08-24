const botaoCarrinho = document.getElementById("cart-info");
const menuCarrinho = document.getElementById("cart");

console.log(menuCarrinho);

//mostrando ou escondendo o menu de carrinho
botaoCarrinho.addEventListener('click',function(){
    //console.log("clicou")
    menuCarrinho.classList.toggle('show-cart');
})

botaoAddProduto = document.querySelectorAll('.store-item-icon');
botaoAddProduto.forEach(function(botao) {
    botao.addEventListener('click',function(event){
        if(event.target.parentElement.classList.contains('store-item-icon')){
        
    let caminhoImagemCompleto = event.target.parentElement.previousElementSibling.src;
    tratarCaminhoImagem(caminhoImagemCompleto);

    }

    });

});

tratarCaminhoImagem = function(caminhoImagemCompleto){
    console.log(tratarCaminhoImagem);
    
}
