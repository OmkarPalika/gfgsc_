export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isValidPassword = (password) => {
    return password.length >= 6;
};

export const isValidURL = (url) => {
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
};
