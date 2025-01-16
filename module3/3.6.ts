{
  // Getter and setter

  class BankAccount {
    readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // setter
    set deposit(amount:number){
        this._balance += amount;
    }

    // getter
    get balance() {
      return this._balance;
    }
  }

  const personAccount = new BankAccount(111, "Pritom", 20);
  personAccount.deposit = 50;
  const myBalance = personAccount.balance;
  console.log(myBalance);


}
