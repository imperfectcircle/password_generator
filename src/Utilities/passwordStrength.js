export const passwordStrength = (password, length, setStrength) => {
    let score = 0;

    const hasUpperCase = (password) => password.toLowerCase() != password;
    const hasNumber = (password) => /\d/.test(password);
    const hasSpecialChars = (password) =>
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);
    const hasLength = (length) => length >= 16;

    if (hasUpperCase(password)) score += 2;
    if (hasNumber(password)) score += 2;
    if (hasSpecialChars(password)) score += 2;
    if (hasLength(length)) score += 2;

    setStrength(score);
};
