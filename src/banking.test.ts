import Account from './banking';

describe("given a n accoutn class", () => {
    let account: Account;
    const date = new Date();
    beforeEach(() => {
        account = new Account()
        console.log = jest.fn();
    });

    it("should be able print a message", () => {
        console.log = jest.fn();
        account.printStatement()
        expect(console.log).toHaveBeenCalledWith('DATE|AMOUNT|BALANCE\n');
    });

    it('Add new deposit', () => {
        account.deposit(100);
        account.deposit(50);
        account.printStatement()
        expect(console.log).toHaveBeenCalledWith(
            'DATE|AMOUNT|BALANCE\n' + 
            `${new Intl.DateTimeFormat('es-ES').format(date)}|100|100\n` + 
            `${new Intl.DateTimeFormat('es-ES').format(date)}|50|150`  
        );
    })

    it('new withdraw action', () => {
        account.deposit(100);
        account.withdraw(50);
        account.printStatement()
        expect(console.log).toHaveBeenCalledWith(
            'DATE|AMOUNT|BALANCE\n' + 
            `${new Intl.DateTimeFormat('es-ES').format(date)}|100|100\n` + 
            `${new Intl.DateTimeFormat('es-ES').format(date)}|-50|50`  
        );
    })

    it('Check the deposit is positive', () => {
        expect(() => account.deposit(-100)).toThrow('The amount must be positive');
    })

    it('Check the withdraw is positive', () => {
        expect(() => account.deposit(-100)).toThrow('The amount must be positive');
    })
})