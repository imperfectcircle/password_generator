export const setNotification = (message, _setNotification) => {
    _setNotification(message);
    setTimeout(() => {
        _setNotification('');
    }, 5000);
};
