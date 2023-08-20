document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountstring = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountstring);

    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalstrng = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalstrng);

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    if(newWithdrawAmount > previousBalanceTotal){
        alert('Not enough money');
        return;
    }

    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    balanceTotalElement.innerText = previousBalanceTotal - newWithdrawAmount;
})