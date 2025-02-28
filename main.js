// Add money transection section 
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

           const transectionContainer = document.getElementById('transection-container');
           const createP = document.createElement('p');
           createP.innerText = `
           You have added ${convertedAddAmount} Tk from ${bankAccountNumber} Number
           `

           transectionContainer.appendChild(createP);
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
document.getElementById('cashout-container').style.display= 'none';
document.getElementById('transection-section').style.display = 'none';
document.getElementById('transfer-container').style.display = 'none'
document.getElementById('bonus-container').style.display ='none'
document.getElementById('pay-bill-container').style.display ='none'


// Add money 
document.getElementById('add-money-box')
.addEventListener('click', function(){
    document.getElementById('add-money-container').style.display= 'block';
    document.getElementById('cashout-container').style.display= 'none';
    document.getElementById('transection-section').style.display = 'none';
    document.getElementById('transfer-container').style.display = 'none'
    document.getElementById('bonus-container').style.display ='none'
    document.getElementById('pay-bill-container').style.display ='none'

})

// cashout section 
document.getElementById('cashout-box')
.addEventListener('click', function(){
    document.getElementById('add-money-container').style.display= 'none';
    document.getElementById('transection-section').style.display = 'none';
     document.getElementById('transfer-container').style.display = 'none'
    document.getElementById('cashout-container').style.display= 'block';
    document.getElementById('bonus-container').style.display ='none'
    document.getElementById('pay-bill-container').style.display ='none'

})

// transfer section 
document.getElementById('transfer-box')
.addEventListener('click', function(){
    document.getElementById('transfer-container').style.display = 'block'
    document.getElementById('add-money-container').style.display= 'none';
    document.getElementById('transection-section').style.display = 'none';
    document.getElementById('cashout-container').style.display= 'none';
    document.getElementById('bonus-container').style.display ='none'
    document.getElementById('pay-bill-container').style.display ='none'
})

// Get Bonus section 
document.getElementById('bonus-box')
.addEventListener('click', function(){
    document.getElementById('bonus-container').style.display ='block'
    document.getElementById('transfer-container').style.display = 'none'
    document.getElementById('add-money-container').style.display= 'none';
    document.getElementById('transection-section').style.display = 'none';
    document.getElementById('cashout-container').style.display= 'none';
    document.getElementById('pay-bill-container').style.display ='none'
})

// Pay Bill section 
document.getElementById('pay-bill-box')
.addEventListener('click', function(){
    document.getElementById('pay-bill-container').style.display ='block'
    document.getElementById('bonus-container').style.display ='none'
    document.getElementById('transfer-container').style.display = 'none'
    document.getElementById('add-money-container').style.display= 'none';
    document.getElementById('transection-section').style.display = 'none';
    document.getElementById('cashout-container').style.display= 'none';
})


// Transection history 
document.getElementById('transection-box')
.addEventListener('click', function(){
    document.getElementById('transection-section').style.display = 'block';
    document.getElementById('add-money-container').style.display= 'none';
    document.getElementById('cashout-container').style.display= 'none';
    document.getElementById('transfer-container').style.display = 'none'
    document.getElementById('bonus-container').style.display ='none'
    document.getElementById('pay-bill-container').style.display ='none'

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

            const transectionContainer = document.getElementById('transection-container');
           const createP = document.createElement('p');
           createP.innerText = `
           You have Cashout ${convertedAmount} Tk from ${agentNumber} Number

           `

           transectionContainer.appendChild(createP);
        }
        else{
            alert("Your Pin is not Correct")
        }
    }
    else{
        alert('Your Number is not Correct')
    }
})


// transfer section 
document.getElementById('btn-transfer-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const recipientNumber = document.getElementById('recipient-number').value;
    const recipientAmount = document.getElementById('recipient-amount').value;
    const convertedRecipientAmount = parseFloat(recipientAmount);

    const recipientPin = document.getElementById('recipient-pin').value;
    const convertedRecipientPin = parseInt(recipientPin);

    const mainBalance = document.getElementById('balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (recipientNumber.length === 11){
        if(convertedRecipientPin === 1234){
            const remainBalance = convertedMainBalance - convertedRecipientAmount;
            document.getElementById('balance').innerText = remainBalance;

            const transectionContainer = document.getElementById('transection-container');
           const createP = document.createElement('p');
           createP.innerText = `
           You have transfered ${convertedRecipientAmount} Tk from ${recipientNumber} Number
           `

           transectionContainer.appendChild(createP);
        }
        else{
            alert('Incorrect Pin Number')
        }
    }
    else{
        alert('Incorrect Account Number')
    }
})


// Pay Bill section 
document.getElementById('btn-pay-bill')
.addEventListener('click', function(event){
    event.preventDefault();
    const payBillNumber = document.getElementById('pay-bill-number').value;
    const ammountToPay = document.getElementById('amount-to-pay').value;
    const convertedRecipientAmount = parseFloat(ammountToPay);

    const payPin = document.getElementById('pay-pin').value;
    const convertedPayPin = parseInt(payPin);

    const mainBalance = document.getElementById('balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (payBillNumber.length === 11){
        if(convertedPayPin === 1234){
            const remainBalance = convertedMainBalance - convertedRecipientAmount;
            document.getElementById('balance').innerText = remainBalance;

            const transectionContainer = document.getElementById('transection-container');
           const createP = document.createElement('p');
           createP.innerText = `
           You have paid bill ${convertedRecipientAmount} Tk from ${payBillNumber} Number
           `

           transectionContainer.appendChild(createP);
        }
        else{
            alert('Incorrect Pin Number')
        }
    }
    else{
        alert('Incorrect Account Number')
    }
})