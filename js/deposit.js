document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountstring = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountstring);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalstrng = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalstrng);

    const currentDepositTotal = newDepositAmount + previousDepositTotal;

    depositTotalElement.innerText = currentDepositTotal;

    depositField.value = '';

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    balanceTotalElement.innerText = previousBalanceTotal + newDepositAmount;
})