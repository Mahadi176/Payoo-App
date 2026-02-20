console.log('machine added')

//  machine id -> input value
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(value) ;
    return value ;
}

// machine id -> balance 

function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log("Current Balance",Number(balance))
    return Number(balance);
}

// machine id -> set Balance 

function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value ;
 }
