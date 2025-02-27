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