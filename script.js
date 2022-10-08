document.getElementById('btn').addEventListener("click", inflationCalculator);

function inflationCalculator(){
    let stopaInflacije = document.querySelector('#stopaInflacije');
    let novac = document.querySelector('#novac');
    
    stopaInflacije = parseFloat(stopaInflacije.value);
    novac = parseFloat(novac.value);

    let godine = document.querySelector('#godine');
    godine = parseFloat(godine.value);

    let worth = novac + (novac * (stopaInflacije / 100));


    for(let i = 1; i < godine; i++){
        worth += worth * (stopaInflacije / 100);
    }

    worth= worth.toFixed(2);
    
    const newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = `Današnjih ${novac}€ vrijedi isto kao ${worth}€ za ${godine} godina!`;
    document.querySelector('.container').appendChild(newElement);
}