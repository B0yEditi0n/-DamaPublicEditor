var gridTab = new Tabuleiro;

// Drop
function dropPeca(evt){
    var peca = '';
    switch(gridTab.pecaDrag.id){
        case 'kingWhite':
            peca = 'W'
            break;
        case 'white':
            peca = '1'
            break;
        case 'kingBlack':
            peca = 'B'
            break;
        case 'black':
            peca = '-1'
            break;
    }
    gridTab.anexaPosicao(evt.currentTarget.id, peca)
}

// Selecionar Drag
function dragPiece(evt){
    gridTab.pecaDrag = evt.currentTarget;
}
var vezColor = 1 // brancas 
$('#choiceColor').on('click', function(){
    vezColor *= -1
    // Atualiza a cor
    if(vezColor > 0){
        $('.gIcon').css("background-color", "white")
        $('.gIcon').css("color", "black")
        $('.gIcon').prop('title', 'Brancas Começam');
    }else{
        $('.gIcon').css("background-color", "black")
        $('.gIcon').css("color", "white")
        $('.gIcon').prop('title', 'Pretas Começam');
    }
    

})
$('#kingWhite').on('drag', dragPiece);
$('#kingWhite').on('dragstart', dragPiece);
$('#white').on('drag', dragPiece);
$('#kingBlack').on('drag', dragPiece);
$('#black').on('drag', dragPiece);

$("#saveLayout").on('click', function(){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(gridTab.postion));
    var link =  document.createElement("a");
    link.setAttribute("href", dataStr);
    link.setAttribute('download', 'JogoSalvo.json');
    link.click();
    link.remove();
})

$("#searchLayout").on('click', function(){
    window.location.href = `https://b0yediti0n.github.io/DamaPublicTreino/damaPlay.html?config=${JSON.stringify(gridTab.postion)}&jogador=${vezColor}`;
})



