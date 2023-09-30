export const generatePassword = (
    length,
    includeSymbols,
    customSymbols,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    setPassword,
) => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = includeSymbols ? customSymbols : '';

    let validChars = '';
    let generatedPassword = '';

    if (includeUppercase) {
        validChars += uppercaseChars;
    }
    if (includeLowercase) {
        validChars += lowercaseChars;
    }
    if (includeNumbers) {
        validChars += numberChars;
    }
    if (includeSymbols) {
        validChars += symbolChars;
    }

    // Genera la password
    for (let i = generatedPassword.length; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        generatedPassword += validChars[randomIndex];
    }

    //Randomizza la posizione dei caratteri

    const generatedPasswordArray = [...generatedPassword];

    for (let i = generatedPasswordArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i + 1);
        [generatedPasswordArray[i], generatedPasswordArray[j]] = [
            generatedPasswordArray[j],
            generatedPasswordArray[i],
        ];
    }
    generatedPassword = generatedPasswordArray.join('');

    setPassword(generatedPassword);
    return generatedPassword;
};
