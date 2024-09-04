/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

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
        $(pecaHTML).css('top', $(`#${tileId}`).css('top'))
        $(pecaHTML).css('left', $(`#${tileId}`).css('left'))
        if(peca == 'B'){
            $(pecaHTML).css("background-image", "url(img/king2.png)")
        }
        if(peca == 'W'){
            $(pecaHTML).css("background-image", "url(img/king1.png)")

        }


        if(peca == 'B' || peca == '2'){
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

        // Fazer uma lixeira
        // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
        $(document.body).on('dragover',function(evt){
            console.log(idDrop)
            // if(){
            //     evt.preventDefault();
            // }
            
        })

        //$(espaco).on("drop", dropPeca);

    }
    
}

