{
    // Encapsulation in OOP

    class BankAccount {
        readonly id: number;
        protected name: string;
        private _balance: number;

        constructor(id:number, name: string, balance:number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        public addDeposit(amount:number){
            this._balance = this._balance + amount
        }
        private getBalance(){
            return this._balance
        }
        getHiddenMethod(){
            return this.getBalance()
        }
    }

    class StudentAccount extends BankAccount {
        constructor(id:number, name: string, balance:number){
            super(id, name, balance)
        }
        test(){
            return this.getHiddenMethod();
        }
    }

    const personAccount = new BankAccount(111, "Pritom", 20) 
    personAccount.addDeposit(500);
    const personAccountBalance = personAccount.getHiddenMethod();








}