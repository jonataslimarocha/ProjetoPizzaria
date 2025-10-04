
const botoesAcrescenta = document.querySelectorAll('.btn-acrescenta');
const botoesDiminui = document.querySelectorAll('.btn-diminui');


botoesAcrescenta.forEach(botao => {
  console.log("chegou1");
   
    botao.onclick = function() {
        
        const input = botao.parentElement.querySelector('.quantidade-input');    
      
        let quantidade = parseInt(input.value);       
      
        quantidade++;        
       
        input.value = quantidade;
    }
});


botoesDiminui.forEach(botao => {
    
    botao.onclick = function() {
        
        const input = botao.parentElement.querySelector('.quantidade-input');        
        
        let quantidade = parseInt(input.value);        
       
        if (quantidade > 0) {
            quantidade--;
        }       
      
        input.value = quantidade;
    }
});
