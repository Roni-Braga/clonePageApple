const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const nomeCor = document.getElementById("nome-cor-selecionada")
const miniaturaImagem0 = document.getElementById("0-imagem-miniatura");
const miniaturaImagem1 = document.getElementById("1-imagem-miniatura");
const miniaturaImagem2 = document.getElementById("2-imagem-miniatura");

const azulInverno ={
    nome:"azul-Inverno",
    pasta: "imagens-azul-inverno"
}
const estelar = {
    nome:"estelar",
    pasta:"imagens-estelar"
}
const meiaNoie = {
    nome:"meia-noite",
    pasta: "imagens-meia-noite"

}
const rosaClaro ={
    nome:"rosa-claro",
    pasta: "imagens-rosa-claro"
}
const verdeCipreste ={
    nome:"verde-cipreste",
    pasta:"imagens-verde-cipreste"
}

const opcoesCores = [verdeCipreste,azulInverno,meiaNoie,estelar,rosaClaro,];
const opcoesTamanho = ["41 mm", "45 mm"];
let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;
function trocarImagem(){
    const idOpcaoSelecionada = document.querySelector("[name='opcao-imagem']:checked").id
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = "./imagens/opcoes-cores/"+opcoesCores[corSelecionada].pasta+"/imagem-"+imagemSelecionada+".jpeg"
}

function trocarTamanho(){
    // atualizar variavel do controle do tamanho da caixa
    const idOpcaoSelecionada = document.querySelector("[name='opcao-tamanho']:checked").id
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    // mudar o titulo do produto
    tituloProduto.innerText = "Pulseira loop esportiva "+ opcoesCores[corSelecionada].nome +" para caixa de "+ opcoesTamanho[tamanhoSelecionado];
    // mudar tamanho da imagem de acordo com a opção
    if(opcoesTamanho[tamanhoSelecionado] === "41 mm"){
        imagemVisualizacao.classList.add("caixa-pequena");
    }else{
        imagemVisualizacao.classList.remove("caixa-pequena");
    }
    
}

function trocarCor(){
    // atualizar cor selecionada
    const idOpcaoSelecionada = document.querySelector("[name='opcao-cor']:checked").id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    // trocar titulo da página
    tituloProduto.innerText = "Pulseira loop esportiva "+ opcoesCores[corSelecionada].nome +" para caixa de "+ opcoesTamanho[tamanhoSelecionado];
    // trocar nome da cor
    nomeCor.innerText = "Cor - "+ opcoesCores[corSelecionada].nome;
    // trocar imagens em miniaturas exibidas
    miniaturaImagem0.src = "./imagens/opcoes-cores/"+ opcoesCores[corSelecionada].pasta +"/imagem-0.jpeg";
    miniaturaImagem1.src = "./imagens/opcoes-cores/"+ opcoesCores[corSelecionada].pasta +"/imagem-1.jpeg";
    miniaturaImagem2.src = "./imagens/opcoes-cores/"+ opcoesCores[corSelecionada].pasta +"/imagem-2.jpeg";
    // troca imagem de visualizacao
    imagemVisualizacao.src = "./imagens/opcoes-cores/"+ opcoesCores[corSelecionada].pasta +"/imagem-"+ imagemSelecionada +".jpeg";
}
