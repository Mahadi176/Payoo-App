document.getElementById('cashout-btn')
.addEventListener('click', function(){
    // 1. get agent number and validate 
    const cashoutNumber = getValueFromInput('cashout-number') ;
    if(cashoutNumber.length !='11' ){
        alert('Invalid Agent Number')
        return ;
    }
    // 2.get the amount , validate , covert the number 
    const cashoutAmount = getValueFromInput('cashout-amount') ;

    // 3. get current balance , validate , covert to number 
    const currentBalance = getBalance();

    // 4.Calculate New Balance 
    const newBalance = currentBalance-Number(cashoutAmount);

    if(newBalance < 0){
        alert("Invalid Balance")
        return ;
    }
    // 5. get the pin and verify 
    const Pin = document.getValueFromInput('cashout-pin');
    
    if(Pin == "1234"){
        // 6.true :: show alert verify 
        alert("Cashout Successful")
        console.log(newBalance)
        setBalance(newBalance)
    }
    else{
    // 7. false :: show alert return 
        alert("Invalid Pin")
        return 
        }
})


// document.getElementById('cashout-btn')
// .addEventListener('click', function(){
//     // 1. get agent number and validate 
//     const cashoutNumberInput = document.getElementById('cashout-input') ;
//     const cashoutNumber = cashoutNumberInput.value ;
//     if(cashoutNumber.length !='11' ){
//         alert('Invalid Agent Number')
//         return ;
//     }
//     // 2.get the amount , validate , covert the number 
//     const cashoutAmountInput = document.getElementById('cashout-amount') ;
//     const cashoutAmount = cashoutAmountInput.value ;
//     // 3. get current balance , validate , covert to number 
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;
//     // 4.Calculate New Balance 
//     const newBalance = Number(balance)-Number(cashoutAmount);
    
//     if(newBalance < 0){
//         alert("Invalid Balance")
//         return ;
//     }
//     // 5. get the pin and verify 
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const cashoutPin = cashoutPinInput.value ;
    
//     if(cashoutPin == "1234"){
//         // 6.true :: show alert verify 
//         alert("Cashout Successful")
//         console.log(newBalance)
//         balanceElement.innerText = newBalance;
//     }
//     else{
//     // 7. false :: show alert return 
//         alert("Invalid Pin")
//         return 
//         }
// })