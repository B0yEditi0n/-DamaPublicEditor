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
    //node.appendChild(evt.currentTarget.cloneNode(true));

}

// Selecionar Drag
function dragPiece(evt){
    //console.log(evt.currentTarget)
    gridTab.pecaDrag = evt.currentTarget;
    //debugger;
}

$('#kingWhite').on('drag', dragPiece);
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

