let cards = document.querySelectorAll(`.card`);
let summa = document.querySelector(`.total b`);

for(let card of cards){
    card.addEventListener(`click`,function(){
card.classList.toggle(`card-active`)
summa.innerHTML = count()
    })

    }
    
    function count(){
        let sum=0;
        for(let card of cards){
            if(card.classList.contains(`card-active`)){
                sum = sum + +card.getAttribute(`data-price`)
            }
        }
        return sum;
    }
console.log(count())