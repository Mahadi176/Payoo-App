console.log('machine added')

//  machine id -> input value
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value ;
}

// machine value -> balance 

function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log("Current Balance",Number(balance))
    return Number(balance);
}

// machine value -> set Balance 

function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value ;
 }

 // show function :: Machine ID > Hide all > Show id

 function showOnly(id){
    const addMoney = document.getElementById('add-money')
    const cashOut = document.getElementById('cashout')
//    hide everything
    addMoney.classList.add('hidden')
    cashOut.classList.add('hidden')
        // show selected item 

        const selected = document.getElementById(id);
        selected.classList.remove('hidden')
 }