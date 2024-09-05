class Tabuleiro{
    htmlTab = $('.gridTabuleiro')
    pecaDrag = Element

    // Guarda a posição selecionada
    postion = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ]

    // Construtor cria um tabuleiro base
    constructor(){
        var index = 0;
        var styleTop = 0;
        for(let i=0; i < 8; i++){
            // Valores iniciais da posição            
            var styleLeft = 0;
            if(i%2 == 0){
                styleLeft = 1;
            }else{
                styleLeft = 0;
            }
            
            for(let j=0; j < 4; j++){
                
                //<div class="tile" id="tile0" style="top:0vmin;left:10vmin;"></div>
                // Cria os espaços de peças
                var espaco = document.createElement('div');
                espaco.id = `tile${index}`
                espaco.className = 'tile'
                //espaco.setAttribute("draggable", "true")
                $(espaco).css('top', `${styleTop * 10}vmin`)
                $(espaco).css('left', `${styleLeft * 10}vmin`)
                
                // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
                $(espaco).on('dragover',function(evt){
                    evt.preventDefault();
                })

                $(espaco).on("drop", dropPeca);

                this.htmlTab.get(0).appendChild(espaco);

                // Incrementa os contadores
                index++
                styleLeft += 2
            }
            styleTop++    
        }
        this.definePecasInitial();


    }
    definePecasInitial(){
        var divBlackPecas = document.createElement('div');
        var divWhitePecas = document.createElement('div');
        
        divBlackPecas.className = 'player2pieces';
        $('#board').get(0).appendChild(divBlackPecas);

        divWhitePecas.className = 'player1pieces';
        $('#board').get(0).appendChild(divWhitePecas);

    }

    anexaPosicao(tileId, peca){
        // W - Dama Branca
        // 1 - peça branca
        // B - Rei Preta 
        // 2 - Peça preta
        var nId = parseInt(tileId.replace(/^\D+/g, ''));
        var y = Math.floor(nId / 4);
        
        if(y % 2 == 0){ // Par
            var x = 1 + ((nId % 4) * 2)
        }else{ // impar
            var x =(nId % 4) * 2
        }
        
        this.postion[y][x] = peca

        // anexa a parte visual
        var pecaHTML = document.createElement('div')
        pecaHTML.className = 'piece';
        // Definindo posição
        $(pecaHTML).css('top',  `${y * 10}vmin`)
        $(pecaHTML).css('left', `${x * 10}vmin`)
        if(peca == 'B'){
            $(pecaHTML).css("background-image", "url(img/king2.png)")
        }
        if(peca == 'W'){
            $(pecaHTML).css("background-image", "url(img/king1.png)")

        }


        if(peca == 'B' || peca == '-1'){
            $(".player2pieces").get(0).appendChild(pecaHTML)
        }else if (peca == 'W' || peca == '1'){
            $(".player1pieces").get(0).appendChild(pecaHTML)
        }
        
        var idDrop = Element;

        //evento de Remoção
        pecaHTML.setAttribute('draggable', 'true')
        $(pecaHTML).on('drag', function(evt){
            idDrop = evt.currentTarget;
        })

        // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
        $(document.body).on('dragover',function(evt){
            try {
                if($('.gridBorad').get(0).contains(idDrop)){
                    evt.preventDefault();
                }
            } catch (error) {
                    
            }
            
        })

        new function(){
            var PositionGrid = {y: y, x: x}
            $(document.body).on('drop',function(evt){
                try {
                    if($('.gridBorad').get(0).contains(idDrop)){
                        idDrop.remove();
                        gridTab.postion[y][x] = 0;
                    }
                } catch (error) {
                    
                }
                
            })
        }
    }
    
}

