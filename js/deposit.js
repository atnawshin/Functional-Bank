// DRY - Do not Repeat Yourself
document.getElementById('btn-deposit').addEventListener('click', function () {
    /* 
    1. get the element by Id
    2. get the value from the element
    3. convert string value to a number
    */
    const newDepositAmount = getInputFieldValueById('deposit-field');
    /* 
    1. get previous deposit total by id
    */
    const previousDepositTotal = getTextElementValueById('deposit-total');

    // calculate new deposit total
    const newDepositTotal = newDepositAmount + previousDepositTotal;

    // set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);

    // get previous balance by using function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})