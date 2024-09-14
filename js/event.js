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
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ postion: gridTab.postion,jogador: vezColor}));
    var link =  document.createElement("a");
    link.setAttribute("href", dataStr);
    link.setAttribute('download', 'JogoSalvo.json');
    link.click();
    link.remove();
})

$("#searchLayout").on('click', function(){
    window.location.href = `https://b0yediti0n.github.io/DamaPublicTreino/damaPlay.html?config=${JSON.stringify(gridTab.postion)}&jogador=${vezColor}`;
})


//# evento de dinamização do CSS

function checkSizeDevice(){
    // para tornar tudo mais responsivo
    //console.log($(window).width())
    
    //; remontar os epaços dos tabuleiros
    var listTitles = $("#board .tile");
    for (let i=0; i < listTitles.length; i++){
        var title = listTitles[i]
        try{
           var intId = title.id.replace(/[^0-9\.]+/g, "");
        }catch(e){
            debugger;
        }

        //? id para cordenadas
        var y = Math.floor(intId / 4);        
        if(y % 2 == 0){ // Par
            var x = 1 + ((intId % 4) * 2)
        }else{ // impar
            var x =(intId % 4) * 2
        }
        
        if($(window).width() <= 1200){
            //? Remonta os espaços
            $(title).css("top", `${y * 12}vmin`)
            $(title).css("left", `${x * 12}vmin`)
        }else{
            //? Remonta os espaços
            $(title).css("top", `${y * 10}vmin`)
            $(title).css("left", `${x * 10}vmin`)
        }

    }
}
window.onload = function() {
    checkSizeDevice()
}

$(window).on("resize", checkSizeDevice)