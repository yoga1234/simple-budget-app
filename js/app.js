class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }

  // submit budget method
  submitBudgetForm() {
    const value = this.budgetInput.value;
    if (value === '' || value < 0) {
      this.budgetFeedback.classList.add("showItem");
      this.budgetFeedback.innerHTML = `<p>Value cannot be empty or negative</p>`;
      const self = this;

      setTimeout(function () {
        self.budgetFeedback.classList.remove("showItem");
      }, 3000)
    } else {
      this.budgetAmount.textContent = value;
      this.budgetInput.value = '';
      this.showBalance();
    }
  }

  // Show balance
  showBalance() {
    const expense = this.totalExpense();
    const total = parseInt(this.budgetAmount.textContent) - expense;
    this.balanceAmount.textContent = total;
  };

  // Total exprense method
  totalExpense() {
    let total = 400;
    return total;
  }

}

function eventListener() {
  const budgetForm = document.getElementById("budget-form");
  const expenseForm = document.getElementById('budget-form');
  const expenseList = document.getElementById('expense-list');

  // New instance of the UI class
  const ui = new UI();

  // Budget form submit
  budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();
    ui.submitBudgetForm();
  });

  // exprense form submit
  expenseForm.addEventListener('submit', function (event) {
    event.preventDefault();
  });

  // Budget click
  expenseList.addEventListener('click', function (event) {
    event.preventDefault();
  });

}

document.addEventListener('DOMContentLoaded', function () {
  eventListener();
});