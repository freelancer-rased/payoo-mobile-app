document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const bankAccountNumber = document.getElementById('bank-account-number').value;
    const addAmount = document.getElementById('add-amount').value;
    const convertedAddAmount = parseFloat(addAmount);

    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);

    const balance = document.getElementById('balance').innerText;
    const convertedBalance = parseFloat(balance);

    if(bankAccountNumber.length === 11){
        
        if(convertedPin === 1234){
           const sum = convertedAddAmount + convertedBalance;
           document.getElementById('balance').innerText =sum;
        }
        else{
            alert('Your pin is not correct')
        }
    }
    else{
        alert('Your number is not correct')
    }
})


// transection switcher section 
document.getElementById('add-money-box')
.addEventListener('click', function(){
    document.getElementById('add-money-container').style.display= 'block';
    document.getElementById('cashout-container').style.display= 'none';

})
document.getElementById('cashout-box')
.addEventListener('click', function(){
    document.getElementById('add-money-container').style.display= 'none';
    document.getElementById('cashout-container').style.display= 'block';

})


// Cashout transection section 
document.getElementById('btn-withdraw')
.addEventListener('click', function(event){
    event.preventDefault();
    const agentNumber = document.getElementById('agent-number').value;
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);

    const cashoutPin = document.getElementById('cashout-pin').value;
    const convertedCashoutPin = parseInt(cashoutPin); 

    if (agentNumber.length === 11){
        if(convertedCashoutPin === 1234){
            const balance = document.getElementById('balance').innerText;
            const substract = balance - convertedAmount;
            document.getElementById('balance').innerText = substract 
        }
        else{
            alert("Your Pin is not Correct")
        }
    }
    else{
        alert('Your Number is not Correct')
    }
})