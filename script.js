const advice = document.querySelector('.advice');

async function getAdvice() {

const dado = document.querySelector('.botao');
    dado.classList.add('animacao');

    setTimeout(() => {
        dado.classList.remove('animacao');
        setTimeout(() => {
            api()
        }, 1000);
       
    }, 1000);

    


 
}



const dado = document.querySelector('.botao');

dado.addEventListener('click', (e) => {
    getAdvice();
    e.preventDefault();
})


async function api ()  {
    
        
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await  response.json();
        console.log(data.slip.id, data.slip.advice);
        
        advice.innerHTML = `
        <div class="advice-conteudo">
           <h1>advice #<span>${data.slip.id}</span></h1>
           <p>"${data.slip.advice}"</p>
           <img class="pattern-desktop" src="./images/pattern-divider-desktop.svg" alt="">
           <img  class="pattern-mobile" src="./images/pattern-divider-mobile.svg" alt="">
         </div>
         <div class="botao" onclick="getAdvice()">
          <img src="./images/icon-dice.svg" alt="">
         </div>
        `
    
}


    
    





