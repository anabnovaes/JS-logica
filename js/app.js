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
   // pegando o caminho da imagem a partir do evento de clique      
    let caminhoImagemCompleto = event.target.parentElement.previousElementSibling.src;
   const caminhoImagem = tratarCaminhoImagem(caminhoImagemCompleto);

   const precoProduto = event.target.parentElement.parentElement.parentElement;
   //console.log(precoProduto);
   const precoProdutoSelecionado = tratarPrecoProduto(precoProduto);   
    //console.log(precoProdutoSelecionado);
    inserirProdutoCarrinho(caminhoImagem,precoProdutoSelecionado);
}
    });

});
// tratando o caminho para trazer apenas o nome da imagem
tratarCaminhoImagem = function(caminhoImagemCompleto){
    //console.log(tratarCaminhoImagem);
    const indexCaminhoImagemCompleto = caminhoImagemCompleto.indexOf('img') + 3;
    const caminhoReduzudoImagem = caminhoImagemCompleto.slice(indexCaminhoImagemCompleto);
    console.log(caminhoReduzudoImagem);
    return caminhoReduzudoImagem;
}
//tratando o valor do produto comprado a partir do elemento de clique
tratarPrecoProduto= function(precoProduto){
    const precoDataProduto =parseInt(precoProduto.dataset.price); 
    //console.log(precoDataProduto);
       
    return precoDataProduto;

}
//inserindo os produtos no carrinho 
inserirProdutoCarrinho = function (caminhoImagem, precoProdutoSelecionado){
    const divProdutoInserido = document.createElement('div');
    divProdutoInserido.classList.add(
        'cart-item',
        'd-flex',
        'justify-content-between',
        'text-capitilize',
        'my-3'
    );
const templateProdutoCarrinho = `
<img src="img-cart${caminhoImagem}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">

              <p id="cart-item-title" class="font-weight-bold mb-0">preço</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${precoProdutoSelecionado}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
        `; 
       // console.log(divProdutoInserido)
       divProdutoInserido.innerHTML = templateProdutoCarrinho;
       const carrinho = document.getElementById('cart');
       const totalCarrinho = document.querySelector('.cart-total-container');
       carrinho.insertBefore(divProdutoInserido,totalCarrinho);
       console.log('Inseriu');

;}