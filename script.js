document.querySelector('#btn').addEventListener("click", inflationCalculator);

function inflationCalculator(){

    const stopaInflacije = parseFloat(document.querySelector('#inflationRate').value)

    const money = parseFloat(document.querySelector('#money').value)

    const years = parseFloat(document.querySelector('#years').value)
    

    let worth = money + (money * (stopaInflacije / 100));


    for(let i = 1; i < years; i++){
        worth += worth * (stopaInflacije / 100);
    }

    worth= worth.toFixed(2);
    
    const newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = `Današnjih ${money}€ vrijedi isto kao ${worth}€ za ${years} godina!`;
    document.querySelector('.container').appendChild(newElement);
}