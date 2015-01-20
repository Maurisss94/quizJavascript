'use strict';
(function(){
    
    
   
    var origen1 = document.getElementById('opcio1');
    origen1.addEventListener('dragstart',arrossegar,false);
    origen1.addEventListener("dragend", fin, false);
    var origen2 = document.getElementById('opcio2');
    origen2.addEventListener('dragstart',arrossegar,false);
    origen2.addEventListener("dragend", fin, false);
    var origen3 = document.getElementById('opcio3');
    origen3.addEventListener('dragstart',arrossegar,false);
    origen3.addEventListener("dragend", fin, false);
    var origen4 = document.getElementById('opcio4');
    origen4.addEventListener('dragstart',arrossegar,false);
    origen4.addEventListener("dragend", fin, false);
    
    var desti = document.getElementById('solucio');
    desti.addEventListener('dragenter', function(e){ e.preventDefault()}, false);
    desti.addEventListener('dragover', function(e){ e.preventDefault()}, false);
    desti.addEventListener('drop',deixarAnar,false);
    //desti.addEventListener('dragend', fin, false);
    
    function arrossegar(e) {
        
        
        var codigo = "<h2>Resposta Correcte<h2>";
        
        /* 
         * dataTransfer.setData -> L'element que arrosegem 
         * pot portar informació, per crear aquestes 
         * variables fem servir dataTransfer.setData 
         */ 
        
        e.dataTransfer.setData('Text',codigo);
        e.dataTransfer.dropEffect = 'move';
    }

    function deixarAnar(e) {
        
        e.preventDefault();
        
        
        
    }
    function fin(e){
        e.target.style.visibility = "hidden";
        if(e.target.textContent == "Java"){
             desti.innerHTML = e.dataTransfer.getData('Text'); 
        }else{
            desti.innerHTML = "<h4>Error, prova un altre</h4>";
        }
    }
    
    
    
    
    
})()