import checkPassword from "./password";

describe("Test checkpassword function", () => {
    it("Check the length greater or equal than 8", () => {
        const result = checkPassword('');

        expect(result).toEqual({
            pass: false,
            messages: [
                'Password must be at least 8 characters',
                'The password must contain at least 2 numbers',
                'password must contain at least one capital letter',
                "password must contain at least one special character"
            ]
        });
    })

    it("should have at least 2 numbers", () => {
        const result = checkPassword("asdf")
        expect(result).toEqual({
            pass: false,
            messages: [
                'Password must be at least 8 characters',
                'The password must contain at least 2 numbers',
                'password must contain at least one capital letter',
                "password must contain at least one special character"
            ]
        })
    })

    it("should have at least 2 numbers", () => {
        const result = checkPassword("asdf2")
        expect(result).toEqual({
            pass: false,
            messages: [
                'Password must be at least 8 characters',
                'The password must contain at least 2 numbers',
                'password must contain at least one capital letter',
                "password must contain at least one special character"
            ]
        })
    })

    it("Should have a Capital letter", () => {
        const result = checkPassword("asdf2")
        expect(result).toEqual({
            pass: false,
            messages: [
                'Password must be at least 8 characters',
                'The password must contain at least 2 numbers',
                'password must contain at least one capital letter',
                "password must contain at least one special character"
            ]
        })      
    })

    it("Should have a special character", () => {
        const result = checkPassword("asdf2")
        expect(result).toEqual({
            pass: false,
            messages: [
                'Password must be at least 8 characters',
                'The password must contain at least 2 numbers',
                'password must contain at least one capital letter',
                "password must contain at least one special character"
            ]
        })      
    })

    it("Password is valid", () => {
        const result = checkPassword('Prueba3!9222');
        expect(result).toEqual({pass: true, messages: []});
    })
})