document.getElementById('add-money-btn')
.addEventListener('click', function(){
    // 1.select bank account 
    const bankAccount = getValueFromInput('add-money-bank');
    console.log(bankAccount)
    if(bankAccount == 'Select a Bank'){
        alert('Please Select a Bank')
        return;
    }
    // 2.Get bank account number 
    const accNo = getValueFromInput('add-money-number');
    if(accNo.length != '11'){
        alert('Invalid Account Number')
        return;
    }

    // 3.get  ammount 
    const amount = getValueFromInput('add-money-amount');

    // 4.get new balance
    const currentBalance = getBalance();
    const newBalance = currentBalance+Number(amount);

    // 5.Get the pin 
    const pin = getValueFromInput('add-money-pin')

    if(pin=='1234'){
        alert(`New Balance Added to Account from ${bankAccount} at ${ new Date()} `)
        setBalance(newBalance);
    }
    else{
        alert('Invalid Pin')
        return;
    }
})