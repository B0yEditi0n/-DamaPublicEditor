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
            peca = '2'
            break;
    }
    gridTab.anexaPosicao(evt.currentTarget.id, peca)
}

// Selecionar Drag
function dragPiece(evt){
    gridTab.pecaDrag = evt.currentTarget;
}

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

