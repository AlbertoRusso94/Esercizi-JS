class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }
  deposit(amount) {
    // throw an exception if amount is negative
    if (amount >= 0) {
      this.#amount += amount;
    } else {
      throw new Error("amount deposito è negativo");
    }
  }

  withdraw(amount) {
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    if (amount >= 0 && amount <= this.#amount) {
      this.#amount -= amount;
    } else if (amount < 0) {
      throw new Error("amount prelievo è negativo");
    } else {
      throw new Error("amount prelievo è superiore al bilancio");
    }
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();
