class BankAccount {
  constructor(conto) {
    this.conto = conto;
  }
  deposit(fondi) {
    this.conto += fondi;
  }
  withdraw(fondi) {
    this.conto -= fondi;
  }
  view() {
    console.log(this.conto);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
