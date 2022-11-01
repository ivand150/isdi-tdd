// Challenge 2: Banking kata
// Note: This is an advanced example where the solution requires knowledge of using a mocking framework. The possible solution can also have an elaborated design.
// 
// Create a simple bank application with features of depositing, withdrawing, and printing account statements.
// 
// Constraints
// 1. Start with a class with the following structure
// 
// public class Account {
//   public void deposit(int amount)
//   public void withdraw(int amount)
//   public void printStatement()
// }
// 2. You are not allowed to add any other public methods in this class
// 
// 3. Use Strings and Integers for dates and amounts (keep it simple)
// 
// 4. Don’t worry about the spacing in the statement printed in the console
// 
// Requirements
// 1. Deposit into Account
// 
// 2. Withdraw from an Account
// 
// 3. Print the Account statement to the console
// 
// DATE       | AMOUNT  | BALANCE
// 10/04/2014 | 500.00  | 1400.00
// 02/04/2014 | -100.00 | 900.00
// 01/04/2014 | 1000.00 | 1000.00

const LOCALE = "es-ES"

interface Operation {
    amount: number
    date: string
}

class Operations {
    operations: Operation[] = []

    public add (amount: number) {
        this.operations.push({
            amount, 
            date: new Intl.DateTimeFormat(LOCALE).format(new Date())
        })
    }

    public printAll(): string[] {
        let total = 0;
        return this.operations.map(({amount, date}) => {
            return `${date}|${amount}|${total += amount}`;
        });
    } 
}

class Account {
    operations = new Operations()

    private checkAmount (amount: number): void {
        if (amount < 0) throw new Error("The amount must be positive")
    }

    public  deposit(amount: number): void {
        this.checkAmount(amount)
        this.operations.add(amount)
    }

    public  withdraw(amount: number): void {
        this.checkAmount(amount);
        this.operations.add(-amount);
    }

    public  printStatement(): void {
        console.log(
            "DATE|AMOUNT|BALANCE\n" + 
            this.operations.printAll().join("\n")
        );
    }
}

export default Account