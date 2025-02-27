document.getElementById("btn-login").addEventListener("click", function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById('account-number').value;

    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);

    if(accountNumber.length === 11){
        if(convertedPin === 1234){
            window.location.href = './main.html'
        }
        else{
            alert('Your Pin is not correct')
        }
    }
    else{
        alert('Your account number is not correct')
    }

});
