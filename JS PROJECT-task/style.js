// script.js
let transactions = [];

document.getElementById('transaction-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    const transaction = { id: Date.now(), description, amount, type };
    transactions.push(transaction);

    document.getElementById('transaction-form').reset();

    updateTransactionList();
    updateSummary();
});

function updateTransactionList() {
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = '';

    transactions.forEach(transaction => {
        const transactionDiv = document.createElement('div');
        transactionDiv.innerHTML = `
      ${transaction.description} - ${transaction.amount} 
      <button onclick="editTransaction(${transaction.id})">Edit</button>
      <button onclick="deleteTransaction(${transaction.id})">Delete</button>
    `;
        transactionList.appendChild(transactionDiv);
    });
}

function updateSummary() {
    const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
    const totalExpenses = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
    const balance = totalIncome - totalExpenses;

    document.getElementById('total-income').innerText = totalIncome.toFixed(2);
    document.getElementById('total-expenses').innerText = totalExpenses.toFixed(2);
    document.getElementById('balance').innerText = balance.toFixed(2);
}

function editTransaction(id) {
    const transaction = transactions.find(t => t.id === id);

    if (transaction) {
        document.getElementById('description').value = transaction.description;
        document.getElementById('amount').value = transaction.amount;
        document.getElementById('type').value = transaction.type;

        deleteTransaction(id);
    }
}

function deleteTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    updateTransactionList();
    updateSummary();
}

updateTransactionList();
updateSummary();