const GetPasswordStrength = (password) => {
    if (!password) return { strength: 0, text: '' };

    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.match(/[a-z]+/)) strength += 1;
    if (password.match(/[A-Z]+/)) strength += 1;
    if (password.match(/[0-9]+/)) strength += 1;
    if (password.match(/[$@#&!]+/)) strength += 1;

    const strengthText = ['خیلی ضعیف', 'ضعیف', 'متوسط', 'خوب', 'عالی'];
    return { strength, text: strengthText[strength - 1] || '' };
};

export default GetPasswordStrength
