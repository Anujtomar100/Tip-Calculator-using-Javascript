//   error message
const warning = document.getElementById('warning');

//   Calculation function
const calculation = () => {
    const bill = parseInt(document.getElementById('inputBill').value);
    const tipPercantage = parseInt(document.getElementById('tipPerc').value);
    const totalPerson = parseInt(document.getElementById('totalPers').value);

    if (validateInput(bill) && validateInput(tipPercantage) && validateInput(totalPerson)) {
        warning.innerText = '';
        const totalTip = ((bill * tipPercantage) / 100) / totalPerson;
        const totalBill = bill + (totalTip * totalPerson);
        const perPerson = totalBill / totalPerson;
       

        document.getElementById('total-tip').innerText = totalTip.toFixed(2);
        document.getElementById('per-person-bill').innerText = perPerson.toFixed(2);
        document.getElementById('total-bill').innerText = totalBill.toFixed(2);
    }

    else {
        warning.innerText = 'Please Provide Valid Number';
    }
};

//   Input validation function
const validateInput = (input) => {
    return (/^\d+$/).test(input);

};

//   Reset field function
const reset = () => {
    warning.innerText = '';
    document.getElementById('inputBill').value = '';
    document.getElementById('tipPerc').value = '';
    document.getElementById('totalPers').value = '';
    document.getElementById('total-tip').innerText = '0.00';
    document.getElementById('per-person-bill').innerText = '0.00';
    document.getElementById('total-bill').innerText = '0.00';
};