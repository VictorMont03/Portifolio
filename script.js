var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click",function(){
    document.querySelector(".container").classList.toggle("show-menu");
});

document.querySelector("#qntd").addEventListener("change", atualizarPreco);
document.querySelector("#js").addEventListener("change", atualizarPreco);
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco);
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco);
document.querySelector("#prazo").addEventListener("change", function(){
    const prazo = document.querySelector("#prazo").value
    if (prazo == 1){
        document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana`
    }else{
        document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    }
    atualizarPreco()
})

function atualizarPreco(){
    const quantidade = document.querySelector('#qntd').value /*VALOR INSERIDO NO INPUT*/
    const js = document.querySelector("#js").checked /*marcado sim ou nao*/
    const layout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
    let preco = quantidade * 80;
    if(js) preco *= 1.2
    if(layout) preco += 300
    let taxaUrgencia = 0.6 - prazo*0.1
    preco = preco + (preco * taxaUrgencia) 
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}` /*TOFIXED = numero de casas decimais desejadas*/
}

/*Seleciono o input de id qntd e com o evento addListener "escuto" o evento de mudança no campo
com isso na função é mostrado todas as mudanças de elementos realizadas no campo*/


