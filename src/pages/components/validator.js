export const requiredValidator = (value, message) => {
    if (!value) {
        return message || 'This field is required';
    }
    return null;
};

export const emailValidator = (value, message) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        return message || 'Invalid email address';
    }
    return null;
};
