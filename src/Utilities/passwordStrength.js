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

    const isStrong =
        length >= 16 && poorPassword && weakPassword && strongPassword;
    const isGood =
        length >= 12 && (poorPassword || weakPassword || strongPassword);
    const isWeak =
        length >= 8 && (poorPassword || weakPassword || strongPassword);
    const isPoor = length <= 7;

    setPoorPassword(isPoor);
    setWeakPassword(isWeak);
    setGoodPassword(isGood);
    setStrongPassword(isStrong);
};
