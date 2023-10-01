export const passwordStrength = (
    password,
    length,
    setPoorPassword,
    setWeakPassword,
    setGoodPassword,
    setStrongPassword,
) => {
    const poorRegExp = /[a-zA-Z]/;
    const weakRegExp = /^(?=.*?[0-9]).*$/;
    const strongRegExp = /^(?=.*?[#?!@$%^&*-]).*$/;

    const poorPassword = poorRegExp.test(password);
    const weakPassword = weakRegExp.test(password);
    const strongPassword = strongRegExp.test(password);

    setPoorPassword(length < 8);
    setWeakPassword(
        length >= 8 && poorPassword && (weakPassword || strongPassword),
    );
    setGoodPassword(
        length >= 12 && poorPassword && (weakPassword || strongPassword),
    );
    setStrongPassword(
        length >= 16 && poorPassword && weakPassword && strongPassword,
    );
};
