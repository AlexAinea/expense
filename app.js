let totalExpenses = 0;

function addExpense(){
    const expenseNameInput = document.getElementById('expenseName');
    const expenseAmountInput = document.getElementById('expenseAmount');
    const expenseName = expenseNameInput.value;
    const expenseAmount = parseFloat(expenseAmountInput.value);

    if (expenseName.trim() === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Please enter valid expense name and amount.');
        return;
      };
    const expenseList = document.getElementById('expenseList');
    const li = document.createElement('li');
    li.textContent = `${expenseName}: $${expenseAmount}`;
    expenseList.appendChild(li);

    totalExpenses += expenseAmount;
    document.getElementById('totalExpenses').textContent = totalExpenses.toFixed(2);

    expenseNameInput.value = '';
    expenseAmountInput.value = '';
  
}