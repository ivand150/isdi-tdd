// **Challenge 1 – Password input field validation**

// Create a function that can be used as a validator for the password field of a user registration form. The validation function takes a string as an input and returns a validation result. The validation result should contain a boolean indicating if the password is valid or not, and also a field with the possible validation errors.

// **Requirements**
// 1. The password must be at least 8 characters long. If it is not met, then the following error message should be returned: “Password must be at least 8 characters”

// 2. The password must contain at least 2 numbers. If it is not met, then the following error message should be returned: “The password must contain at least 2 numbers”

// 3. The validation function should handle multiple validation errors.

// For example, “somepassword” should an error message: “Password must be at least 8 characters\nThe password must contain at least 2 numbers”
// 4. The password must contain at least one capital letter. If it is not met, then the following error message should be returned: “password must contain at least one capital letter”

// 5. The password must contain at least one special character. If it is not met, then the following error message should be returned: “password must contain at least one special character”
interface PasswordValidation {
    pass: boolean,
    messages: string[]
}

const REGEX_HAS_NUMBER = new RegExp('^.*[0-9].*[0-9].$');
const REGEX_SPECIAL_CHAR = new RegExp('^[a-zA-Z0-9]*$');

const PASSWORD_MIN_CHARACTERS: number = 8

const ERROR_MIN_CHARACTERS: string = `Password must be at least ${PASSWORD_MIN_CHARACTERS} characters`
const ERROR_NUMBERS = 'The password must contain at least 2 numbers'
const ERROR_CAPITAL_LETTER = 'password must contain at least one capital letter'
const ERROR_SPECIAL_CHARACTER = 'password must contain at least one special character'

const checkPassword = (password: string): PasswordValidation => {
    const validation: PasswordValidation = {pass: true, messages: []};
    if (password.length < PASSWORD_MIN_CHARACTERS) {
        validation.messages.push(ERROR_MIN_CHARACTERS)
    }

    if (!REGEX_HAS_NUMBER.test(password)) {
        validation.messages.push(ERROR_NUMBERS);
    }

    if (password.toLocaleLowerCase() === password) {
        validation.messages.push(ERROR_CAPITAL_LETTER);
    }

    if (REGEX_SPECIAL_CHAR.test(password)) {
        validation.messages.push(ERROR_SPECIAL_CHARACTER);
    }

    validation.pass = validation.messages.length === 0;
 
    return validation;
}

export default checkPassword